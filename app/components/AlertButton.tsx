"use client";

export default function AlertButton() {
  return (
    <div className="card mb-4">
      <button
        onClick={() => alert("Button clicked!")}
        className="px-4 py-2 bg-green-500 text-white rounded-xl">
        Alert Button
      </button>
    </div>
  );
}
