
export type TimelineStage = {
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
export type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

