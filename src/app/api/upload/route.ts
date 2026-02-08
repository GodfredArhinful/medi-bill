import { NextResponse } from "next/server";
import { GoogleGenerativeAI, Schema, SchemaType } from "@google/generative-ai";

const API_KEY = process.env.GVAPI;

const schema: Schema = {
  description: "Medical bill analysis for insurance appeal",
  type: SchemaType.OBJECT,
  properties: {
    email: {
      type: SchemaType.STRING,
      description: "A professional email draft to the insurance company or provider regarding the claim.",
      nullable: false,
    },
    appeal: {
      type: SchemaType.STRING,
      description: "A formal appeal letter text, citing specific codes and dates from the document.",
      nullable: false,
    },
    potential_money_back: {
      type: SchemaType.NUMBER,
      description: "The estimated dollar amount the patient could save or be reimbursed.",
      nullable: false,
    },
    percentage: {
      type: SchemaType.NUMBER,
      description: 'The probability (0-100) the appeal will be won and total compensation received',
      nullable: false,
    },
    total_billed_amount: {
      type: SchemaType.NUMBER,
      description: 'The total amount billed on the medical document before any adjustments or appeals.',
      nullable: false,
    },
  },
  required: ["email", "appeal", "potential_money_back", "percentage", "total_billed_amount"],
};

export async function POST(request: Request) {
  try {
    if (!API_KEY) {
      return NextResponse.json(
        { error: "Server misconfigured: Missing GEMINI_API_KEY" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Data = buffer.toString("base64");

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema
      }
    });

    const prompt = `You are an expert medical billing auditor analyzing this document for errors, overcharges, duplicates, and billing inconsistencies.

CRITICAL ANALYSIS RULES:
1. ONLY flag actual errors you can identify in the document
2. Be conservative - if you're unsure, DON'T claim an error exists
3. Common issues to look for:
   - Duplicate line items (same CPT/HCPCS code billed multiple times for same date)
   - Prices significantly above Medicare rates or regional averages
   - Unbundling (charging separately for services that should be bundled)
   - Upcoding (using a higher-level code than documented)
   - Services not documented or medically necessary
   - Quantity errors (e.g., 2 ER visits on same day)

APPEAL PROBABILITY GUIDELINES:
- Only give high probability (70-95%) if there are CLEAR, DOCUMENTED errors
- Duplicate charges flagged by insurance: 75-90% success
- Significant price outliers with benchmark data: 60-80% success
- Unbundling issues: 50-70% success
- Minor discrepancies or missing documentation: 30-50% success
- Weak or speculative claims: 10-30% success
- NEVER return 100% - even slam-dunk cases have 5-10% denial risk

POTENTIAL SAVINGS CALCULATION:
- ONLY include amounts for charges you can specifically identify as errors
- For duplicates: include the full duplicate amount
- For overcharges: estimate based on Medicare rates or fair market value
- Be conservative - underestimate rather than overestimate
- If you cannot identify ANY specific errors, set potential_money_back to 0

FORMATTING REQUIREMENTS:
The appeal letter MUST be professionally formatted with proper structure:

[Patient Name]
[Patient Address]
[City, State ZIP]

[Current Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}]

[Insurance Company/Provider Name]
[Claims Department]
[Address if available]

Re: Appeal for Medical Claim - [Patient Name]
    Member ID: [ID from document]
    Date of Service: [DOS from document]
    Bill/Claim Number: [from document]

Dear [Insurance Company/Claims Department],

[Opening paragraph stating purpose]

[Body paragraph 1: Describe the specific billing error(s)]

[Body paragraph 2: Cite specific codes, dates, amounts, and why they're incorrect]

[Body paragraph 3: Request for action and resolution]

[Closing paragraph]

Sincerely,

[Patient Name]

IMPORTANT RULES:
- Use actual patient/provider details from the document
- If information is missing, use placeholder like "[Patient Name]" or omit that field
- Include specific CPT/HCPCS codes, dates, and amounts from the document
- Use proper paragraph breaks (\\n\\n between paragraphs)
- Be professional and factual, not emotional
- Current date is ${new Date().toISOString()}

ANALYSIS CHECKLIST:
1. Read all line items carefully
2. Check for duplicate CPT/HCPCS codes on same date
3. Look for "DUPLICATE" or "OVERCHARGE" flags in the document
4. Compare prices to typical ranges (if you have context)
5. Check quantities for reasonableness
6. Only appeal what you can specifically justify

Remember: Most bills are actually correct. Only flag real errors you can prove.`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    let parsedData;
    try {
      parsedData = JSON.parse(text);
    } catch (e) {
      console.error("JSON Parse Error:", text);
      return NextResponse.json(
        { error: "AI response was not valid JSON." },
        { status: 500 }
      );
    }

    // Validation and cleanup
    const percentage = Math.min(Math.max(parsedData.percentage || 0, 0), 95); // Cap at 95%
    const potentialSavings = Math.max(parsedData.potential_money_back || 0, 0);
    const totalBilled = Math.max(parsedData.total_billed_amount || 0, 0);

    // Sanity check: savings can't exceed total billed
    const finalSavings = Math.min(potentialSavings, totalBilled);

    return NextResponse.json({
      success: true,
      data: {
        email: parsedData.email || "",
        appeal: parsedData.appeal || "",
        potential_money_back: finalSavings,
        percentage: percentage,
        total_billed_amount: totalBilled,
      }
    });

  } catch (error) {
    console.error("Processing Error:", error);
    return NextResponse.json(
      { error: "Failed to process document." },
      { status: 500 }
    );
  }
}