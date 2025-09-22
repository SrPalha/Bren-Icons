import React from 'react';
import type { IconProps } from '../types';

const Chair01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 15-2 7m10-7 2 7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 11c-1.522 0-3.13.293-4.392.684-.95.294-1.714 1.638-1.596 2.729.044.404.357.587.686.587h10.604c.33 0 .642-.183.686-.587.118-1.091-.646-2.435-1.596-2.73C15.131 11.294 13.522 11 12 11Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 12 .64-6.398c.171-1.712.257-2.568.828-3.085C9.039 2 9.9 2 11.62 2h.76c1.72 0 2.58 0 3.152.517.571.517.657 1.373.828 3.085L17 12"/> </svg>
  );
};

export default Chair01;
