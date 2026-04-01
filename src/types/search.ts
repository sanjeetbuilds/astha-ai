export interface Astrologer {
  name: string;
  skills: string;
  languages: string;
  experience: string;
  why_matched: string;
  rating: string;
  price_original: string;
  price_offer: string;
  minutes_consulted: string;
  available: boolean;
}

export interface Remedy {
  name: string;
  why_matched: string;
  price_original: string;
  price_offer: string;
  discount: string;
  tag: string;
}

export interface SearchResult {
  understood_as: string;
  category: string;
  astrologers: Astrologer[];
  remedies: Remedy[];
}
