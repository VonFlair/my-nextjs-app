"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Timeline item type definition for the real estate AI journey
 */
type TimelineItem = {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
};

/**
 * Home component representing the hero section for a real estate AI company
 */
export default function Home() {
  // State for animation control
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Timeline data representing the real estate AI journey
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      year: "2020",
      title: "AI Foundation",
      description: "We laid the groundwork for revolutionizing real estate with cutting-edge AI algorithms.",
      icon: "🏠",
    },
    {
      id: 2,
      year: "2021",
      title: "Market Analysis",
      description: "Our AI began predicting market trends with unprecedented accuracy, saving investors millions.",
      icon: "📊",
    },
    {
      id: 3,
      year: "2022",
      title: "Client Success",
      description: "Over 1,000 real estate professionals adopted our platform, transforming their business.",
      icon: "🚀",
    },
    {
      id: 4,
      year: "2023",
      title: "Global Expansion",
      description: "Our AI solutions expanded to 25 countries, adapting to diverse real estate markets.",
      icon: "🌎",
    },
    {
      id: 5,
      year: "2024",
      title: "The Future",
      description: "We're developing next-gen AI that will make property decisions smarter than ever before.",
      icon: "🔮",
    },
  ];

  // Simulate entrance animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance timeline every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [timelineItems.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 overflow-hidden">
      {/* Hero Section */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
        }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              RealEstateAI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming the real estate industry with powerful AI solutions that predict market trends, optimize investments, and streamline property management.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative mt-20 mb-20">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-indigo-200 dark:bg-indigo-800 z-0 rounded-full">
            <div 
              className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
              style={{ 
                width: `${(activeIndex + 1) * (100 / timelineItems.length)}%`,
                transition: "width 0.5s ease-out"
              }}
            ></div>
          </div>

          {/* Timeline Points */}
          <div className="flex justify-between relative z-10">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id} 
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <div 
                  className="flex items-center justify-center w-16 h-16 rounded-full mb-2 text-2xl"
                  style={{
                    backgroundColor: index <= activeIndex ? "rgb(79, 70, 229)" : "rgb(224, 231, 255)",
                    color: index <= activeIndex ? "white" : "rgb(79, 70, 229)",
                    transform: index === activeIndex ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease-out",
                    boxShadow: index === activeIndex ? "0 0 15px rgba(79, 70, 229, 0.6)" : "none"
                  }}
                >
                  {item.icon}
                </div>
                <div className="text-center" style={{ 
                  opacity: index === activeIndex ? 1 : 0.7,
                  transform: index === activeIndex ? "translateY(0)" : "translateY(5px)",
                  transition: "all 0.3s ease-out"
                }}>
                  <p className="font-bold text-indigo-900 dark:text-indigo-300">{item.year}</p>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Timeline Content */}
        <div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <div className="flex items-center mb-4">
            <div className="text-4xl mr-4">{timelineItems[activeIndex].icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{timelineItems[activeIndex].title}</h2>
              <p className="text-indigo-600 dark:text-indigo-400">{timelineItems[activeIndex].year}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {timelineItems[activeIndex].description}
          </p>
        </div>

        {/* CTA Section */}
        <div 
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            transitionDelay: "0.2s"
          }}
        >
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white gap-2 font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              href="#"
              style={{
                boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)",
                transition: "all 0.3s ease"
              }}
            >
              <span className="mr-2">🔍</span>
              Start Your AI Journey
            </a>
            <a
              className="rounded-full border border-solid border-indigo-200 dark:border-indigo-800 transition-colors flex items-center justify-center bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-300 gap-2 font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              href="#"
              style={{
                transition: "all 0.3s ease"
              }}
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>

      {/* Footer with credits */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© 2024 RealEstateAI. Transforming property decisions with artificial intelligence.</p>
      </footer>
    </div>
  );
}
