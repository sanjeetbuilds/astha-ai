"use client";

import { AstrologerData } from "@/data/mockData";
import { Astrologer } from "@/types/search";

interface AstroCardProps {
  astrologer: Astrologer | AstrologerData;
  isTopMatch?: boolean;
  showWhyMatched?: boolean;
  onClick?: () => void;
}

export default function AstroCard({
  astrologer,
  isTopMatch = false,
  showWhyMatched = true,
  onClick,
}: AstroCardProps) {
  const photo =
    "photo" in astrologer ? (astrologer as AstrologerData).photo : null;
  const nameParts = astrologer.name.split(" ");
  const avatarLetter =
    nameParts.length > 1 ? nameParts[1][0] : nameParts[0][0];

  return (
    <div
      onClick={onClick}
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
        cursor: onClick ? "pointer" : "default",
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
        {photo ? (
          <img
            src={photo}
            alt={astrologer.name}
            style={{
              width: 62,
              height: 62,
              minWidth: 62,
              borderRadius: "50%",
              border: "2px solid #FF6B00",
              objectFit: "cover",
            }}
          />
        ) : (
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
        )}

        {/* Info + Buttons */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
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
                {"languages" in astrologer ? astrologer.languages : ""}
              </div>
              <div style={{ fontSize: 12, color: "#888" }}>
                {astrologer.experience}
              </div>
            </div>
          </div>

          {/* Rating & Price row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 8,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#FF6B00",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                padding: "2px 8px 2px 6px",
                borderRadius: "10px 4px 4px 10px",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {astrologer.rating} ★
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

          {/* Chat & Call buttons - side by side */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 10,
            }}
          >
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: "7px 0",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                border: astrologer.available ? "none" : "1.5px solid #ccc",
                background: astrologer.available ? "#FF6B00" : "transparent",
                color: astrologer.available ? "#fff" : "#888",
              }}
            >
              💬 Chat
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: "7px 0",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                border: "1.5px solid #ccc",
                background: "transparent",
                color: "#888",
              }}
            >
              📞 Call
            </button>
          </div>
        </div>
      </div>

      {/* Why matched */}
      {showWhyMatched && astrologer.why_matched && (
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
      )}

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
            onClick={(e) => e.stopPropagation()}
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
