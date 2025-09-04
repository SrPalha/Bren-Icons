import React from 'react';
import { IconProps } from '../types';

const Loom: React.FC<IconProps> = ({ 
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
      <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke="#1B1C1B" strokeWidth="1.5"/>
<path d="M12 9V4M12 15V20" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M15 12H20M9 12H4" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M14.5976 10.5L18.9277 8M9.40141 13.5L5.07129 16" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M13.5 14.5985L16 18.9286M10.5 9.40239L8 5.07227" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M13.5 9.40239L16 5.07227M10.5 14.5985L8 18.9287" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M14.5976 13.5L18.9277 16M9.40142 10.5L5.07129 8" stroke="#1B1C1B" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Loom;
