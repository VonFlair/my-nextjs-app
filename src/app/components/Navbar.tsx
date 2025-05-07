'use client';

import { Dispatch, SetStateAction } from "react";

type Props = {
  isVisible: boolean;
};

export default function Nav({ isVisible }: Props) {
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
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Explore Listings</a>
                <a href="/stage-tracker" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dashboard</a>
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
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  JF
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Jiayu Feng                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
