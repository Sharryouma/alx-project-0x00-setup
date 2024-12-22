// interfaces/index.ts

// Interface for Pill component
export interface PillProps {
    title: string;
  }
  
  // Interface for Button component
  export interface ButtonProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  }