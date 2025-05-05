"use client";

import { useState, useEffect, useRef } from "react";

/**
 * TimelineStage type definition for the real estate journey stages
 */
type TimelineStage = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  duration: number; // in days
  aiBenefit: string;
  traditionalDuration: number; // in days (without AI)
};

/**
 * FeatureItem type definition for the feature grid display
 */
type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

/**
 * Home component representing the hero section for Homekey real estate platform
 */
export default function Home() {
  // State for animation and interaction control
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");
  const [activeBuyerStage, setActiveBuyerStage] = useState<number>(2);
  const [activeSellerStage, setActiveSellerStage] = useState<number>(3);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // State for timeline interactions
  const [showAIComparison, setShowAIComparison] = useState<boolean>(true);
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  // Buyer journey timeline stages
  const buyerStages: TimelineStage[] = [
    {
      id: 1,
      title: "Prepare Finances and Initiate Purchase Offer",
      description: "Get pre-approved for a mortgage and start searching for your dream home.",
      isCompleted: true,
      duration: 7,
      traditionalDuration: 14,
      aiBenefit: "AI analyzes your financial profile to match you with the best mortgage options instantly, cutting decision time in half."
    },
    {
      id: 2,
      title: "Compare Offers and Negotiate Terms",
      description: "Review multiple options and negotiate the best deal for your budget.",
      isCompleted: true,
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
  const sellerStages: TimelineStage[] = [
    {
      id: 1,
      title: "Initial Setup and Listing Preparation",
      description: "Prepare your home for sale and set an optimal listing price.",
      isCompleted: true,
      duration: 5,
      traditionalDuration: 14,
      aiBenefit: "AI analyzes thousands of comparable listings to set the perfect price point and generates staging recommendations for maximum appeal."
    },
    {
      id: 2,
      title: "Listing, Marketing, and Showings",
      description: "List your property and showcase it to potential buyers.",
      isCompleted: true,
      duration: 7,
      traditionalDuration: 21,
      aiBenefit: "AI automatically generates professional listing content and targets marketing to the most likely buyers based on real-time data."
    },
    {
      id: 3,
      title: "Offer and Negotiation",
      description: "Review offers and negotiate the best terms for your property.",
      isCompleted: true,
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
  const buyerFeatures: FeatureItem[] = [
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
  const sellerFeatures: FeatureItem[] = [
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

  // Tool items for the tabbed interface
  const tools = [
    { id: "documentAnalysis", label: "Document Analysis", icon: "📄" },
    { id: "listingCopilot", label: "Listing Copilot", icon: "🏠" },
    { id: "propertySearch", label: "Property Search", icon: "🔍" },
    { id: "propertyAnalysis", label: "Property Analysis", icon: "📊" },
  ];

  // Simulate entrance animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle stage selection for timeline
  const handleStageClick = (stageId: number) => {
    if (activeTab === "buyers") {
      setActiveBuyerStage(stageId);
    } else {
      setActiveSellerStage(stageId);
    }
  };

  // Handle stage hover
  const handleStageHover = (stageId: number | null) => {
    setIsHovering(stageId);
  };

  // Helper function to determine if a stage is active
  const isStageActive = (stageId: number): boolean => {
    return activeTab === "buyers" 
      ? stageId === activeBuyerStage 
      : stageId === activeSellerStage;
  };

  // Helper function to determine progress percentage
  const getProgressPercentage = (): number => {
    const stages = activeTab === "buyers" ? buyerStages : sellerStages;
    const completed = stages.filter(stage => stage.isCompleted).length;
    return (completed / stages.length) * 100;
  };

  // Helper function to get active stages
  const getActiveStages = (): TimelineStage[] => {
    return activeTab === "buyers" ? buyerStages : sellerStages;
  };

  // Helper function to get active features
  const getActiveFeatures = (): FeatureItem[] => {
    return activeTab === "buyers" ? buyerFeatures : sellerFeatures;
  };

  // Helper function to calculate total duration
  const getTotalDuration = (withAI: boolean = true): number => {
    const stages = activeTab === "buyers" ? buyerStages : sellerStages;
    return stages.reduce((sum, stage) => sum + (withAI ? stage.duration : stage.traditionalDuration), 0);
  };

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden"
      style={{
        backgroundSize: "300% 300%",
      }}
    >
      {/* Navigation Bar */}
      <nav 
        className="relative z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Homekey
              </div>
              <div className="hidden md:flex md:ml-10 space-x-8">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Explore Listings</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dashboard</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Company</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Partner with Us</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                <span className="text-lg">🤖</span>
                Enable AI Assistant
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">JF</div>
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Jiayu Feng</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Your Real Estate Journey, <span className="text-blue-600 dark:text-blue-400">Simplified with AI</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Homekey is the new, streamlined alternative to the traditional real estate model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-base font-medium hover:bg-blue-700 transition-colors"
                  style={{
                    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.35)",
                    transition: "all 0.3s ease"
                  }}
                >
                  Go to Dashboard
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-6 py-3 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Get Access to the Demo Account
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 relative overflow-hidden"
                style={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(180deg, rgba(249,250,251,0.5) 0%, rgba(249,250,251,1) 100%)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Complete Roadmap for Buying or Selling a Home
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Homekey's AI-powered workspace breaks down the complex process of buying or selling a home into simple, manageable steps — eliminating confusion and ensuring nothing falls through the cracks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Step-by-step guidance through the entire process</p>
                  </div>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Track progress and manage tasks with your AI assistant</p>
                  </div>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Access all your documents and communications in one place</p>
                  </div>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Schedule service provider appointments and viewings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-16 bg-gray-50 dark:bg-gray-900"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          transitionDelay: "0.2s"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Home {activeTab === "buyers" ? "Buying" : "Selling"} Progress
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Track your transaction journey
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "buyers"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("buyers")}
              >
                For Buyers
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "sellers"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab("sellers")}
              >
                For Sellers
              </button>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm inline-flex">
                <button
                  className={`flex items-center px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    showAIComparison
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setShowAIComparison(true)}
                >
                  <span className="mr-1">🤖</span> With AI
                </button>
                <button
                  className={`flex items-center px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    !showAIComparison
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setShowAIComparison(false)}
                >
                  <span className="mr-1">👤</span> Traditional
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-4">
            <div className="text-center mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {activeTab === "buyers" 
                  ? `${buyerStages.filter(s => s.isCompleted).length}/${buyerStages.length} steps completed`
                  : `${sellerStages.filter(s => s.isCompleted).length}/${sellerStages.length} steps completed`
                }
              </span>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Estimated time to completion: <span className="font-medium text-blue-600 dark:text-blue-400">
                  {showAIComparison 
                    ? getTotalDuration() 
                    : getTotalDuration(false)
                  } days
                </span>
                {showAIComparison && (
                  <span className="ml-2 text-green-600 dark:text-green-400">
                    ({Math.round((1 - getTotalDuration() / getTotalDuration(false)) * 100)}% faster with AI)
                  </span>
                )}
              </div>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                style={{ 
                  width: `${getProgressPercentage()}%`,
                  transition: "width 0.5s ease-out"
                }}
              ></div>
            </div>
          </div>

          {/* Gantt Chart Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mt-8">
            {/* Timeline Header */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="w-1/3 font-medium text-gray-700 dark:text-gray-300">Stage</div>
              <div className="w-2/3 flex">
                <div className="flex-grow text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                  Timeline ({showAIComparison ? "with AI" : "traditional"})
                </div>
              </div>
            </div>
            
            {/* Timeline Stages Gantt Chart */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {getActiveStages().map((stage) => {
                // Calculate width percentage based on duration relative to total
                const totalDuration = showAIComparison ? getTotalDuration() : getTotalDuration(false);
                const duration = showAIComparison ? stage.duration : stage.traditionalDuration;
                const stageWidth = (duration / totalDuration) * 100;
                
                // Calculate position based on completed previous stages
                const previousStages = getActiveStages().filter(s => s.id < stage.id);
                const previousDuration = previousStages.reduce(
                  (sum, s) => sum + (showAIComparison ? s.duration : s.traditionalDuration), 
                  0
                );
                const stagePosition = (previousDuration / totalDuration) * 100;
                
                return (
                  <div 
                    key={stage.id}
                    className={`p-4 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                      expandedBenefit === stage.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Stage Name */}
                      <div 
                        className="w-full md:w-1/3 cursor-pointer flex items-center"
                        onClick={() => setExpandedBenefit(expandedBenefit === stage.id ? null : stage.id)}
                      >
                        <div 
                          className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${
                            stage.isCompleted 
                              ? "bg-blue-600 text-white" 
                              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          <span className="text-xs font-medium">{stage.id}</span>
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            stage.isCompleted 
                              ? "text-gray-900 dark:text-white" 
                              : "text-gray-600 dark:text-gray-300"
                          }`}>
                            {stage.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {showAIComparison ? stage.duration : stage.traditionalDuration} days
                          </p>
                        </div>
                      </div>
                      
                      {/* Timeline Gantt Bar */}
                      <div className="w-full md:w-2/3 flex items-center">
                        <div className="w-full bg-gray-100 dark:bg-gray-700 h-8 rounded-md relative">
                          <div 
                            className={`absolute top-0 bottom-0 rounded-md ${
                              stage.isCompleted 
                                ? "bg-green-500 dark:bg-green-600" 
                                : "bg-blue-500 dark:bg-blue-600"
                            } flex items-center justify-start px-2`}
                            style={{ 
                              width: `${stageWidth}%`, 
                              left: `${stagePosition}%`,
                              transition: "width 0.5s ease-out, left 0.5s ease-out"
                            }}
                          >
                            <span className="text-xs font-medium text-white truncate">
                              {stage.title}
                            </span>
                          </div>
                          
                          {/* Show traditional timeline comparison as a ghost */}
                          {showAIComparison && (
                            <div 
                              className="absolute top-0 bottom-0 rounded-md bg-gray-400/20 dark:bg-gray-500/20 border border-dashed border-gray-400 dark:border-gray-500"
                              style={{ 
                                width: `${(stage.traditionalDuration / getTotalDuration(false)) * 100}%`, 
                                left: `${previousStages.reduce((sum, s) => sum + s.traditionalDuration, 0) / getTotalDuration(false) * 100}%`,
                                transition: "width 0.5s ease-out, left 0.5s ease-out"
                              }}
                            ></div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Benefits Expansion */}
                    {expandedBenefit === stage.id && (
                      <div className="mt-4 pl-10 pr-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900/30 shadow-sm">
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          <div className="mb-2">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">AI Benefit:</span> {stage.aiBenefit}
                          </div>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center mr-4">
                              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                              With AI: {stage.duration} days
                            </div>
                            <div className="flex items-center">
                              <span className="inline-block w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500 mr-1"></span>
                              Traditional: {stage.traditionalDuration} days
                            </div>
                            <div className="ml-auto text-green-600 dark:text-green-400 font-medium">
                              {Math.round((1 - stage.duration / stage.traditionalDuration) * 100)}% faster
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Backend Integration Comment */}
          {/* 
            BACKEND DEVELOPER NOTE:
            This Gantt chart timeline can be connected to a real calendar system with these integration points:
            1. Each stage can connect to actual calendar events via API
            2. Duration values can be dynamically calculated from real-time data
            3. Add a calendar picker component above this section to filter by date
            4. Implement a GraphQL or REST API endpoint to fetch/update the following data:
               - Stage completion status
               - Actual timeline progress vs. estimated
               - Calendar events associated with each stage
               - User notifications for upcoming deadlines
               
            Suggested database schema:
            - timeline_stages (id, user_id, property_id, stage_type, title, description, status, start_date, end_date)
            - timeline_events (id, stage_id, title, description, event_date, attendees, location)
            - user_progress (user_id, property_id, current_stage, percent_complete, estimated_completion)
            
            The current frontend implementation is designed to easily connect with this backend structure.
          */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Navigate Your Real Estate Process with Confidence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Powerful AI-driven tools that help both buyers and sellers make informed decisions and navigate the real estate process with ease.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                <button
                  className={`relative z-10 px-6 py-2 rounded-full font-medium transition-colors text-center ${
                    activeTab === "buyers"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("buyers")}
                >
                  Solutions for Home Buyers
                </button>
                <button
                  className={`relative z-10 px-6 py-2 rounded-full font-medium transition-colors text-center ${
                    activeTab === "sellers"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("sellers")}
                >
                  Solutions for Home Sellers
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getActiveFeatures().map((feature) => (
                <div key={feature.id} className="group relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800">
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-3 text-lg text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 Homekey. Your real estate journey, simplified with AI.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shine {
          from { background-position: 200% 0; }
          to { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
}
