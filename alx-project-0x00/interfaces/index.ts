// interfaces/index.ts

// Example interface for a user
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Example interface for props for a component
  export interface LandingProps {
    title: string;
  }
  
  // Example for a functional component with typed props
  export type FunctionalComponentWithProps = React.FC<LandingProps>;  
  export interface PillProps {
    title: string
  }
  export interface ButtonProps {
    title: string;
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  }