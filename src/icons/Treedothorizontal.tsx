import React from 'react';
import { IconProps } from '../types';

const Treedothorizontal: React.FC<IconProps> = ({ 
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
      <path d="M11.9959 12H12.0049M17.9998 12H18.0088M5.99982 12H6.0088" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default Treedothorizontal;
