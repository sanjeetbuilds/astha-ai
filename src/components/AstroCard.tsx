"use client";

import { Astrologer } from "@/types/search";

interface AstroCardProps {
  astrologer: Astrologer;
  isTopMatch: boolean;
}

export default function AstroCard({ astrologer, isTopMatch }: AstroCardProps) {
  const nameParts = astrologer.name.split(" ");
  const avatarLetter =
    nameParts.length > 1 ? nameParts[1][0] : nameParts[0][0];

  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        border: isTopMatch ? "1.5px solid #FF6B00" : "1px solid #ebebeb",
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
        boxShadow: isTopMatch
          ? "0 2px 12px rgba(255,107,0,0.12)"
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {isTopMatch && (
        <div
          style={{
            position: "absolute",
            top: -10,
            left: 14,
            background: "#FF6B00",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: 20,
            whiteSpace: "nowrap",
          }}
        >
          ✦ Aapke liye Best Match
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        {/* Avatar */}
        <div
          style={{
            width: 62,
            height: 62,
            minWidth: 62,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
            border: "2px solid #FF6B00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 700,
            color: "#FF6B00",
          }}
        >
          {avatarLetter}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "#FF6B00",
              marginBottom: 2,
            }}
          >
            {astrologer.name}
          </div>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 1 }}>
            {astrologer.skills}
          </div>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 1 }}>
            {astrologer.languages}
          </div>
          <div style={{ fontSize: 12, color: "#888" }}>
            {astrologer.experience}
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            minWidth: 64,
          }}
        >
          <button
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              border: astrologer.available
                ? "none"
                : "1.5px solid #ccc",
              background: astrologer.available ? "#FF6B00" : "transparent",
              color: astrologer.available ? "#fff" : "#888",
            }}
          >
            Chat
          </button>
          <button
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              border: "1.5px solid #ccc",
              background: "transparent",
              color: "#888",
            }}
          >
            Call
          </button>
        </div>
      </div>

      {/* Rating & Price row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            background: "#FFF3E0",
            color: "#FF6B00",
            fontSize: 11,
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: 10,
          }}
        >
          ⭐ {astrologer.rating}
        </span>
        <span style={{ fontWeight: 700, fontSize: 13, color: "#222" }}>
          {astrologer.price_offer}
        </span>
        <span
          style={{
            textDecoration: "line-through",
            color: "#aaa",
            fontSize: 12,
          }}
        >
          {astrologer.price_original}
        </span>
        <span style={{ color: "#aaa", fontSize: 11 }}>
          {astrologer.minutes_consulted}
        </span>
      </div>

      {/* Why matched */}
      <div
        style={{
          background: "#FFF8F2",
          border: "1px solid #FFE4C8",
          borderRadius: 8,
          padding: 8,
          marginTop: 10,
          fontSize: 12,
          color: "#C45A00",
        }}
      >
        🎯 Aapke liye kyun: {astrologer.why_matched}
      </div>

      {/* Unavailable bar */}
      {!astrologer.available && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#F5F5F5",
            borderRadius: 8,
            padding: "8px 12px",
            marginTop: 8,
            fontSize: 12,
            color: "#888",
          }}
        >
          <span>⏱ Wait time ~10 min</span>
          <button
            style={{
              background: "transparent",
              border: "1.5px solid #FF6B00",
              color: "#FF6B00",
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            NOTIFY ME
          </button>
        </div>
      )}
    </div>
  );
}
