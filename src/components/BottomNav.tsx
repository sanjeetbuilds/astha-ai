"use client";

import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "📡", label: "Live", path: "/" },
  { icon: "🙏", label: "Remedies", path: "/remedies" },
  { icon: "💡", label: "FREE", path: "/" },
  { icon: "💰", label: "Refer & Earn", path: "/" },
];

interface BottomNavProps {
  active: string;
}

export default function BottomNav({ active }: BottomNavProps) {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 420,
        background: "#fff",
        borderTop: "1px solid #ebebeb",
        display: "flex",
        justifyContent: "space-around",
        padding: "8px 0 12px",
        zIndex: 50,
      }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.label}
          onClick={() => router.push(item.path)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 18,
            padding: 0,
          }}
        >
          <span>{item.icon}</span>
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              color: active === item.label ? "#FF6B00" : "#999",
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
