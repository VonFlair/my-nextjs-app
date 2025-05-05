"use client";

import { Dispatch, SetStateAction } from "react";

export type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type Props = {
  activeTab: "buyers" | "sellers";
  setActiveTab: Dispatch<SetStateAction<"buyers" | "sellers">>;
};

export default function Features({ activeTab, setActiveTab }: Props) {
  const buyerFeatures: FeatureItem[] = [
    { id: 1, title: "Document Analysis", description: "AI reads and explains complex real estate docs, highlighting important terms.", icon: "📄" },
    { id: 2, title: "AI Real Estate Assistant", description: "24/7 guidance for any real estate question—instantly and intelligently.", icon: "🤖" },
    { id: 3, title: "Market Analytics", description: "Detailed market insights for any neighborhood, including price trends.", icon: "📊" },
    { id: 4, title: "Natural Language Search", description: "Describe your ideal home in plain English—our AI finds the perfect matches.", icon: "🔍" },
    { id: 5, title: "Property Insights", description: "Get AI analysis of neighborhoods, climate risks, and future value predictions.", icon: "🏡" },
    { id: 6, title: "Offer Copilot", description: "Create competitive purchase offers with AI guidance tailored to local markets.", icon: "✅" },
  ];

  const sellerFeatures: FeatureItem[] = [
    { id: 1, title: "Listing Optimization", description: "AI tools to perfectly position your home in the current market.", icon: "📈" },
    { id: 2, title: "Virtual Staging", description: "Transform empty spaces into beautifully staged rooms with AI.", icon: "🏠" },
    { id: 3, title: "Price Intelligence", description: "Data-driven pricing recommendations based on market conditions.", icon: "💰" },
    { id: 4, title: "Automated Marketing", description: "AI creates and distributes compelling listing content across channels.", icon: "📱" },
    { id: 5, title: "Showing Assistant", description: "Schedule and manage property viewings with automated follow-ups.", icon: "📅" },
    { id: 6, title: "Negotiation Insights", description: "AI-powered analysis of offers to maximize your selling potential.", icon: "🤝" },
  ];

  const getActiveFeatures = () => (activeTab === "buyers" ? buyerFeatures : sellerFeatures);

  return (
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
  );
}
