"use client";

import { useState, useEffect, useRef } from "react";
import '@/app/styles/animation.css'

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
  Hero section for Homekey real estate platform
 */
export default function Home() {
  // State for animation and interaction control
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showCompletionAnimation, setShowCompletionAnimation] = useState<boolean>(false);
  const [animatedSteps, setAnimatedSteps] = useState<number[]>([]);

  // State for timeline interactions
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  // Buyer journey timeline stages
  const buyerStages: TimelineStage[] = [
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
  const sellerStages: TimelineStage[] = [
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

  // Simulate entrance animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add animation effect for step completion with sequential timing
  useEffect(() => {
    if (isVisible && timelineRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShowCompletionAnimation(true);
            
            // Reset animated steps when tab changes
            setAnimatedSteps([]);
            
            // Get all stages for the active tab
            const allStages = getActiveStages();
            
            // Animate each step one by one with 1-second interval
            allStages.forEach((stage, index) => {
              setTimeout(() => {
                setAnimatedSteps(prev => [...prev, stage.id]);
              }, index * 1000); // 1-second interval between each step
            });
            
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(timelineRef.current);
      
      return () => {
        observer.disconnect();
      };
    }
  }, [isVisible, activeTab]);

  // Helper function to determine progress percentage
  const getProgressPercentage = (): number => {
    const stages = activeTab === "buyers" ? buyerStages : sellerStages;
    const completed = stages.filter(stage => animatedSteps.includes(stage.id)).length;
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

  // Helper function to calculate time savings percentage
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
                className="bg-blue-10 dark:bg-blue-50 rounded-xl shadow-xl p-6 relative overflow-hidden"
                style={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",

                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Complete Roadmap for Buying or Selling a Home
                </h2>
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Homekey's AI-powered workspace breaks down the complex process of buying or selling a home into simple, manageable steps — eliminating confusion and ensuring nothing falls through the cracks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/40 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50">
                    <div className="text-blue-600 dark:text-blue-300 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-200">Step-by-step guidance through the entire process</p>
                  </div>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/40 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50">
                    <div className="text-blue-600 dark:text-blue-300 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-200">Track progress and manage tasks with your AI assistant</p>
                  </div>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/40 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50">
                    <div className="text-blue-600 dark:text-blue-300 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-200">Access all your documents and communications in one place</p>
                  </div>
                  <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/40 p-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50">
                    <div className="text-blue-600 dark:text-blue-300 font-bold">✓</div>
                    <p className="text-sm text-gray-700 dark:text-gray-200">Schedule service provider appointments and viewings</p>
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
          <div className="max-w-5xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 inline-flex items-center">
                Your Home 
                <div className="relative mx-2 inline-block">
                  <button
                    onClick={() => setActiveTab(activeTab === "buyers" ? "sellers" : "buyers")}
                    className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    {activeTab === "buyers" ? "Buying" : "Selling"}
                    <span className="ml-1 text-xs">▼</span>
                  </button>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"></div>
                </div> Progress
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Track your transaction journey with AI-powered assistance
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-center">
              <div className="flex justify-center mb-4 md:mb-0">
                <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
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
              </div>
            </div>
          </div>

          <div className="mt-8 mb-6">
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-8" ref={timelineRef}>
                {getActiveStages().map((stage) => (
                  <div
                    key={stage.id}
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      animatedSteps.includes(stage.id)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                    }`}
                    style={{
                      transform: animatedSteps.includes(stage.id) ? "scale(1.2)" : "scale(1)",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    <span className="text-xs font-medium">
                      {stage.id}
                    </span>
                    {animatedSteps.includes(stage.id) && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={`transform transition-all duration-700 ${
                showCompletionAnimation ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
            </div>
            
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-8">
              <div 
                className="h-full bg-green-600 dark:bg-green-500 rounded-full"
                style={{ 
                  width: `${getProgressPercentage()}%`,
                  transition: "width 1s ease-out",
                  animation: "progressFill 1.5s ease-out"
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
                  Timeline Comparison
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="bg-white dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                With AI
              </div>
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400/20 border border-dashed border-gray-400 mr-1"></span>
                Traditional
              </div>
            </div>
            
            {/* Timeline Stages Gantt Chart */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {getActiveStages().map((stage) => {
                // Use AI timeline as the basis for displaying both timelines
                const totalTraditionalDuration = getTotalDuration(false);
                
                // Calculate the width and position for the AI timeline
                const aiDuration = stage.duration;
                const aiWidth = (aiDuration / totalTraditionalDuration) * 100; // Use traditional as reference for better comparison
                
                const previousAIStages = getActiveStages().filter(s => s.id < stage.id);
                const previousAIDuration = previousAIStages.reduce(
                  (sum, s) => sum + s.duration, 
                  0
                );
                const aiPosition = (previousAIDuration / totalTraditionalDuration) * 100;
                
                // Calculate the width and position for the traditional timeline
                const traditionalDuration = stage.traditionalDuration;
                const traditionalWidth = (traditionalDuration / totalTraditionalDuration) * 100;
                
                const previousTraditionalDuration = previousAIStages.reduce(
                  (sum, s) => sum + s.traditionalDuration, 
                  0
                );
                const traditionalPosition = (previousTraditionalDuration / totalTraditionalDuration) * 100;
                
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
                            animatedSteps.includes(stage.id)
                              ? "bg-green-600 text-white" 
                              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          <span className="text-xs font-medium">
                            {stage.id}
                          </span>
                        </div>
                        <div>
                          <h3 className={`font-medium ${
                            animatedSteps.includes(stage.id)
                              ? "text-gray-900 dark:text-white" 
                              : "text-gray-600 dark:text-gray-300"
                          }`}>
                            {stage.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {stage.duration} days
                          </p>
                        </div>
                      </div>
                      
                      {/* Timeline Gantt Bar */}
                      <div className="w-full md:w-2/3 flex items-center">
                        <div className="w-full bg-gray-100 dark:bg-gray-700 h-10 rounded-md relative overflow-hidden">
                          {/* Traditional Timeline Bar (shown behind as a full-width element) */}
                          <div 
                            className="absolute top-0 bottom-0 left-0 right-0 rounded-md bg-gray-200 dark:bg-gray-600"
                          ></div>
                          
                          {/* Traditional Timeline Bar */}
                          <div 
                            className="absolute top-0 bottom-0 rounded-md bg-gray-400/40 dark:bg-gray-500/40"
                            style={{ 
                              width: `${traditionalWidth}%`, 
                              left: `${traditionalPosition}%`,
                              transition: "width 0.8s ease-out, left 0.8s ease-out"
                            }}
                          >
                            <div className="absolute top-0 bottom-0 left-0 w-full flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 opacity-70 px-2">
                                {stage.traditionalDuration}d
                              </span>
                            </div>
                          </div>
                          
                          {/* AI Timeline Bar with animation */}
                          <div 
                            className={`absolute inset-0 rounded-md ${
                              animatedSteps.includes(stage.id)
                                ? "bg-green-500 dark:bg-green-600" 
                                : "bg-blue-500 dark:bg-blue-600"
                            } flex items-center justify-center`}
                            style={{ 
                              width: `${aiWidth}%`, 
                              left: `${aiPosition}%`,
                              height: "100%",
                              transition: "width 1s ease-out, left 1s ease-out, background-color 0.5s ease-out",
                              opacity: isVisible ? 1 : 0,
                              animation: animatedSteps.includes(stage.id) ? "pulseScale 2s ease-in-out" : "none",
                            }}
                          >
                            <span className="text-xs font-bold text-white">
                              {stage.duration}d
                            </span>
                            
                            {animatedSteps.includes(stage.id) && (
                              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                              </span>
                            )}
                          </div>
                          
                          {/* Time savings indicator with improved animation */}
                          {animatedSteps.includes(stage.id) && (
                            <div 
                              className="absolute -right-1 top-2 transform -translate-y-1/2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-l-full opacity-0 z-30"
                              style={{
                                animation: "fadeIn 0.8s ease-out 0.3s forwards", // Delay the animation for a sequence effect
                                boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                              }}
                            >
                              {Math.round((1 - stage.duration / stage.traditionalDuration) * 100)}% faster
                            </div>
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 0.9; transform: translateX(0); }
        }
        
        @keyframes pulseScale {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.02) translateY(-1px); }
          100% { transform: scale(1) translateY(0); }
        }
        
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
