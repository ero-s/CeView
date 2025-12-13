import { CalendarEvent, Market, Notification, KeywordTrend, PostPerformance, PerformanceReport } from './types';

// Palette from Pitch Deck Page 9 & User Image
export const COLORS = {
  TEAL: '#007892',    // Primary Brand (Deep Ocean)
  CYAN: '#62D2E0',    // Accents / Active (Shallow Water)
  GOLD: '#D6A539',    // Highlights / Attention (Sun/Sand)
  BEIGE: '#F5E5D1',   // Backgrounds / Panels (Sand)
  GREEN: '#506E53',   // Secondary / Nature (Foliage)
  WHITE: '#FFFFFF',
  OFF_WHITE: '#FDFBF7', // Very light beige for page backgrounds
  TEXT_DARK: '#1E293B',
  TEXT_LIGHT: '#64748B'
};

export const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: '1', title: 'Sinulog Festival', date: '2025-01-19', type: 'peak', market: Market.GLOBAL },
  { id: '2', title: 'Cherry Blossom Escape (KR)', date: '2025-03-15', type: 'micro-season', market: Market.KOREA },
  { id: '3', title: 'Golden Week Prep (JP)', date: '2025-04-20', type: 'opportunity', market: Market.JAPAN },
  { id: '4', title: 'Summer Dive Season', date: '2025-05-01', type: 'micro-season', market: Market.USA },
  { id: '5', title: 'Highland Adventures', date: '2025-06-10', type: 'micro-season', market: Market.KOREA },
];

export const BUSINESS_CATEGORIES = [
  "Beach Resort",
  "Urban Hotel",
  "Restaurant / Culinary",
  "Adventure Tour",
  "Cultural Heritage Site",
  "Wellness & Spa"
];

// Rich data for the "Market Analyzer" view embedded in notifications
export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '3',
    date: 'Week of May 19, 2025',
    title: 'Rising Trend: "Food Tourism" & Culinary Heritage',
    market: 'USA', // Changed from Global / Local to specific country
    trend: 'Food Tourism',
    isRead: false,
    details: {
      projectedArrivals: 52000,
      arrivalGrowth: 6.8,
      topInterests: [
        { name: "Authentic Lechon", score: 94 },
        { name: "Street Food Tours", score: 88 },
        { name: "Floating Restaurants", score: 81 }
      ],
      segments: [
        "Foodies seeking authentic local flavors",
        "Cultural explorers interested in history via cuisine",
        "Social media influencers focused on 'Mukbang' content"
      ],
      strategicInsights: {
        trendAlignment: "Searches for 'Cebu Best Food' and 'Lechon Making' have risen 25% this week.",
        connectivity: "Domestic tourism surge expected for upcoming long weekend.",
        economicValue: "High volume of micro-transactions boosting local MSMEs."
      },
      keywordData: [
        { keyword: "Cebu Lechon Best", volume: 94, growth: 25, market: "Global" },
        { keyword: "Carbon Market Food", volume: 88, growth: 30, market: "Local" },
        { keyword: "Cebu Food Tour", volume: 81, growth: 15, market: "USA/Europe" }
      ],
      contentStrategy: {
        platformRecommendation: "TikTok & Instagram",
        generatedCaptions: [
          {
            platform: "TikTok",
            text: "The crunch heard 'round the world! 🐷✨ Discover the secret spices behind Cebu's world-famous Lechon. Warning: Will cause cravings. #CebuEats #FoodTourism #Lechon",
            hashtags: ["#CebuFood", "#FilipinoFood", "#Mukbang", "#TravelPH"]
          },
          {
            platform: "Instagram",
            text: "More than just a meal, it's a story. 🍛 Explore the vibrant colors and flavors of our heritage cuisine. From street food to fine dining, taste the real Cebu.",
            hashtags: ["#CulinaryHeritage", "#CebuEats", "#FoodTravel", "#Authentic"]
          }
        ],
        visualDirections: [
          {
            platform: "TikTok",
            direction: "ASMR style video of chopping crispy lechon skin. Close up shots of dipping sauces."
          },
          {
            platform: "Instagram",
            direction: "High contrast, colorful flatlay of a 'Boodle Fight' setup or a beautifully plated heritage dish."
          }
        ]
      }
    }
  },
  {
    id: '1',
    date: 'Week of May 12, 2025',
    title: 'Surge in "Eco-Tourism" searches from Japan',
    market: 'Japan',
    trend: 'Eco-Tourism',
    isRead: true,
    details: {
      projectedArrivals: 98400,
      arrivalGrowth: 8.5,
      topInterests: [
        { name: "Sustainable Nature Retreats", score: 92 },
        { name: "Plastic-Free Stays", score: 84 },
        { name: "Marine Conservation", score: 78 }
      ],
      segments: [
        "Solo travelers seeking quiet nature immersion",
        "Eco-conscious couples looking for sustainable luxury",
        "Photography groups focused on marine biodiversity"
      ],
      strategicInsights: {
        trendAlignment: "Japanese search volume for 'Cebu Eco Resort' has doubled in the last 14 days.",
        connectivity: "Direct flights from Narita are adding 2 weekly frequencies starting next month.",
        economicValue: "High willingness to pay premium for certified sustainable accommodations."
      },
      keywordData: [
        { keyword: "Cebu Eco Resort", volume: 92, growth: 35, market: "Japan" },
        { keyword: "Sustainable Travel Philippines", volume: 84, growth: 22, market: "Japan" },
        { keyword: "Nature Quiet Stay", volume: 75, growth: 18, market: "Global" },
        { keyword: "Moalboal Turtle Watch", volume: 68, growth: 12, market: "Europe" },
        { keyword: "Organic Food Cebu", volume: 62, growth: 15, market: "Japan" }
      ],
      contentStrategy: {
        platformRecommendation: "Instagram & Blog (Note)",
        generatedCaptions: [
          {
            platform: "Instagram",
            text: "Escape the city noise. 🌿 Immerse yourself in the pure sounds of Cebu's nature. Our eco-villas offer a plastic-free sanctuary where luxury meets sustainability. #SustainableTravel #CebuNature #JapanToCebu",
            hashtags: ["#EcoLuxury", "#CebuTravel", "#PlasticFree", "#NatureRetreat"]
          },
          {
            platform: "Facebook",
            text: "Looking for a meaningful getaway? Experience Cebu's biodiversity with our guided conservation tours. Perfect for those who want to travel responsibly and connect with nature.",
            hashtags: ["#ResponsibleTourism", "#CebuConservation", "#FamilyTravel"]
          }
        ],
        visualDirections: [
          {
            platform: "Instagram",
            direction: "Use soft, natural lighting. Show a wide shot of the villa surrounded by greenery. Avoid clutter. Focus on 'Zen' aesthetics."
          },
          {
            platform: "Facebook",
            direction: "A short video clip showing a guest participating in a tree planting or turtle release activity. Emphasize community impact."
          }
        ]
      }
    }
  },
  {
    id: '2',
    date: 'Week of May 5, 2025',
    title: 'New Opportunity: "Wellness Tourism" (Healing)',
    market: 'South Korea',
    trend: 'Wellness Tourism',
    isRead: true,
    details: {
      projectedArrivals: 124500,
      arrivalGrowth: 12.5,
      topInterests: [
         { name: "Healing Travel", score: 98 },
         { name: "Eco-Resorts", score: 85 },
         { name: "Winter Golf", score: 76 }
      ],
      segments: [
        "Family units seeking educational cultural immersion for children",
        "Gen Z 'Newtro' (New Retro) seekers looking for aesthetic heritage photography",
        "English language students based in Cebu on weekend excursions",
        "Repeat visitors looking for alternatives to standard beach resorts"
      ],
      strategicInsights: {
        trendAlignment: "Search traffic for 'Cebu Healing Trip' has spiked 42%, aligning with 'Rustic/Nature' profiles.",
        connectivity: "5 daily direct flights from Incheon/Busan are operating at 85% load factor.",
        economicValue: "Highest Average Daily Spend ($140) among Asian markets with high affinity for dining."
      },
      keywordData: [
        { keyword: "Cebu Healing Trip", volume: 98, growth: 42, market: "South Korea" },
        { keyword: "Moalboal Free Diving", volume: 85, growth: 35, market: "USA / Europe" },
        { keyword: "Mactan Luxury Resort", volume: 76, growth: 28, market: "Japan" },
        { keyword: "Kawasan Canyoneering", volume: 72, growth: 15, market: "Global" },
        { keyword: "Cebu Lechon Tour", volume: 64, growth: 22, market: "Singapore" },
      ],
      contentStrategy: {
        platformRecommendation: "Instagram & TikTok",
        generatedCaptions: [
          {
            platform: "Instagram",
            text: "Burned out? ☁️ Find your pause button in Cebu. Warm breeze, healing food, and time that moves slower. 🛌✨ You deserve this rest. #HealingTrip #Cebu #Wellness",
            hashtags: ["#HealingTravel", "#CebuResort", "#KoreanTraveler", "#RestAndRelax"]
          },
          {
            platform: "TikTok",
            text: "POV: You just woke up in paradise. 🌊 No alarms, just ocean sounds. This is your sign to book that healing trip. ✈️🇵🇭",
            hashtags: ["#TravelTok", "#Cebu", "#HealingVibes", "#Philippines"]
          }
        ],
        visualDirections: [
          {
            platform: "Instagram",
            direction: "Aesthetic 'Mood' shot. Focus on details: a book by the pool, a tropical drink, or a sunset view. Warm, golden hour filter."
          },
          {
            platform: "TikTok",
            direction: "Slow-motion POV walk-through of the room opening up to the balcony view. Use trending 'Chill/Lo-fi' audio."
          }
        ]
      }
    }
  }
];

export const PLACEHOLDER_IMAGE = "assets/placeholder.png";

// Dashboard Data (Reflecting the South Korea / Wellness trend seen in dashboard cards)
export const MOCK_KEYWORD_DATA: KeywordTrend[] = [
  { keyword: "Cebu Healing Trip", volume: 98, growth: 42, market: "South Korea" },
  { keyword: "Moalboal Free Diving", volume: 85, growth: 35, market: "USA / Europe" },
  { keyword: "Mactan Luxury Resort", volume: 76, growth: 28, market: "Japan" },
  { keyword: "Kawasan Canyoneering", volume: 72, growth: 15, market: "Global" },
  { keyword: "Cebu Lechon Tour", volume: 64, growth: 22, market: "Singapore" },
];

export const TRAVELER_SEGMENTS = [
  "Foodies seeking authentic local flavors",
  "Cultural explorers interested in history via cuisine",
  "Social media influencers focused on 'Mukbang' content",
  "Eco-conscious couples looking for sustainable luxury"
];

// Mock Data for Performance Reports
// NOTE: Dates strictly align with the Notifications to show the performance OF that specific campaign week.
export const MOCK_PERFORMANCE_REPORTS: PerformanceReport[] = [
  {
    id: 'rpt-eco',
    weekLabel: 'Week of May 12, 2025',
    dateRange: 'May 12 - May 18',
    title: 'Eco-Tourism Campaign Success',
    isRead: false,
    summaryStats: {
      totalReach: 72400,
      avgEngagement: 9.2,
      topPlatform: 'Instagram'
    },
    data: [
      {
        id: 'p-eco-1',
        date: '2025-05-15', // Main campaign day
        platform: 'Instagram',
        contentSnippet: 'Wide shot of eco-villa with "Plastic-Free Sanctuary" caption.',
        likes: 1540,
        comments: 92,
        shares: 510,
        reach: 18200,
        engagementRate: 11.7 // High
      },
      {
        id: 'p-eco-2',
        date: '2025-05-15', // Main campaign day
        platform: 'Facebook',
        contentSnippet: 'Video of tree planting activity emphasizing community impact.',
        likes: 890,
        comments: 145,
        shares: 230,
        reach: 12500,
        engagementRate: 10.1 // Good
      },
      {
        id: 'p-eco-3',
        date: '2025-05-15', // Main campaign day
        platform: 'Instagram',
        contentSnippet: 'Organic breakfast spread flatlay. "Farm to Table" focus.',
        likes: 1100,
        comments: 45,
        shares: 120,
        reach: 9800,
        engagementRate: 12.9
      },
      {
        id: 'p-generic-1',
        date: '2025-05-12', // Earlier control post
        platform: 'Facebook',
        contentSnippet: 'Standard room rate flyer. Text heavy.',
        likes: 45,
        comments: 2,
        shares: 0,
        reach: 2200,
        engagementRate: 2.1 // Low comparison
      }
    ]
  },
  {
    id: 'rpt-wellness',
    weekLabel: 'Week of May 5, 2025',
    dateRange: 'May 5 - May 11',
    title: 'Wellness Tourism Insights',
    isRead: true,
    summaryStats: {
      totalReach: 68100,
      avgEngagement: 8.4,
      topPlatform: 'TikTok'
    },
    data: [
      {
        id: 'p1',
        date: '2025-05-09', // Main campaign day
        platform: 'Instagram',
        contentSnippet: 'Visuals of "Healing" breakfast with ocean view. Focused on quiet luxury.',
        likes: 1240,
        comments: 85,
        shares: 420,
        reach: 15400,
        engagementRate: 11.2 
      },
      {
        id: 'p2',
        date: '2025-05-09', // Main campaign day
        platform: 'TikTok',
        contentSnippet: 'POV video walking into the water. "No thoughts, just vibes" style audio.',
        likes: 3500,
        comments: 120,
        shares: 890,
        reach: 45000,
        engagementRate: 10.0
      },
      {
        id: 'p4',
        date: '2025-05-09', // Main campaign day
        platform: 'Instagram',
        contentSnippet: 'Carousel of local sustainable ingredients used in our restaurant.',
        likes: 680,
        comments: 32,
        shares: 45,
        reach: 5600,
        engagementRate: 13.5 // Very high relative to reach
      },
      {
        id: 'p3',
        date: '2025-05-07', // Generic
        platform: 'Facebook',
        contentSnippet: 'Standard room discount promotion. "Book now get 10% off".',
        likes: 45,
        comments: 5,
        shares: 2,
        reach: 1200,
        engagementRate: 4.3 
      },
      {
        id: 'p5',
        date: '2025-05-05', // Generic
        platform: 'Facebook',
        contentSnippet: 'Group tour photo from 2023. Generic caption "Fun in the sun".',
        likes: 20,
        comments: 1,
        shares: 0,
        reach: 800,
        engagementRate: 2.6
      }
    ]
  }
];

export const MOCK_POST_PERFORMANCE: PostPerformance[] = MOCK_PERFORMANCE_REPORTS[0].data;