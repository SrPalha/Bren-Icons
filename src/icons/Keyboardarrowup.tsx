import React from 'react';
import { IconProps } from '../types';

const Keyboardarrowup: React.FC<IconProps> = ({ 
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
      <g clipPath="url(#clip0_93_534)">
<path d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_93_534">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Keyboardarrowup;
