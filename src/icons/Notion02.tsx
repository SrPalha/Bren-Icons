import React from 'react';
import { IconProps } from '../types';

const Notion02: React.FC<IconProps> = ({ 
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
      <path d="M2.5 3.5L16.5 2.5L21.5 5.5M2.5 3.5L6.5 6.5M2.5 3.5V16.5L6.5 21.5M21.5 5.5L6.5 6.5M21.5 5.5V19.5L6.5 21.5M6.5 6.5V21.5" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M12.4704 17.7032L9.5 18.0993M18.5 8.69922L16.2654 8.84819M17.5 8.76589V16.9993L11.7148 9.15157L9.5 9.29922M11 9.19922V17.6993" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Notion02;
