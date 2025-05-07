"use client";

import { Dispatch, SetStateAction } from "react";
type Props = {
  isVisible: boolean;
  activeTab: "buyers" | "sellers";
  setActiveTab: Dispatch<SetStateAction<"buyers" | "sellers">>;
};

export default function Hero({ isVisible, activeTab, setActiveTab }: Props) {
  return (
    <>
      <nav/>
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Your Real Estate Journey,{' '}
                <span className="text-blue-600 dark:text-blue-400">Simplified with AI</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Homekey is the new, streamlined alternative to the traditional real estate model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/stage-tracker"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-base font-medium hover:bg-blue-700 transition-colors"
                  style={{ boxShadow: "0 4px 14px rgba(59, 130, 246, 0.35)", transition: "all 0.3s ease" }}
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
                className="bg-blue-10 dark:bg-black-50 rounded-xl shadow-xl p-6 relative overflow-hidden"
                style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Complete Roadmap for Buying or Selling a Home
                </h2>
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Homekey's AI-powered workspace breaks down the complex process of buying or selling a home into simple, manageable steps — eliminating confusion and ensuring nothing falls through the cracks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* ✓ items */}
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
    </>
  );
}
