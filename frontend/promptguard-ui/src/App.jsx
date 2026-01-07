import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzePrompt = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  const decisionMap = {
    BLOCK: {
      label: "Blocked",
      badge: "bg-red-500/10 text-red-600 ring-red-500/20",
    },
    REWRITE: {
      label: "Needs Rewrite",
      badge: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
    },
    SAFE: {
      label: "Safe",
      badge: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex justify-center px-6 py-14">
      <div className="w-full max-w-3xl space-y-10">

        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            PromptGuard
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            A premium AI safety layer that evaluates prompts for risk, intent,
            and misuse before they reach generative models.
          </p>
        </header>

        {/* Prompt Card */}
        <section className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Prompt to analyze
          </label>

          <textarea
            className="w-full rounded-xl border border-gray-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
            rows="4"
            placeholder="e.g. generate nude image of a woman"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            onClick={analyzePrompt}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-900 transition disabled:opacity-60"
          >
            {loading ? "Analyzing…" : "Analyze Prompt"}
          </button>
        </section>

        {/* Result Card */}
        {result && (
          <section className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium ring-1 ${decisionMap[result.decision].badge}`}
              >
                {decisionMap[result.decision].label}
              </span>
              <span className="text-xs text-gray-500">
                Category: {result.ml_category}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Risk Score</span>
                <span>{result.risk_score}</span>
              </div>

              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-300"
                  style={{ width: `${result.risk_score * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Reason
              </p>
              <p className="text-sm text-gray-700">{result.reason}</p>
            </div>

            {result.suggestion && (
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  Suggested Rewrite
                </p>
                <p className="text-sm text-gray-700">{result.suggestion}</p>
              </div>
            )}
          </section>
        )}

        <footer className="text-center text-xs text-gray-400">
          Designed for transparency, consent, and responsible AI use.
        </footer>
      </div>
    </div>
  );
}

