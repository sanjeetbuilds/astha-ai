# 🔮 AsthaAI - Intent Engine for Astrology Platforms

> *Users speak pain. The product spoke catalogue. This fixes that.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-astha--ai--mu.vercel.app-FF6B00?style=for-the-badge)](https://astha-ai-mu.vercel.app)

---

## Why This Exists

I opened two astrology apps as a real user - not to audit it, but with an actual problem in mind.

```
Search: "Breakup ho gaya"        →   No results. Try again.
Search: "Sarkari naukri chahiye" →   No results. Try again.
Search: "Paise ki tangi hai"     →   No results. Try again.
```

The supply was good as the Astrologers existed & a wide catalogue of products existed.  
**The gap was in the translation - between what the user was feeling and what the system understood.**

---

## The Users

> There are many user cohorts on a platform like this. These are a few that stayed with me.

| Who | What's actually happening |
|-----|--------------------------|
| **The 2am person** | Sad Urdu ghazals on Instagram Reels. 3 din se koi reply nahi. Doesn't know what to search - only knows what they feel. |
| **5th exam attempt** | UPSC, SSC, state exams - interview tak bhi pahucncha but all failed. Family ne sab kuch daanv par lagaya. Looking for any signal that things will turn. |
| **Shaadi delayed 3 years** | Parents asking daily. Extended family watching. The pressure has a specific weight. |
| **Business in loss** | Was doing okay but then things fell apart. Looking for timing, clarity, some explanation. |
| **Married couple with kalesh** | Not a breakup. Not dramatic. Just the slow weight of a home that isn't peaceful. |
| **First-timer with nazar fear** | Grew up hearing about it. Something feels off. Skeptical but desperate enough to try. |

> These people don't search like ecommerce users and nor how the system assumes. They know what they're **feeling** - not what to search for. 

---

## What Was Broken

| What I did | Expected | What happened |
|-----------|----------|---------------|
| Typed `"breakup ho gaya"` | Relevant astrologers | ❌ Blank screen - *"No astrologer found. Try again."* |
| Opened astrologer listing | Some signal on who to pick | ❌ Every card identical - `"Vedic, AI Astrologer"` on all of them |
| Looked at each card | Why this person for my problem | ❌ Name, price, rating - no match reasoning anywhere |
| Opened a product | What problem it solves | ❌ Product name and price. Zero problem context. |
| Read product description | What outcome to expect | ❌ *"healing energy"* - poetic, vague, unconvincing |
| Finished a session | Some next step | ❌ Back to generic home. Loop completely broken. |

### Where the funnel leaks

```
User arrives with a real problem
         │
         ▼
    Types in search
         │
         ▼
    ❌ Blank screen
         │
         ├── leaves          → consultation revenue lost
         │
    OR scrolls to listing
         │
         ▼
    40 identical cards
         │
         ├── can't decide    → consultation revenue lost
         │
    OR opens a product
         │
         ▼
    Price + poetic copy
         │
         └── doesn't trust   → store revenue lost
```

---

## What AsthaAI Does

### The core shift

> The product meets users at their **emotional state** - not their search query.

---

### Search that understands human language

Type anything - Hindi, Hinglish, English, however it comes out.  
The AI reads the intent behind the words, not just the words.

```
"Meri ex wapas nahi aa rahi"   →   Love & Relationship
"5 saal se naukri nahi"        →   Career & Job
"Bhoot pret ka darr hai"       →   Fear & Spirituality  (not Health)
"Ghar mein kalesh hai"         →   Family
```

A blank screen is impossible. Every input gets a response.

---

### "AI ne samjha" - the trust signal

Before showing results, the app reflects the user's intent back to them.

> *"Pyaar mein takleef, dil toota hai"*

This is not a UX decoration. It's the moment a distressed user feels **heard** - before they've been asked to pay anything. That moment is what earns the click.

---

### Two tabs - Astrologers and Remedies together

Search returns both in one view. The user doesn't need to know which category to look in. The AI decides.

```
┌──────────────────────────────────────────┐
│  🎯 AI ne samjha:                        │
│     "Pyaar mein takleef, dil toota"      │
│                           [Love & Rel]   │
└──────────────────────────────────────────┘

   [ Astrologers (3) ]     [ Remedies (3) ]
```

---

### Why-matched line on every card

**Before**
```
Astro Priya Sharma
Vedic, AI Astrologer  ·  Hindi  ·  8 Years
⭐ 4.9  ·  ₹5/min
```

**After**
```
Astro Priya Sharma                    ✦ Aapki situation ke liye

Yeh isliye kyunki:
"Priya ji ne 2,100 log ke toote dil ko sambhala hai"

⭐ 4.9  ·  ₹5/min
```

One line. Specific to what you just typed. That's what converts a scroll into a tap.

---

### Problem-first product cards

**Before** - leads with catalogue

```
Rose Quartz Healing Bracelet
₹1,299  →  ₹849   35% Off
```

**After** - leads with problem

```
Rose Quartz Healing Bracelet

✓ Jab dil ka bojh utaarna ho
→ 7–14 din mein emotional healing shuru hogi

₹1,299  →  ₹849   35% Off
```

Same product. Completely different conversion context.

---

### Product detail - redesigned around the user's problem

**Before:** image → name → price → poetic description → Buy

**After:**

> **"Yeh lena sahi rahega agar:"**
> - Breakup ke baad dil nahi lag raha
> - Ex ke yaad bahut aate hain
> - Naya pyaar attract karna chahte hain

> **"Kitne din mein kya feel hoga:"**
> - Pehle hafte: emotional stress kam hona shuru
> - Doosre hafte: clarity aur calm mein sudhar
> - Teen-chaar hafte: new energy, ready to move forward

> **"Inlogo ne liya, yeh hua"** - verified buyer reviews tagged by problem type

> **"Astrologer ji kehte hain"** - closes the loop back to consultation

---

### Astrologer profile - with context

- Actual name in header, not *"Astrologer Profile"*
- Video intro - watch before spending. *"Consult se pehle - inhe jaaniye"*
- Problem-specific reviews surfaced based on what brought you here
- *"Yeh aapke liye kyun sahi hain?"* - not a generic bio section

---

## The AI Thinking

### Intent classification

The AI reads every query and returns three things: what the user actually means, which category it belongs to, and why each result matches *this specific query* - not a generic description.

`"mera dil toot gaya"` doesn't become a keyword search. It becomes: *understood as heartbreak, classified as Love & Relationship, matched to astrologers who have handled exactly this, and products whose outcome language speaks to exactly this pain.*

### What could be built next

| Layer | What it adds |
|-------|-------------|
| **Semantic search** | Match by meaning - `"paise ki tangi"` finds wealth astrologers even if no keywords overlap |
| **RAG-powered matching** | The why_matched line is generated from real consultation history and reviews - not invented |
| **Real-time session intelligence** | Astrologer mentions a remedy mid-chat → product card appears instantly in the user's screen |
| **Personalisation** | After a few sessions, the homepage adapts to the user's recurring problem - not generic listing |

### On quality

Before any AI layer touches real traffic, it needs a test set - real zero-result queries, rated by humans. The intent engine should classify correctly more than 85% of the time before shipping.

> Getting `"bhoot pret"` wrong - routing it to Health instead of Fear & Spirituality - is worse than the original blank screen. That's what evals are for.

---

## Metrics This Would Move

**North star:** Zero-result rate on search

Everything is downstream of this. If users always find something relevant, the funnel breathes.

| Metric | What it tells us |
|--------|-----------------|
| Zero-result rate | Is the intent engine working? |
| Search → card click | Does why-matched help users decide faster? |
| Card → consult | Does problem context convert better than rating alone? |
| Product detail → cart | Does outcome language convert better than discount? |
| Day 7 retention | Does a better first session create a second? |

> **What to collect from day one:** every search query, whether it returned results, what category it was classified as. Two weeks of this data shows exactly where the platform is failing users - in their own words. That's more convincing than any benchmark.


---

## The Observation That Started All of This

A product that meets a distressed user in their own language - the language of pain, not the language of catalogue - wins.

Not because it's clever. Because it's honest.

---

*Built by [Sanjeet](https://github.com/sanjeetbuilds)*
