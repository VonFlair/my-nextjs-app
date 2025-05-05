import type { FeatureItem, TimelineStage } from "@/app/types/item";
// Buyer journey timeline stages
  export const buyerStages: TimelineStage[] = [
    {
      id: 1,
      title: "Prepare Finances and Initiate Purchase Offer",
      description: "Get pre-approved for a mortgage and start searching for your dream home.",
      isCompleted: false,
      duration: 7,
      traditionalDuration: 14,
      aiBenefit: "AI analyzes your financial profile to match you with the best mortgage options instantly, cutting decision time in half."
    },
    {
      id: 2,
      title: "Compare Offers and Negotiate Terms",
      description: "Review multiple options and negotiate the best deal for your budget.",
      isCompleted: false,
      duration: 5,
      traditionalDuration: 10,
      aiBenefit: "AI provides real-time market comparisons and negotiation insights based on thousands of similar deals in your area."
    },
    {
      id: 3,
      title: "Finalize Purchase Agreement",
      description: "Complete all paperwork and formalize the purchase agreement.",
      isCompleted: false,
      duration: 3,
      traditionalDuration: 7,
      aiBenefit: "Document analysis AI reads and explains complex legal terms, highlighting potential issues before you sign."
    },
    {
      id: 4,
      title: "Due Diligence and Contingencies",
      description: "Conduct inspections and ensure all conditions are met before proceeding.",
      isCompleted: false,
      duration: 10,
      traditionalDuration: 21,
      aiBenefit: "AI schedules and coordinates all inspections automatically, and analyzes inspection reports to identify critical issues."
    },
    {
      id: 5,
      title: "Finalize Purchase and Closing",
      description: "Complete the final walkthrough and sign closing documents to take ownership.",
      isCompleted: false,
      duration: 2,
      traditionalDuration: 5,
      aiBenefit: "AI-powered closing checklist ensures all requirements are met, with digital document verification to prevent last-minute issues."
    },
  ];

  // Seller journey timeline stages
  export const sellerStages: TimelineStage[] = [
    {
      id: 1,
      title: "Initial Setup and Listing Preparation",
      description: "Prepare your home for sale and set an optimal listing price.",
      isCompleted: false,
      duration: 5,
      traditionalDuration: 14,
      aiBenefit: "AI analyzes thousands of comparable listings to set the perfect price point and generates staging recommendations for maximum appeal."
    },
    {
      id: 2,
      title: "Listing, Marketing, and Showings",
      description: "List your property and showcase it to potential buyers.",
      isCompleted: false,
      duration: 7,
      traditionalDuration: 21,
      aiBenefit: "AI automatically generates professional listing content and targets marketing to the most likely buyers based on real-time data."
    },
    {
      id: 3,
      title: "Offer and Negotiation",
      description: "Review offers and negotiate the best terms for your property.",
      isCompleted: false,
      duration: 4,
      traditionalDuration: 10,
      aiBenefit: "AI analyzes and compares all offers, highlighting strengths and potential issues in each to maximize your advantage in negotiations."
    },
    {
      id: 4,
      title: "Contract Finalization and Due Diligence",
      description: "Complete necessary inspections and fulfill contract requirements.",
      isCompleted: false,
      duration: 8,
      traditionalDuration: 14,
      aiBenefit: "AI manages all document requirements and tracks contingency deadlines automatically to prevent costly oversights."
    },
    {
      id: 5,
      title: "Closing Process and Handover",
      description: "Complete final paperwork and transfer ownership to the buyer.",
      isCompleted: false,
      duration: 2,
      traditionalDuration: 7,
      aiBenefit: "AI generates a complete digital closing package and coordinates all parties, reducing delays and eliminating common closing problems."
    },
  ];

  // Feature items for buyers section
  export const buyerFeatures: FeatureItem[] = [
    {
      id: 1,
      title: "Document Analysis",
      description: "AI reads and explains complex real estate docs, highlighting important terms.",
      icon: "📄",
    },
    {
      id: 2,
      title: "AI Real Estate Assistant",
      description: "24/7 guidance for any real estate question—instantly and intelligently.",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Market Analytics",
      description: "Detailed market insights for any neighborhood, including price trends.",
      icon: "📊",
    },
    {
      id: 4,
      title: "Natural Language Search",
      description: "Describe your ideal home in plain English—our AI finds the perfect matches.",
      icon: "🔍",
    },
    {
      id: 5,
      title: "Property Insights",
      description: "Get AI analysis of neighborhoods, climate risks, and future value predictions.",
      icon: "🏡",
    },
    {
      id: 6,
      title: "Offer Copilot",
      description: "Create competitive purchase offers with AI guidance tailored to local markets.",
      icon: "✅",
    },
  ];

  // Feature items for sellers section
  export const sellerFeatures: FeatureItem[] = [
    {
      id: 1,
      title: "Listing Optimization",
      description: "AI tools to perfectly position your home in the current market.",
      icon: "📈",
    },
    {
      id: 2,
      title: "Virtual Staging",
      description: "Transform empty spaces into beautifully staged rooms with AI.",
      icon: "🏠",
    },
    {
      id: 3,
      title: "Price Intelligence",
      description: "Data-driven pricing recommendations based on market conditions.",
      icon: "💰",
    },
    {
      id: 4,
      title: "Automated Marketing",
      description: "AI creates and distributes compelling listing content across channels.",
      icon: "📱",
    },
    {
      id: 5,
      title: "Showing Assistant",
      description: "Schedule and manage property viewings with automated follow-ups.",
      icon: "📅",
    },
    {
      id: 6,
      title: "Negotiation Insights",
      description: "AI-powered analysis of offers to maximize your selling potential.",
      icon: "🤝",
    },
  ];


