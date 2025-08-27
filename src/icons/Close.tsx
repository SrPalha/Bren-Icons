import React from 'react';
import { IconProps } from '../types';

const Close: React.FC<IconProps> = ({ 
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
      <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Close;
