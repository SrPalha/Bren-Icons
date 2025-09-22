import React from 'react';
import { IconProps } from '../types';

const DotsSixVertical: React.FC<IconProps> = ({ 
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
      <g clipPath="url(#clip0_93_542)">
<path d="M8 6H8.00635M8 12H8.00635M8 18H8.00635M15.9937 6H16M15.9937 12H16M15.9937 18H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_93_542">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
};

export default DotsSixVertical;
