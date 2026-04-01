"use client";

function ShimmerBlock({
  width,
  height,
  radius = 6,
}: {
  width: string | number;
  height: number;
  radius?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background:
          "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

function SkeletonCard() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ebebeb",
        borderRadius: 12,
        padding: 14,
        marginBottom: 10,
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div
          style={{
            width: 62,
            height: 62,
            borderRadius: "50%",
            background:
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            minWidth: 62,
          }}
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <ShimmerBlock width="60%" height={14} />
          <ShimmerBlock width="80%" height={10} />
          <ShimmerBlock width="40%" height={10} />
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <ShimmerBlock width="100%" height={36} radius={8} />
      </div>
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div>
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
