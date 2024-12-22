// components/Button.tsx
import React from 'react';

interface ButtonProps {
  title: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  let buttonSize = '';
  let buttonShape = '';

  // Set button size based on the size prop
  switch (size) {
    case 'small':
      buttonSize = 'px-4 py-2 text-sm';
      break;
    case 'medium':
      buttonSize = 'px-6 py-3 text-md';
      break;
    case 'large':
      buttonSize = 'px-8 py-4 text-lg';
      break;
    default:
      buttonSize = 'px-6 py-3 text-md';
  }

  // Set button shape based on the shape prop
  switch (shape) {
    case 'rounded-sm':
      buttonShape = 'rounded-sm';
      break;
    case 'rounded-md':
      buttonShape = 'rounded-md';
      break;
    case 'rounded-full':
      buttonShape = 'rounded-full';
      break;
    default:
      buttonShape = 'rounded-md';
  }

  return (
    <button className={`bg-blue-500 text-white ${buttonSize} ${buttonShape} hover:bg-blue-700 transition-all`}>
      {title}
    </button>
  );
};

export default Button;