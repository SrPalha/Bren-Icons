import React from 'react';
import { IconProps } from '../types';

const Add: React.FC<IconProps> = ({ 
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
      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Add;
