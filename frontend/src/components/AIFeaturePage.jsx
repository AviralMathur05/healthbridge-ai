import { useState } from "react";

export default function AIFeaturePage({
  title,
  placeholder,
  apiFunction,
}) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const data = await apiFunction(prompt);
      setResponse(data.response);
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <textarea
        rows={6}
        className="w-full border rounded-xl p-4"
        placeholder={placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Processing..." : "Submit"}
      </button>

      {response && (
        <div className="mt-6 rounded-2xl bg-white shadow-lg p-6 border">
          <h2 className="text-xl font-bold mb-3">AI Response</h2>
          <div className="whitespace-pre-wrap">{response}</div>
        </div>
      )}
    </div>
  );
}