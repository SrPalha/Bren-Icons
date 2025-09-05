import React from 'react';
import { IconProps } from '../types';

const Keyboardarrowdown: React.FC<IconProps> = ({ 
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
      <g clip-path="url(#clip0_93_536)">
<path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_93_536">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Keyboardarrowdown;
