import React from 'react';
import { IconProps } from '../types';

const Chrome: React.FC<IconProps> = ({ 
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1B1C1B" strokeWidth="1.5"/>
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#1B1C1B" strokeWidth="1.5"/>
<path d="M8.53448 14L4.0332 6" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M11.5 21.5L15.5 14" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M12 8H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Chrome;
