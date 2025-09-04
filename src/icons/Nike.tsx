import React from 'react';
import { IconProps } from '../types';

const Nike: React.FC<IconProps> = ({ 
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
      <path d="M7.50294 16.2667C-0.781019 19.7417 1.80815 9.89584 5.43252 7C4.45502 9.66667 3.97993 14.0077 10.5 11.5L22 7C22 7 16.7212 12.3998 7.50294 16.2667Z" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Nike;
