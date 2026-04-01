"use client";

import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, ASTROLOGERS } from "@/data/mockData";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#aaa" }}>
        Product not found
      </div>
    );
  }

  // Pick a recommending astrologer based on matching speciality
  const recommender =
    ASTROLOGERS.find((a) => a.speciality === product.category) || ASTROLOGERS[0];

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: "#F5F5F5",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#fff",
          borderBottom: "1px solid #ebebeb",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => router.back()}
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              padding: 0,
              color: "#333",
            }}
          >
            ←
          </button>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>
            Product Details
          </span>
        </div>
        <button
          style={{
            background: "#E8F5E9",
            border: "none",
            borderRadius: 8,
            padding: "6px 12px",
            fontSize: 12,
            fontWeight: 600,
            color: "#2E7D32",
            cursor: "pointer",
          }}
        >
          📤 Share
        </button>
      </div>

      <div style={{ padding: "0 0 80px" }}>
        {/* Product image */}
        <img
          src={product.photo}
          alt={product.name}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
          }}
        />

        {/* Name & price */}
        <div
          style={{
            background: "#fff",
            padding: "16px",
            borderBottom: "1px solid #ebebeb",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#222",
              marginBottom: 10,
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                textDecoration: "line-through",
                color: "#aaa",
                fontSize: 14,
              }}
            >
              {product.price_original}
            </span>
            <span style={{ fontWeight: 800, fontSize: 20, color: "#FF6B00" }}>
              {product.price_offer}
            </span>
            <span
              style={{
                color: "#d32f2f",
                fontWeight: 700,
                fontSize: 13,
                background: "#FFEBEE",
                padding: "2px 8px",
                borderRadius: 6,
              }}
            >
              {product.discount}
            </span>
          </div>
        </div>

        {/* Differentiator 1: Yeh aapke liye hai agar */}
        <div style={{ padding: "12px 14px" }}>
          <div
            style={{
              background: "#FFF8F2",
              borderLeft: "4px solid #FF6B00",
              borderRadius: "0 10px 10px 0",
              padding: 14,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "#FF6B00",
                marginBottom: 10,
              }}
            >
              🎯 Yeh aapke liye hai agar...
            </div>
            {product.problems_detailed.map((p, i) => (
              <div
                key={i}
                style={{
                  fontSize: 13,
                  color: "#C45A00",
                  lineHeight: 1.6,
                  paddingLeft: 4,
                }}
              >
                • {p}
              </div>
            ))}
          </div>
        </div>

        {/* Differentiator 2: Kya expect karein */}
        <div style={{ padding: "0 14px 12px" }}>
          <div
            style={{
              background: "#F1F8E9",
              borderLeft: "4px solid #4CAF50",
              borderRadius: "0 10px 10px 0",
              padding: 14,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "#2E7D32",
                marginBottom: 10,
              }}
            >
              📈 Kya expect karein?
            </div>
            {product.timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 8,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    background: "#C8E6C9",
                    color: "#2E7D32",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 6,
                    whiteSpace: "nowrap",
                    minWidth: 55,
                    textAlign: "center",
                  }}
                >
                  {t.week}
                </span>
                <span style={{ fontSize: 13, color: "#555", lineHeight: 1.4 }}>
                  {t.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* About product */}
        <div
          style={{
            background: "#fff",
            padding: "14px 16px",
            borderTop: "1px solid #ebebeb",
            borderBottom: "1px solid #ebebeb",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#333",
              marginBottom: 8,
            }}
          >
            About {product.name}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#666",
              lineHeight: 1.6,
            }}
          >
            Yeh product specially {product.category.toLowerCase()} se related
            problems ke liye designed hai. {product.outcome}. Hazaaron logon ne
            iska fayda uthaya hai aur positive results dekhe hain.
          </div>
        </div>

        {/* Differentiator 3: Reviews */}
        <div
          style={{
            background: "#fff",
            padding: "14px 16px",
            borderBottom: "1px solid #ebebeb",
            marginTop: 1,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#333",
              marginBottom: 12,
            }}
          >
            🗣️ Jinke kaam aaya
          </div>
          {product.reviews.map((review, i) => (
            <div
              key={i}
              style={{
                background: "#FAFAFA",
                border: "1px solid #f0f0f0",
                borderRadius: 10,
                padding: 12,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#FFE0B2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#FF6B00",
                  }}
                >
                  {review.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontWeight: 600, fontSize: 13, color: "#333" }}
                  >
                    {review.name}
                  </div>
                </div>
                <span
                  style={{
                    background: "#FFF3E0",
                    color: "#FF6B00",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 10,
                  }}
                >
                  {review.problem}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#555",
                  lineHeight: 1.5,
                  marginBottom: 6,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </div>
              <div
                style={{ fontSize: 11, color: "#FF6B00", fontWeight: 600 }}
              >
                ⭐ {review.rating}
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator 4: Astrologer recommends */}
        <div
          style={{
            background: "#fff",
            padding: "14px 16px",
            borderBottom: "1px solid #ebebeb",
            marginTop: 1,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#333",
              marginBottom: 12,
            }}
          >
            👨‍🔬 Astrologer bhi recommend karte hain
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#FFF8F2",
              border: "1px solid #FFE4C8",
              borderRadius: 12,
              padding: 12,
            }}
          >
            <img
              src={recommender.photo}
              alt={recommender.name}
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "2px solid #FF6B00",
                objectFit: "cover",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#333",
                  marginBottom: 2,
                }}
              >
                {recommender.name}
              </div>
              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.4 }}>
                &ldquo;Yeh product {product.category.toLowerCase()} ke liye
                recommend kart{recommender.name.includes("Devi") || recommender.name.includes("Priya") || recommender.name.includes("Sana") || recommender.name.includes("Meera") ? "i" : "a"}{" "}
                hoon&rdquo;
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push(`/astrologer/${recommender.id}`)}
            style={{
              width: "100%",
              background: "transparent",
              border: "1.5px solid #FF6B00",
              color: "#FF6B00",
              borderRadius: 10,
              padding: "10px 0",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              marginTop: 10,
            }}
          >
            Astrologer se poochein →
          </button>
        </div>

        {/* Trust row */}
        <div
          style={{
            background: "#fff",
            padding: "16px",
            marginTop: 1,
            display: "flex",
            justifyContent: "space-around",
            borderBottom: "1px solid #ebebeb",
          }}
        >
          {[
            { icon: "😊", label: "Happy\nCustomers" },
            { icon: "✅", label: "Assured\nSatisfaction" },
            { icon: "🎓", label: "Performed by\nExperts" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <span
                style={{
                  fontSize: 10,
                  color: "#888",
                  textAlign: "center",
                  lineHeight: 1.3,
                  whiteSpace: "pre-line",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed bottom bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 420,
          display: "flex",
          zIndex: 50,
        }}
      >
        <div
          style={{
            flex: "0 0 40%",
            background: "#FF6B00",
            color: "#fff",
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 11, opacity: 0.8 }}>Price</div>
          <div style={{ fontWeight: 800, fontSize: 18 }}>
            {product.price_offer}
          </div>
        </div>
        <button
          style={{
            flex: 1,
            background: "#E65100",
            color: "#fff",
            border: "none",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            padding: "14px 0",
          }}
        >
          CONTINUE →
        </button>
      </div>
    </div>
  );
}
