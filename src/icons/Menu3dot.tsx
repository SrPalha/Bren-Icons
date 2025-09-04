import React from 'react';
import { IconProps } from '../types';

const Menu3dot: React.FC<IconProps> = ({ 
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
      <path d="M11.992 12H12.001M11.9842 18H11.9932M11.9998 6H12.0088" stroke="currentColor" strokeWidth="2.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Menu3dot;
