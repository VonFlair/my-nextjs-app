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
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Explore Listings
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Partner with Us
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                <span className="text-lg">🤖</span>
                Enable AI Assistant
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  JF
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Jiayu Feng
                </span>
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
                  href="#"
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
                className="bg-blue-10 dark:bg-blue-50 rounded-xl shadow-xl p-6 relative overflow-hidden"
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
