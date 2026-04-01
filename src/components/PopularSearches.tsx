"use client";

const QUERIES = [
  "Breakup ho gaya",
  "Sarkari naukri chahiye",
  "Shaadi mein delay",
  "Paise ki problem",
  "Bhoot pret ka darr",
  "Ex ko wapas laana",
];

interface PopularSearchesProps {
  onSelect: (query: string) => void;
}

export default function PopularSearches({ onSelect }: PopularSearchesProps) {
  return (
    <div style={{ marginTop: 16 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "#999",
          marginBottom: 10,
          letterSpacing: 0.3,
        }}
      >
        LOG AISE SEARCH KARTE HAIN 🔥
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {QUERIES.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            style={{
              background: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: 20,
              padding: "7px 14px",
              fontSize: 13,
              color: "#444",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
