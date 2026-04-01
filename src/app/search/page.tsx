"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchResult } from "@/types/search";
import SearchBar from "@/components/SearchBar";
import PopularSearches from "@/components/PopularSearches";
import IntentBanner from "@/components/IntentBanner";
import AstroCard from "@/components/AstroCard";
import RemedyCard from "@/components/RemedyCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import BottomNav from "@/components/BottomNav";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"Astrologer" | "Remedies">("Astrologer");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [didAutoSearch, setDidAutoSearch] = useState(false);

  const handleSearch = useCallback(async (searchQuery?: string) => {
    const q = searchQuery || query;
    if (!q.trim()) return;
    setQuery(q);
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q.trim() }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
        setActiveTab("Astrologer");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [query]);

  // Auto-search from URL param
  useEffect(() => {
    const q = searchParams.get("q");
    if (q && !didAutoSearch) {
      setQuery(q);
      setDidAutoSearch(true);
      handleSearch(q);
    }
  }, [searchParams, didAutoSearch, handleSearch]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: "#F5F5F5",
        overflowX: "hidden",
        position: "relative",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Sticky header */}
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
          gap: 12,
        }}
      >
        <button
          onClick={() => router.back()}
          style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0, color: "#333" }}
        >
          ←
        </button>
        <div style={{ fontWeight: 800, fontSize: 18, color: "#FF6B00" }}>
          🔮 AI Smart Search
        </div>
      </div>

      {/* Search bar area */}
      <div style={{ padding: "12px 16px", background: "#fff", borderBottom: "1px solid #ebebeb" }}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={() => handleSearch()}
          onClear={() => { setQuery(""); setResult(null); setError(null); }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "14px 14px 80px" }}>
        {error && (
          <div style={{ background: "#FFF3E0", border: "1px solid #FFCC80", borderRadius: 10, padding: 12, marginBottom: 12, fontSize: 13, color: "#E65100" }}>
            ⚠️ {error}
          </div>
        )}

        {!loading && !result && !error && (
          <>
            <div style={{ background: "linear-gradient(135deg, #FFF8F2, #FFF3E0)", border: "1px solid #FFCC80", borderRadius: 12, padding: 14, marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#FF6B00", marginBottom: 4 }}>
                ✨ AsthaAI — Apni problem likhein, hum sahi raasta dikhayenge
              </div>
              <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>
                Hindi, English ya Hinglish mein likhein. AI samajh kar best astrologer aur remedies suggest karega.
              </div>
            </div>
            <PopularSearches onSelect={(q) => handleSearch(q)} />
          </>
        )}

        {loading && <LoadingSkeleton />}

        {result && !loading && (
          <>
            <IntentBanner understood_as={result.understood_as} category={result.category} />

            <div style={{ display: "flex", marginBottom: 0 }}>
              {(["Astrologer", "Remedies"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1, padding: "10px 0", fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer",
                    borderRadius: "20px 20px 0 0",
                    background: activeTab === tab ? "#FF6B00" : "#fff",
                    color: activeTab === tab ? "#fff" : "#888",
                    borderBottom: activeTab === tab ? "none" : "1px solid #ebebeb",
                  }}
                >
                  {tab === "Astrologer" ? `Astrologer (${result.astrologers.length})` : `Remedies (${result.remedies.length})`}
                </button>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: "0 0 12px 12px", padding: "12px 10px", border: "1px solid #ebebeb", borderTop: "none" }}>
              {activeTab === "Astrologer" && result.astrologers.map((a, i) => (
                <AstroCard key={i} astrologer={a} isTopMatch={i === 0} />
              ))}
              {activeTab === "Remedies" && result.remedies.map((r, i) => (
                <RemedyCard key={i} remedy={r} />
              ))}
            </div>
          </>
        )}
      </div>

      <BottomNav active="Home" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
