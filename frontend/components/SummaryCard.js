export default function SummaryCard({ summary }) {
  return (
    <div className="mt-6 p-4 bg-gray-900 rounded max-w-xl">
      <h2 className="text-xl font-semibold mb-2">Summary:</h2>
      <p className="text-gray-300">{summary}</p>
    </div>
  );
}
