export interface AstrologerData {
  id: number;
  name: string;
  photo: string;
  skills: string;
  languages: string;
  experience: string;
  rating: string;
  price_offer: string;
  price_original: string;
  minutes_consulted: string;
  available: boolean;
  speciality: string;
  why_matched: string;
  cases: string;
  bio: string;
  reviews: { name: string; problem: string; text: string; rating: string }[];
}

export interface ProductData {
  id: number;
  name: string;
  category: string;
  problem: string;
  outcome: string;
  price_original: string;
  price_offer: string;
  discount: string;
  tag: string;
  photo: string;
  problems_detailed: string[];
  timeline: { week: string; benefit: string }[];
  reviews: { name: string; problem: string; text: string; rating: string }[];
}

export const ASTROLOGERS: AstrologerData[] = [
  {
    id: 1,
    name: "Astro Priya Sharma",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: "Vedic, Love Astrology, Tarot",
    languages: "Hindi, English",
    experience: "8 Years",
    rating: "4.97",
    price_offer: "₹5/min",
    price_original: "₹22/min",
    minutes_consulted: "28K mins",
    available: true,
    speciality: "Love & Relationship",
    why_matched:
      "Breakup aur dil ke dard mein 2000+ log ki madad ki",
    cases: "Helped 2,100+ heartbreak cases",
    bio: "Astro Priya ko Vedic astrology aur Tarot mein 8 saal ka experience hai. Unka focus love aur relationship problems par hai — breakup, patch-up, aur shaadi mein delay jaise cases mein unhone hazaaron logon ki madad ki hai. Priya ka approach empathetic hai aur woh client ke emotional state ko samajh kar guidance deti hain.",
    reviews: [
      {
        name: "Ramesh K.",
        problem: "Breakup",
        text: "Meri 4 saal ki relationship toot gayi thi. Priya ji ne baat ki toh lagaa ki koi apna samajh raha hai. Unke remedies se 2 mahine mein sab theek hua.",
        rating: "5.0",
      },
      {
        name: "Sneha M.",
        problem: "Shaadi Delay",
        text: "Shaadi ke liye rishte nahi aa rahe the. Priya ji ne kundli dekh ke sahi time aur remedy batayi. 3 mahine mein rishta pakka ho gaya!",
        rating: "4.9",
      },
      {
        name: "Amit G.",
        problem: "Ex Wapas",
        text: "Ex se baat band ho gayi thi. Priya ji ki guidance se phir se contact hua aur ab hum saath hain. Bahut shukriya!",
        rating: "5.0",
      },
    ],
  },
  {
    id: 2,
    name: "Pandit Rajeev Shastri",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: "Vedic, Lal Kitab, Kundli",
    languages: "Hindi, Bengali",
    experience: "15 Years",
    rating: "4.95",
    price_offer: "₹5/min",
    price_original: "₹35/min",
    minutes_consulted: "52K mins",
    available: false,
    speciality: "Career & Job",
    why_matched:
      "Sarkari naukri aur career mein 3000+ log guide kiye",
    cases: "3,200+ career consultations",
    bio: "Pandit Rajeev Shastri 15 saal se Vedic astrology aur Lal Kitab mein expert hain. Career guidance, job change, aur sarkari naukri ke liye unki predictions kaafi accurate hain. Unhone 3200+ logon ko career decisions mein madad ki hai aur unka success rate bahut high hai.",
    reviews: [
      {
        name: "Pradeep S.",
        problem: "Sarkari Naukri",
        text: "3 saal se SSC clear nahi ho raha tha. Rajeev ji ne muhurat aur remedy batayi, next attempt mein select ho gaya!",
        rating: "5.0",
      },
      {
        name: "Kavita R.",
        problem: "Job Change",
        text: "Job mein bahut stress tha. Rajeev ji ki advice se naya job mila jo perfect hai. Salary bhi double ho gayi.",
        rating: "4.9",
      },
      {
        name: "Sunil D.",
        problem: "Promotion",
        text: "5 saal se promotion ruka tha. Pandit ji ke upay kiye toh 2 mahine mein promotion aa gaya. Sach mein kamaal hai!",
        rating: "5.0",
      },
    ],
  },
  {
    id: 3,
    name: "Tarot Sana Kapoor",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: "Tarot, Psychic, Numerology",
    languages: "Hindi, English, Punjabi",
    experience: "6 Years",
    rating: "4.92",
    price_offer: "₹5/min",
    price_original: "₹18/min",
    minutes_consulted: "19K mins",
    available: true,
    speciality: "Love & Relationship",
    why_matched:
      "Tarot se future aur relationship clarity deti hain",
    cases: "1,800+ love readings",
    bio: "Sana Kapoor ek gifted Tarot reader hain jinhe psychic abilities ke saath 6 saal ka experience hai. Love, relationships aur life decisions mein clarity dena unki speciality hai. Unka Tarot reading style deep aur accurate hai jo clients ko clear direction deta hai.",
    reviews: [
      {
        name: "Pooja L.",
        problem: "Relationship Confusion",
        text: "Samajh nahi aa raha tha ki relationship mein aage jaun ya nahi. Sana ji ne tarot se itna clear bataya ki faisla le paayi.",
        rating: "4.9",
      },
      {
        name: "Rahul V.",
        problem: "Love Life",
        text: "Kisi se pyaar tha par bol nahi paa raha tha. Sana ji ne timing batayi aur sab kuch perfectly hua!",
        rating: "5.0",
      },
      {
        name: "Meena T.",
        problem: "Marriage Prediction",
        text: "Shaadi kab hogi yeh janna tha. Sana ji ne time bataya aur bilkul sahi nikla. Amazing reader!",
        rating: "4.8",
      },
    ],
  },
  {
    id: 4,
    name: "Astro Vikram Joshi",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    skills: "KP, Vastu, Career Astrology",
    languages: "Hindi, Gujarati, English",
    experience: "12 Years",
    rating: "4.89",
    price_offer: "₹5/min",
    price_original: "₹28/min",
    minutes_consulted: "41K mins",
    available: true,
    speciality: "Money & Business",
    why_matched:
      "Business aur wealth mein proven track record",
    cases: "2,500+ business consultations",
    bio: "Vikram Joshi KP astrology aur Vastu mein 12 saal ka experience rakhte hain. Business decisions, investments, aur wealth growth mein unki guidance bahut effective hai. 2500+ business owners aur professionals ne unki consultation se faayda uthaya hai.",
    reviews: [
      {
        name: "Manish P.",
        problem: "Business Loss",
        text: "Business mein lagaatar loss ho raha tha. Vikram ji ne Vastu changes bataaye aur 3 mahine mein profit aane laga.",
        rating: "5.0",
      },
      {
        name: "Deepa N.",
        problem: "Investment",
        text: "Stock market mein paisa laga rahi thi par loss ho raha tha. Vikram ji ki timing advice se ab achha return aa raha hai.",
        rating: "4.9",
      },
      {
        name: "Ravi K.",
        problem: "New Business",
        text: "Naya business start karna tha. Vikram ji ne sahi muhurat aur direction batayi. Aaj business achha chal raha hai!",
        rating: "4.8",
      },
    ],
  },
  {
    id: 5,
    name: "Pandit Suresh Tripathi",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    skills: "Vedic, Palmistry, Nadi",
    languages: "Hindi, English",
    experience: "20 Years",
    rating: "4.98",
    price_offer: "₹5/min",
    price_original: "₹45/min",
    minutes_consulted: "67K mins",
    available: false,
    speciality: "Family",
    why_matched:
      "Family aur vivah ke mushkil mamlon mein expert",
    cases: "4,100+ family cases",
    bio: "Pandit Suresh Tripathi 20 saal ke anubhav ke saath sabse senior astrologers mein se ek hain. Family disputes, property matters, aur vivah ke complicated cases mein unki expertise unmatched hai. Nadi astrology ke through woh bahut precise predictions dete hain.",
    reviews: [
      {
        name: "Geeta B.",
        problem: "Family Dispute",
        text: "Ghar mein property ko lekar bahut ladaai thi. Suresh ji ke upay se 1 mahine mein sab settle ho gaya. Bahut shanti hai ab.",
        rating: "5.0",
      },
      {
        name: "Anand M.",
        problem: "Saas-Bahu",
        text: "Wife aur maa mein roz jhagda hota tha. Tripathi ji ki remedy kaam kar gayi, ab ghar mein pyaar hai.",
        rating: "4.9",
      },
      {
        name: "Sunita J.",
        problem: "Divorce Risk",
        text: "Divorce ke papers tak aa gaye the. Pandit ji ki guidance se patch up hua aur ab sab achha hai. Life saver hain!",
        rating: "5.0",
      },
    ],
  },
  {
    id: 6,
    name: "Astro Meera Devi",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    skills: "Vedic, Occult, Vastu",
    languages: "Hindi, Tamil, English",
    experience: "10 Years",
    rating: "4.91",
    price_offer: "₹5/min",
    price_original: "₹25/min",
    minutes_consulted: "33K mins",
    available: true,
    speciality: "Fear & Spirituality",
    why_matched:
      "Nazar, kala jadu aur negative energy door karne mein expert",
    cases: "1,600+ spiritual healings",
    bio: "Meera Devi Vedic astrology ke saath occult sciences mein bhi expert hain. Negative energy removal, nazar utarna, aur spiritual protection mein unka 10 saal ka experience hai. Tamil aur North Indian dono traditions ko jodkar woh unique solutions deti hain.",
    reviews: [
      {
        name: "Vikash S.",
        problem: "Negative Energy",
        text: "Ghar mein bahut negative feel hota tha. Meera ji ne Vastu aur spiritual remedy batayi, ab ghar mein positive energy hai.",
        rating: "5.0",
      },
      {
        name: "Priya D.",
        problem: "Nazar",
        text: "Bacche ko baar baar nazar lag jaati thi. Meera ji ka solution kaam kar gaya, ab baccha healthy hai.",
        rating: "4.9",
      },
      {
        name: "Kiran R.",
        problem: "Fear",
        text: "Raat ko bahut darr lagta tha, neend nahi aati thi. Meera ji ki healing se ab achhi neend aati hai.",
        rating: "4.8",
      },
    ],
  },
];

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    name: "Love's Embrace Rose Quartz",
    category: "Love & Relationship",
    problem: "Breakup, dil ka dard, naya pyaar",
    outcome: "7-14 din mein emotional healing shuru hogi",
    price_original: "₹1299/-",
    price_offer: "₹849/-",
    discount: "35% Off",
    tag: "Bestseller",
    photo:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300",
    problems_detailed: [
      "Breakup ke baad dil nahi lag raha",
      "Ex ke yaad bahut aate hain",
      "Naya pyaar attract karna chahte hain",
    ],
    timeline: [
      { week: "Week 1", benefit: "Emotional stress kam hona shuru hoga" },
      { week: "Week 2", benefit: "Dil halka mehsoos hoga, positive vibes aayengi" },
      {
        week: "Week 3-4",
        benefit: "Naye rishton ke liye open feel karenge",
      },
    ],
    reviews: [
      {
        name: "Anita P.",
        problem: "Breakup",
        text: "Breakup ke baad bahut roti thi. Yeh crystal rakh ke sone lagi toh 10 din mein bahut better feel hua.",
        rating: "5.0",
      },
      {
        name: "Rohit S.",
        problem: "Heartbreak",
        text: "Dil toota tha completely. Rose quartz ne sach mein healing di, ab mein happy hoon apni life mein.",
        rating: "4.9",
      },
      {
        name: "Kavya M.",
        problem: "New Love",
        text: "Pyaar ki talash thi. Crystal use karna shuru kiya aur 1 mahine mein kisi se mili jo perfect hai!",
        rating: "4.8",
      },
    ],
  },
  {
    id: 2,
    name: "Healing Heart Bracelet",
    category: "Love & Relationship",
    problem: "Ex ko bhoolna, rishte ki takleef",
    outcome: "Dil ko shanti milegi, naye rishton ke liye taiyaar honge",
    price_original: "₹1499/-",
    price_offer: "₹999/-",
    discount: "33% Off",
    tag: "New",
    photo:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300",
    problems_detailed: [
      "Ex ki memories se pareshan hain",
      "Rishte mein trust issues hain",
      "Emotional healing chahiye",
    ],
    timeline: [
      { week: "Week 1", benefit: "Negative thoughts kam hone lagenge" },
      { week: "Week 2", benefit: "Inner peace aur self-love badhegi" },
      {
        week: "Week 3-4",
        benefit: "Past se move on kar paayenge, naya perspective milega",
      },
    ],
    reviews: [
      {
        name: "Neha R.",
        problem: "Ex Memories",
        text: "Ex ko bhoolna mushkil tha. Bracelet pehan ke roz meditation ki toh 3 hafte mein bahut achha feel hua.",
        rating: "5.0",
      },
      {
        name: "Sahil K.",
        problem: "Trust Issues",
        text: "Purane rishte ki wajah se trust nahi kar paata tha. Ab slowly heal ho raha hoon, bracelet sach mein kaam karta hai.",
        rating: "4.8",
      },
      {
        name: "Divya T.",
        problem: "Heartbreak Recovery",
        text: "Heart broken tha 6 mahine se. Yeh bracelet pehan ke meditation karna shuru kiya, ab bahut achha feel hota hai.",
        rating: "4.9",
      },
    ],
  },
  {
    id: 3,
    name: "Citrine Career Bracelet",
    category: "Career & Job",
    problem: "Naukri nahi mil rahi, promotion rukha hua",
    outcome: "Naye career opportunities 21 din mein aane lagte hain",
    price_original: "₹1199/-",
    price_offer: "₹799/-",
    discount: "33% Off",
    tag: "Bestseller",
    photo:
      "https://images.unsplash.com/photo-1573408301185-9519f94815f7?w=300",
    problems_detailed: [
      "Job interviews mein baar baar reject ho rahe hain",
      "Promotion ke liye kaafi time se wait kar rahe hain",
      "Career mein koi direction nahi dikh raha",
    ],
    timeline: [
      { week: "Week 1", benefit: "Confidence aur clarity badhne lagegi" },
      { week: "Week 2", benefit: "Naye opportunities notice hone lagenge" },
      {
        week: "Week 3-4",
        benefit: "Interview calls ya promotion ka sign dikhega",
      },
    ],
    reviews: [
      {
        name: "Vijay N.",
        problem: "Job Search",
        text: "6 mahine se job nahi mil rahi thi. Citrine bracelet pehan ke 3 hafte mein 2 offers aaye!",
        rating: "5.0",
      },
      {
        name: "Poonam D.",
        problem: "Promotion",
        text: "3 saal se promotion ruka tha. Bracelet pehanke 1 mahine mein promotion ka letter aaya. Amazing!",
        rating: "4.9",
      },
      {
        name: "Arjun M.",
        problem: "Career Change",
        text: "Career switch karna tha par darr tha. Citrine ne confidence diya aur ab naye field mein achha kar raha hoon.",
        rating: "4.8",
      },
    ],
  },
  {
    id: 4,
    name: "Pyrite Wealth Stone",
    category: "Money & Business",
    problem: "Paise ki kami, business mein ghata",
    outcome: "Financial clarity aur naye opportunities attract karta hai",
    price_original: "₹2499/-",
    price_offer: "₹1649/-",
    discount: "34% Off",
    tag: "EMI Available",
    photo:
      "https://images.unsplash.com/photo-1567225557594-88887a55d400?w=300",
    problems_detailed: [
      "Business mein continuously loss ho raha hai",
      "Paise bachte nahi hain, kharche zyada hain",
      "Financial growth ruk gayi hai",
    ],
    timeline: [
      { week: "Week 1", benefit: "Financial awareness aur planning improve hogi" },
      {
        week: "Week 2",
        benefit: "Unexpected income ya savings ka raasta dikhega",
      },
      {
        week: "Week 3-4",
        benefit: "Business ya investment mein positive movement hogi",
      },
    ],
    reviews: [
      {
        name: "Rajesh B.",
        problem: "Business Loss",
        text: "Shop mein 6 mahine se loss tha. Pyrite rakh ke 1 mahine mein customers badhne lage. Sach mein kaam karta hai!",
        rating: "5.0",
      },
      {
        name: "Sunita G.",
        problem: "Money Problems",
        text: "Paisa haath mein aata nahi tha, sab kharche mein chala jaata. Ab savings ho rahi hai, pyrite ka kamaal hai.",
        rating: "4.9",
      },
      {
        name: "Mohit A.",
        problem: "Investment",
        text: "Investments mein hamesha loss hota tha. Pyrite ke baad decisions achhe hone lage, profit aa raha hai ab.",
        rating: "4.8",
      },
    ],
  },
  {
    id: 5,
    name: "Moonstone Calming Aura",
    category: "Health",
    problem: "Anxiety, neend nahi aana, mental stress",
    outcome: "14 din mein neend aur calm mein sudhar",
    price_original: "₹4749/-",
    price_offer: "₹3149/-",
    discount: "34% Off",
    tag: "EMI Available",
    photo:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300",
    problems_detailed: [
      "Raat ko neend nahi aati, overthinking hoti hai",
      "Anxiety attacks aate hain",
      "Mental stress se health kharab ho rahi hai",
    ],
    timeline: [
      { week: "Week 1", benefit: "Raat ko thodi better neend aane lagegi" },
      { week: "Week 2", benefit: "Anxiety episodes kam hone lagenge" },
      {
        week: "Week 3-4",
        benefit: "Overall calm aur peaceful feel hoga daily life mein",
      },
    ],
    reviews: [
      {
        name: "Rekha P.",
        problem: "Insomnia",
        text: "2 saal se neend ki goli khaati thi. Moonstone pillow ke neeche rakh ke 2 hafte mein natural neend aane lagi!",
        rating: "5.0",
      },
      {
        name: "Aakash J.",
        problem: "Anxiety",
        text: "Office stress se anxiety attacks aate the. Moonstone carry karna shuru kiya toh bahut better feel ho raha hai.",
        rating: "4.9",
      },
      {
        name: "Meena S.",
        problem: "Stress",
        text: "Itna stress tha ki BP high ho gaya tha. Moonstone aur meditation se ab bahut shanti hai.",
        rating: "4.8",
      },
    ],
  },
  {
    id: 6,
    name: "Rudraksha Protection Mala",
    category: "Fear & Spirituality",
    problem: "Nazar, negative energy, bhoot pret ka darr",
    outcome: "Negative energy se protection, ghar mein shanti",
    price_original: "₹1899/-",
    price_offer: "₹1249/-",
    discount: "34% Off",
    tag: "Bestseller",
    photo:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
    problems_detailed: [
      "Nazar bahut jaldi lag jaati hai",
      "Ghar mein negative energy feel hoti hai",
      "Raat ko darr lagta hai, bure sapne aate hain",
    ],
    timeline: [
      { week: "Week 1", benefit: "Negative vibes se protection feel hoga" },
      { week: "Week 2", benefit: "Darr aur anxiety kam hone lagegi" },
      {
        week: "Week 3-4",
        benefit: "Ghar mein positive energy aur shanti mehsoos hogi",
      },
    ],
    reviews: [
      {
        name: "Vikash T.",
        problem: "Negative Energy",
        text: "Ghar mein hamesha ladaai hoti thi, negative feel tha. Rudraksha mala ke baad mahaul bilkul badal gaya!",
        rating: "5.0",
      },
      {
        name: "Priti M.",
        problem: "Nazar",
        text: "Bacche ko baar baar nazar lag jaati thi. Mala pehanaayi toh ab safe hai, koi asar nahi hota.",
        rating: "4.9",
      },
      {
        name: "Dinesh K.",
        problem: "Fear",
        text: "Raat ko bahut darr lagta tha. Rudraksha pehan ke sone laga toh darr gayab ho gaya. Best remedy!",
        rating: "5.0",
      },
    ],
  },
  {
    id: 7,
    name: "Mangal Career Yantra",
    category: "Career & Job",
    problem: "Job nahi lag rahi, interview mein fail",
    outcome: "Career obstacles door hote hain 40 din mein",
    price_original: "₹999/-",
    price_offer: "₹649/-",
    discount: "35% Off",
    tag: "New",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    problems_detailed: [
      "Interview mein baar baar fail ho rahe hain",
      "Job lag ke bhi chhoot jaati hai",
      "Mangal dosh career rok raha hai",
    ],
    timeline: [
      { week: "Week 1-2", benefit: "Yantra energize hoga, subtle changes shuru" },
      {
        week: "Week 3-4",
        benefit: "Interview calls aur naye contacts badhenge",
      },
      {
        week: "Week 5-6",
        benefit: "Career mein clear breakthrough ya offer aayega",
      },
    ],
    reviews: [
      {
        name: "Sanjay R.",
        problem: "Job Rejection",
        text: "15 interviews diye the, sab mein reject. Yantra rakhne ke 40 din baad dream job mili!",
        rating: "5.0",
      },
      {
        name: "Anjali K.",
        problem: "Career Block",
        text: "Career mein kuch bhi achha nahi ho raha tha. Mangal yantra ke baad sab kuch badalne laga.",
        rating: "4.9",
      },
      {
        name: "Kunal B.",
        problem: "Interview Anxiety",
        text: "Interview mein nervous ho jaata tha. Yantra saath rakhta hoon toh confidence aata hai, 2 jobs mili!",
        rating: "4.8",
      },
    ],
  },
  {
    id: 8,
    name: "Family Harmony Puja Kit",
    category: "Family",
    problem: "Ghar mein kalesh, saas-bahu tension",
    outcome: "Ghar ka mahaul 21 din mein better hone lagta hai",
    price_original: "₹2199/-",
    price_offer: "₹1449/-",
    discount: "34% Off",
    tag: "Bestseller",
    photo:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=300",
    problems_detailed: [
      "Ghar mein roz ladaai hoti hai",
      "Saas-bahu ya family members mein tension hai",
      "Ghar ka mahaul bahut negative hai",
    ],
    timeline: [
      { week: "Week 1", benefit: "Puja se ghar ki energy cleanse hogi" },
      {
        week: "Week 2",
        benefit: "Family members ke beech communication improve hoga",
      },
      {
        week: "Week 3-4",
        benefit: "Ghar mein shanti aur pyaar ka mahaul banega",
      },
    ],
    reviews: [
      {
        name: "Meera J.",
        problem: "Family Fights",
        text: "Ghar mein roz kalesh tha. Puja kit use ki toh 2 hafte mein sab shaant ho gaya. Bahut achha product hai!",
        rating: "5.0",
      },
      {
        name: "Rakesh T.",
        problem: "Saas-Bahu",
        text: "Wife aur mummy mein roz ladaai. Yeh puja kit lagaayi toh dheere dheere dono mein pyaar badhne laga.",
        rating: "4.9",
      },
      {
        name: "Geeta S.",
        problem: "Property Dispute",
        text: "Bhaiyyon mein property ko lekar tension thi. Puja ke baad sab peacefully settle ho gaya.",
        rating: "4.8",
      },
    ],
  },
];

export const INTENT_CHIPS = [
  { emoji: "💔", label: "Breakup", filter: "Love & Relationship" },
  { emoji: "💼", label: "Naukri", filter: "Career & Job" },
  { emoji: "💰", label: "Paisa", filter: "Money & Business" },
  { emoji: "👨‍👩‍👧", label: "Family", filter: "Family" },
  { emoji: "👻", label: "Nazar", filter: "Fear & Spirituality" },
  { emoji: "💍", label: "Shaadi", filter: "Love & Relationship" },
];

export const REMEDY_CATEGORIES = [
  {
    slug: "love",
    label: "Love & Relationship",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400",
    chips: ["Sab", "Breakup", "Shaadi", "Ex Wapas", "Naya Pyaar"],
  },
  {
    slug: "career",
    label: "Career & Job",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    chips: ["Sab", "Naukri", "Promotion", "Interview", "Business"],
  },
  {
    slug: "protection",
    label: "Fear & Spirituality",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    chips: ["Sab", "Nazar", "Negative Energy", "Darr", "Protection"],
  },
  {
    slug: "health",
    label: "Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
    chips: ["Sab", "Anxiety", "Neend", "Stress", "Mental Health"],
  },
  {
    slug: "family",
    label: "Family",
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=400",
    chips: ["Sab", "Kalesh", "Saas-Bahu", "Property", "Shaadi"],
  },
  {
    slug: "wealth",
    label: "Money & Business",
    image: "https://images.unsplash.com/photo-1567225557594-88887a55d400?w=400",
    chips: ["Sab", "Loss", "Debt", "Investment", "Growth"],
  },
];
