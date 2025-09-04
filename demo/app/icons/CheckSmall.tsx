import React from 'react';
import { IconProps } from '../types';

const CheckSmall: React.FC<IconProps> = ({ 
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
      <path d="M6.75 13.5L9.375 16.125L17.25 7.875" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CheckSmall;
