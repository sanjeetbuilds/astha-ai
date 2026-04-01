"use client";

const QUERIES = [
  "Dil toot gaya 💔",
  "Naukri nahi mil rahi 😔",
  "Shaadi mein rukawat",
  "Paisa haath nahi aata",
  "Ghar mein sukoon nahi",
  "Ex ke baare mein jaanna hai",
];

interface PopularSearchesProps {
  onSelect: (query: string) => void;
}

export default function PopularSearches({ onSelect }: PopularSearchesProps) {
  return (
    <div style={{ marginTop: 16 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#888",
          marginBottom: 10,
          letterSpacing: 0.3,
        }}
      >
        Aaj kya dhoondh rahe hain log:
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
