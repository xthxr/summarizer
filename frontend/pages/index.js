import { useState } from "react";
import SummaryCard from "../components/SummaryCard";

export default function Home() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      alert("Failed to summarize");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-black text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Webpage Summarizer</h1>
      <input
        className="p-2 w-full max-w-md rounded text-black"
        type="text"
        placeholder="Paste website URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded"
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && <SummaryCard summary={summary} />}
    </div>
  );
}
