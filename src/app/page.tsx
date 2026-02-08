"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// Define the shape of the data we expect from the backend
interface AnalysisResult {
  email: string;
  appeal: string;
  potential_money_back: string;
  percentage?: string; // Optional, as it depends on your specific backend schema
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  
  // New state to hold the AI response data
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus("idle");
      setMessage("");
      setAnalysis(null); // Reset analysis when a new file is selected
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setStatus("uploading");
    setAnalysis(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Upload failed");
      }

      setStatus("success");
      setMessage("Analysis Complete!");
      
      // Save the structured data to state
      setAnalysis(result.data);
      console.log("Server response:", result);
      
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const handleSendEmail = async () => {
    if (!analysis?.email) return;

    console.log("Sending email with content:", analysis.email);
    
    // TODO: Implement the actual email sending logic here
    // Example: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify({ body: analysis.email }) })
    
    alert("Email sending logic triggered! (Check console for content)");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-gray-50">
      
      {/* Upload Section */}
      <div className="z-10 w-full max-w-2xl p-8 bg-white rounded-lg shadow-md mb-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Medical Record Upload</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select Record (PDF, JPG, PNG)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={!file || status === "uploading"}
            className={`w-full px-4 py-2 text-white font-bold rounded-md transition-colors
              ${status === "uploading" 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {status === "uploading" ? "Analyzing with AI..." : "Secure Upload & Analyze"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "error" && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            ❌ {message}
          </div>
        )}
      </div>

      {/* Results Section (Only visible if analysis exists) */}
      {analysis && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Recovery Stats Card */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
              <h3 className="text-sm font-medium text-green-800 uppercase tracking-wider">Potential Recovery</h3>
              <p className="mt-2 text-3xl font-extrabold text-green-600">{analysis.potential_money_back}</p>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <h3 className="text-sm font-medium text-blue-800 uppercase tracking-wider">Win Probability</h3>
              <p className="mt-2 text-3xl font-extrabold text-blue-600">
                {Number(analysis.percentage) || "N/A"}
              </p>
            </div>
          </div>

          {/* Appeal Letter Display */}
          <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Appeal Letter</h2>
              <button 
                onClick={() => navigator.clipboard.writeText(analysis.appeal)}
                className="text-sm text-gray-500 hover:text-blue-600 underline"
              >
                Copy Text
              </button>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 h-96 overflow-y-auto font-mono text-sm whitespace-pre-wrap text-gray-700">
              {analysis.appeal}
            </div>
          </div>

          {/* Email Action Area */}
          <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-100 flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">Ready to submit?</h3>
            <p className="text-indigo-700 mb-4 text-sm max-w-md">
              We have drafted an email to your provider based on this appeal. Click below to review and send.
            </p>
            <button
              onClick={handleSendEmail}
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>📧</span> Prepare Draft Email
            </button>
          </div>

        </div>
      )}
    </main>
  );
}