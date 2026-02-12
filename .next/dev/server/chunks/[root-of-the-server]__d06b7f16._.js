module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
const API_KEY = process.env.GVAPI;
const schema = {
    description: "Medical bill analysis for insurance appeal",
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT,
    properties: {
        email: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING,
            description: "A professional email draft to the insurance company or provider regarding the claim.",
            nullable: false
        },
        appeal: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].STRING,
            description: "A formal appeal letter text, citing specific codes and dates from the document.",
            nullable: false
        },
        potential_money_back: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].NUMBER,
            description: "The estimated dollar amount the patient could save or be reimbursed.",
            nullable: false
        },
        percentage: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].NUMBER,
            description: 'The probability as a NUMBER BETWEEN 0 and 100 (NOT a percentage like 8500, just a number like 85 for 85%)',
            nullable: false
        },
        total_billed_amount: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaType"].NUMBER,
            description: 'The total amount billed on the medical document before any adjustments or appeals.',
            nullable: false
        }
    },
    required: [
        "email",
        "appeal",
        "potential_money_back",
        "percentage",
        "total_billed_amount"
    ]
};
async function POST(request) {
    try {
        if (!API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Server misconfigured: Missing GEMINI_API_KEY"
            }, {
                status: 500
            });
        }
        const formData = await request.formData();
        const file = formData.get("file");
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No file received."
            }, {
                status: 400
            });
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Data = buffer.toString("base64");
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](API_KEY);
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

APPEAL LETTER FORMAT - FOLLOW EXACTLY:
Use \\n for line breaks within the letter. Each item below MUST be on its own line:

[Patient Full Name]\\n
[Street Address]\\n
[City, State ZIP]\\n
\\n
${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })}\\n
\\n
Re: Appeal for Medical Claim\\n
Patient: [Patient Name]\\n
Member ID: [ID from document]\\n
Date of Service: [DOS from document]\\n
Bill/Claim Number: [from document]\\n
\\n
Dear Claims Department,\\n
\\n
[Opening paragraph stating purpose of the appeal]\\n
\\n
[Body paragraph: Describe the specific billing error(s) with CPT codes, dates, and amounts]\\n
\\n
[Body paragraph: Explain why the charges are incorrect and cite evidence from the document]\\n
\\n
[Closing paragraph: Request for review and adjustment, provide contact information]\\n
\\n
Sincerely,\\n
\\n
[Patient Name]

CRITICAL FORMATTING RULES:
- Use \\n to create line breaks - DO NOT put multiple items on the same line
- Patient name, address, city/state/zip MUST each be on separate lines
- Each "Re:" detail (Patient, Member ID, Date of Service, Bill Number) MUST be on separate lines
- DO NOT include "[Insurance Company Address]" or any insurance address placeholder
- Use actual patient details from the document, not placeholders
- Be professional and factual
- Current date: ${new Date().toISOString()}

RESPONSE FORMAT EXAMPLE:
{
  "percentage": 75,  // ← THIS IS A NUMBER 0-100, NOT 7500!
  "potential_money_back": 150.00,
  "total_billed_amount": 500.00,
  "email": "...",
  "appeal": "..."
}

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
                    mimeType: file.type
                }
            }
        ]);
        const response = await result.response;
        const text = response.text();
        let parsedData;
        try {
            parsedData = JSON.parse(text);
        } catch (e) {
            console.error("JSON Parse Error:", text);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "AI response was not valid JSON."
            }, {
                status: 500
            });
        }
        // AGGRESSIVE validation to fix the percentage issue
        let percentage = Number(parsedData.percentage) || 0;
        // If it's absurdly high (like 8500), it probably meant 85%
        if (percentage > 100) {
            percentage = Math.min(percentage / 100, 90); // Divide by 100 and cap at 90
        }
        // Clamp between 0 and 90
        percentage = Math.min(Math.max(percentage, 0), 90);
        const potentialSavings = Math.max(Number(parsedData.potential_money_back) || 0, 0);
        const totalBilled = Math.max(Number(parsedData.total_billed_amount) || 0, 0);
        // Sanity check: savings can't exceed total billed
        const finalSavings = Math.min(potentialSavings, totalBilled);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                email: parsedData.email || "",
                appeal: parsedData.appeal || "",
                potential_money_back: finalSavings,
                percentage: Math.round(percentage),
                total_billed_amount: totalBilled
            }
        });
    } catch (error) {
        console.error("Processing Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to process document."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d06b7f16._.js.map