"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  onClear,
}: SearchBarProps) {
  return (
    <div style={{ position: "relative" }}>
      {/* Search icon */}
      <span
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 16,
          color: "#aaa",
          pointerEvents: "none",
        }}
      >
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
        placeholder="Apni problem likhein... heartbreak, naukri, tension"
        style={{
          width: "100%",
          background: "#F5F5F5",
          border: "none",
          borderRadius: 10,
          padding: "12px 40px 12px 38px",
          fontSize: 14,
          outline: "none",
          color: "#333",
          boxSizing: "border-box",
        }}
      />

      {/* Clear button */}
      {value.length > 0 && (
        <button
          onClick={onClear}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "#ddd",
            border: "none",
            borderRadius: "50%",
            width: 22,
            height: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 12,
            color: "#666",
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
