import React from 'react';
import { IconProps } from '../types';

const Arrowleft: React.FC<IconProps> = ({ 
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
      <path d="M4 12H20M4 12C4.00001 13.3176 8.99996 17 8.99996 17M4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Arrowleft;
