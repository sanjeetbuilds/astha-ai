import { NextResponse } from "next/server";
import { SearchResult } from "@/types/search";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const LOVE_RESULTS: SearchResult = {
  understood_as: "Pyaar mein takleef, dil toota hai",
  category: "Love & Relationship",
  astrologers: [
    {
      name: "Astro Priya",
      skills: "Love Astrology, Tarot, Vedic",
      languages: "Hindi, English",
      experience: "12 Years",
      why_matched: "Breakup ke baad pyaar wapas laane mein expert hain",
      rating: "4.9",
      price_original: "₹30/min",
      price_offer: "₹5/min",
      minutes_consulted: "18K mins",
      available: true,
    },
    {
      name: "Pandit Rajeev Sharma",
      skills: "Vedic Astrology, Kundli Match, Vashikaran",
      languages: "Hindi, English, Punjabi",
      experience: "18 Years",
      why_matched: "Love problems ka permanent solution dete hain",
      rating: "4.8",
      price_original: "₹35/min",
      price_offer: "₹7/min",
      minutes_consulted: "24K mins",
      available: true,
    },
    {
      name: "Tarot Neha",
      skills: "Tarot Reading, Angel Therapy, Love Healing",
      languages: "Hindi, English",
      experience: "8 Years",
      why_matched: "Dil ki baat cards se samajhti hain, ex ko wapas laayein",
      rating: "4.7",
      price_original: "₹25/min",
      price_offer: "₹5/min",
      minutes_consulted: "9K mins",
      available: false,
    },
  ],
  remedies: [
    {
      name: "Rose Quartz Love Crystal Bracelet",
      why_matched: "Pyaar ki energy wapas laata hai, dil heal karta hai",
      price_original: "₹1499/-",
      price_offer: "₹849/-",
      discount: "43% Off",
      tag: "Bestseller",
    },
    {
      name: "Kamdev Yantra - Gold Plated",
      why_matched: "Partner ke mann mein phir se pyaar jagaata hai",
      price_original: "₹2199/-",
      price_offer: "₹1299/-",
      discount: "41% Off",
      tag: "New",
    },
    {
      name: "Love Rekindling Puja (Online)",
      why_matched: "Broken relationship fix karne ke liye powerful puja",
      price_original: "₹3100/-",
      price_offer: "₹1999/-",
      discount: "35% Off",
      tag: "EMI Available",
    },
  ],
};

const CAREER_RESULTS: SearchResult = {
  understood_as: "Naukri nahi mil rahi, career mein tension",
  category: "Career & Job",
  astrologers: [
    {
      name: "Astro Vikram",
      skills: "Career Astrology, Vedic, Numerology",
      languages: "Hindi, English",
      experience: "15 Years",
      why_matched: "Sarkari naukri aur career guidance mein specialist hain",
      rating: "4.9",
      price_original: "₹40/min",
      price_offer: "₹8/min",
      minutes_consulted: "22K mins",
      available: true,
    },
    {
      name: "Jyotish Acharya Deepak",
      skills: "Vedic Astrology, Kundli, Career Mapping",
      languages: "Hindi, English, Marathi",
      experience: "22 Years",
      why_matched: "Job interview success ke liye sahi muhurat batate hain",
      rating: "4.8",
      price_original: "₹45/min",
      price_offer: "₹10/min",
      minutes_consulted: "31K mins",
      available: true,
    },
    {
      name: "Astro Meera Joshi",
      skills: "Tarot, Career Counseling, Palmistry",
      languages: "Hindi, English",
      experience: "10 Years",
      why_matched: "Career switch ya promotion mein clarity deti hain",
      rating: "4.7",
      price_original: "₹28/min",
      price_offer: "₹5/min",
      minutes_consulted: "14K mins",
      available: false,
    },
  ],
  remedies: [
    {
      name: "Shani Dev Kavach Yantra",
      why_matched: "Naukri mein ruk-ruk ke aa rahi problem door karta hai",
      price_original: "₹1599/-",
      price_offer: "₹999/-",
      discount: "37% Off",
      tag: "Bestseller",
    },
    {
      name: "Green Aventurine Career Bracelet",
      why_matched: "Interview aur job success ki energy deta hai",
      price_original: "₹1299/-",
      price_offer: "₹749/-",
      discount: "42% Off",
      tag: "New",
    },
    {
      name: "Budh Graha Shanti Puja (Online)",
      why_matched: "Mercury strong kare toh career mein growth milti hai",
      price_original: "₹2500/-",
      price_offer: "₹1599/-",
      discount: "36% Off",
      tag: "EMI Available",
    },
  ],
};

const WEALTH_RESULTS: SearchResult = {
  understood_as: "Paison ki bahut zyada tension hai",
  category: "Money & Business",
  astrologers: [
    {
      name: "Pandit Suresh Tripathi",
      skills: "Wealth Astrology, Vedic, Vastu",
      languages: "Hindi, English",
      experience: "20 Years",
      why_matched: "Paisa aane ke raaste khol dete hain, dhan yoga expert",
      rating: "4.9",
      price_original: "₹50/min",
      price_offer: "₹10/min",
      minutes_consulted: "28K mins",
      available: true,
    },
    {
      name: "Astro Lakshmi Devi",
      skills: "Laxmi Puja, Vedic Astrology, Numerology",
      languages: "Hindi, English, Telugu",
      experience: "14 Years",
      why_matched: "Financial problem ka permanent astrological solution",
      rating: "4.8",
      price_original: "₹35/min",
      price_offer: "₹7/min",
      minutes_consulted: "19K mins",
      available: true,
    },
    {
      name: "Tarot Arjun",
      skills: "Tarot, Money Reading, Business Astrology",
      languages: "Hindi, English",
      experience: "9 Years",
      why_matched: "Business mein loss ho ya debt, clarity dete hain",
      rating: "4.6",
      price_original: "₹25/min",
      price_offer: "₹5/min",
      minutes_consulted: "11K mins",
      available: false,
    },
  ],
  remedies: [
    {
      name: "Kuber Yantra - Energized",
      why_matched: "Ghar mein rakhein toh paisa aane lagta hai",
      price_original: "₹2499/-",
      price_offer: "₹1499/-",
      discount: "40% Off",
      tag: "Bestseller",
    },
    {
      name: "Citrine Wealth Crystal Bracelet",
      why_matched: "Financial luck boost karta hai, debt se chhutkaara",
      price_original: "₹1399/-",
      price_offer: "₹799/-",
      discount: "43% Off",
      tag: "New",
    },
    {
      name: "Lakshmi Puja + Havan (Online)",
      why_matched: "Maa Lakshmi ki kripa se paison ki problem khatam",
      price_original: "₹3500/-",
      price_offer: "₹2199/-",
      discount: "37% Off",
      tag: "EMI Available",
    },
  ],
};

const FEAR_RESULTS: SearchResult = {
  understood_as: "Darr aur negative energy ki problem hai",
  category: "Fear & Spirituality",
  astrologers: [
    {
      name: "Acharya Raman Mishra",
      skills: "Tantra Nivaran, Vedic, Spiritual Healing",
      languages: "Hindi, English, Sanskrit",
      experience: "25 Years",
      why_matched: "Bhoot pret aur negative energy hataane mein mahir hain",
      rating: "4.9",
      price_original: "₹55/min",
      price_offer: "₹12/min",
      minutes_consulted: "35K mins",
      available: true,
    },
    {
      name: "Astro Kavita",
      skills: "Reiki, Spiritual Cleansing, Tarot",
      languages: "Hindi, English",
      experience: "11 Years",
      why_matched: "Darr aur anxiety ka spiritual solution deti hain",
      rating: "4.8",
      price_original: "₹30/min",
      price_offer: "₹6/min",
      minutes_consulted: "16K mins",
      available: true,
    },
    {
      name: "Pandit Hari Om",
      skills: "Hanuman Puja, Kaal Sarp Dosh, Protection",
      languages: "Hindi, English, Bhojpuri",
      experience: "19 Years",
      why_matched: "Buri nazar aur negative shakti se protection karte hain",
      rating: "4.7",
      price_original: "₹40/min",
      price_offer: "₹8/min",
      minutes_consulted: "21K mins",
      available: false,
    },
  ],
  remedies: [
    {
      name: "Hanuman Kavach Locket - Silver",
      why_matched: "Buri shakti se bachata hai, darr bilkul khatam",
      price_original: "₹1999/-",
      price_offer: "₹1199/-",
      discount: "40% Off",
      tag: "Bestseller",
    },
    {
      name: "Black Tourmaline Protection Bracelet",
      why_matched: "Negative energy absorb karta hai, ghar mein shanti",
      price_original: "₹1299/-",
      price_offer: "₹699/-",
      discount: "46% Off",
      tag: "New",
    },
    {
      name: "Kaal Sarp Dosh Nivaran Puja (Online)",
      why_matched: "Darr aur bure sapne permanently door karta hai",
      price_original: "₹4100/-",
      price_offer: "₹2499/-",
      discount: "39% Off",
      tag: "EMI Available",
    },
  ],
};

const GENERIC_RESULTS: SearchResult = {
  understood_as: "Life mein kuch problem chal rahi hai",
  category: "Family",
  astrologers: [
    {
      name: "Astro Sunita",
      skills: "Vedic Astrology, Kundli, Prashna",
      languages: "Hindi, English",
      experience: "16 Years",
      why_matched: "Har tarah ki life problem ka sahi guidance deti hain",
      rating: "4.9",
      price_original: "₹35/min",
      price_offer: "₹7/min",
      minutes_consulted: "20K mins",
      available: true,
    },
    {
      name: "Pandit Mohan Shastri",
      skills: "Vedic, Vastu, Palmistry",
      languages: "Hindi, English, Gujarati",
      experience: "21 Years",
      why_matched: "Family tension aur ghar ke issues solve karte hain",
      rating: "4.8",
      price_original: "₹45/min",
      price_offer: "₹9/min",
      minutes_consulted: "27K mins",
      available: true,
    },
    {
      name: "Tarot Ananya",
      skills: "Tarot, Angel Cards, Life Coaching",
      languages: "Hindi, English",
      experience: "7 Years",
      why_matched: "Confusion door karke clear direction deti hain",
      rating: "4.6",
      price_original: "₹22/min",
      price_offer: "₹5/min",
      minutes_consulted: "8K mins",
      available: false,
    },
  ],
  remedies: [
    {
      name: "Navgraha Shanti Yantra",
      why_matched: "Saare graha shaant toh life mein sab theek",
      price_original: "₹1799/-",
      price_offer: "₹1099/-",
      discount: "39% Off",
      tag: "Bestseller",
    },
    {
      name: "7 Chakra Crystal Bracelet",
      why_matched: "Body aur mind dono balance karta hai, tension kam",
      price_original: "₹999/-",
      price_offer: "₹599/-",
      discount: "40% Off",
      tag: "New",
    },
    {
      name: "Sampurna Graha Shanti Puja (Online)",
      why_matched: "Ek puja se saari problems ka solution milta hai",
      price_original: "₹5100/-",
      price_offer: "₹2999/-",
      discount: "41% Off",
      tag: "EMI Available",
    },
  ],
};

function getMockResults(query: string): SearchResult {
  const q = query.toLowerCase();

  if (q.includes("breakup") || q.includes("ex") || q.includes("pyaar") || q.includes("love") || q.includes("shaadi") || q.includes("girlfriend") || q.includes("boyfriend")) {
    return LOVE_RESULTS;
  }
  if (q.includes("naukri") || q.includes("job") || q.includes("career") || q.includes("sarkari") || q.includes("promotion") || q.includes("interview")) {
    return CAREER_RESULTS;
  }
  if (q.includes("paise") || q.includes("money") || q.includes("paisa") || q.includes("loan") || q.includes("debt") || q.includes("business") || q.includes("dhan")) {
    return WEALTH_RESULTS;
  }
  if (q.includes("bhoot") || q.includes("pret") || q.includes("darr") || q.includes("ghost") || q.includes("fear") || q.includes("nazar") || q.includes("negative")) {
    return FEAR_RESULTS;
  }

  return GENERIC_RESULTS;
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    // Simulate API delay
    await delay(1500);

    const results = getMockResults(query.trim());

    return NextResponse.json(results);
  } catch (error: unknown) {
    console.error("Search API error:", error);
    const errMsg =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
