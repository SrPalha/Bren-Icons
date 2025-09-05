import React from 'react';
import { IconProps } from '../types';

const Sun: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M9 12C9 10.3431 10.3431 9 12 9M9 12C9 13.6569 10.3431 15 12 15M9 12H4M12 9C13.6569 9 15 10.3431 15 12M12 9V4M15 12C15 13.6569 13.6569 15 12 15M15 12H20M12 15V20M14.5976 10.5L18.9277 8M9.40145 13.5L5.07133 16M13.5 14.5976L16 18.9277M10.5 9.40145L8 5.07133M13.5 9.40239L16 5.07227M10.5 14.5985L8 18.9287M14.5976 13.5L18.9277 16M9.40146 10.5L5.07133 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Sun;
