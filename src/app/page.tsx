"use client";

import { useState, useEffect, useRef } from "react";
import '@/app/styles/animation.css'
import footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features"
import Timeline from "./components/Timeline";
import type { FeatureItem,TimelineStage } from "./types/item";
import {
  buyerStages,
  sellerStages,
  buyerFeatures,
  sellerFeatures,
} from "@/app/data/stages";

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


  // Helper function to get active stages
  const getActiveStages = (): TimelineStage[] => {
    return activeTab === "buyers" ? buyerStages : sellerStages;
  };



  // Helper function to calculate time savings percentage
  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden"
      style={{
        backgroundSize: "300% 300%",
      }}
    >

      {/* Hero Section */}
      <Hero
        isVisible={isVisible}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Timeline Section */}
      <Timeline
        isVisible={isVisible}
        activeTab={activeTab}
        setActiveTab={setActiveTab}         // ← 在这里传入
        timelineRef={timelineRef}
        animatedSteps={animatedSteps}
        setAnimatedSteps={setAnimatedSteps}
        showCompletionAnimation={showCompletionAnimation}
        setShowCompletionAnimation={setShowCompletionAnimation}
        expandedBenefit={expandedBenefit}
        setExpandedBenefit={setExpandedBenefit}
        setIsVisible={setIsVisible}
      />

      {/* Features Section */}
      <Features activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Footer */}
            <footer/>
      </div>
  );
}
