import React from 'react';
import { IconProps } from '../types';

const WpsOffice: React.FC<IconProps> = ({ 
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
      <path d="M13.5 14.5L15.5 18.5L22 5.5H15L12 11.5L8.5 18.5L2 5.5H9L10.5 8.5" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default WpsOffice;
