import React from 'react';
import type { IconProps } from '../types';

const Chair03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12h10M7 15h10M7.5 6 6 22M16.5 6 18 22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 2c-1.522 0-3.13.292-4.392.684-.95.294-1.714 1.638-1.596 2.729.044.404.357.587.686.587h10.604c.33 0 .642-.183.686-.587.118-1.091-.646-2.435-1.596-2.73C15.131 2.294 13.522 2 12 2Z"/> </svg>
  );
};

export default Chair03;
