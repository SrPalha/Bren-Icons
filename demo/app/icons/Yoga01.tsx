import React from 'react';
import type { IconProps } from '../types';

const Yoga01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.092 16c-.31.682-1.022.986-1.653 1.316l-3.646 1.907C2.328 19.99 3.059 22 4.63 22c3.492 0 6.254-1.694 9.41-3 .795-.329 1.18-.259 1.96.091"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19.091c.78-.35 1.165-.42 1.96-.091 3.156 1.306 5.918 3 9.41 3 1.57 0 2.302-2.01.837-2.777l-3.646-1.907c-.631-.33-1.344-.634-1.653-1.316"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 8a6 6 0 0 0-6 6 6 6 0 0 0 6-6Zm0 0a6 6 0 0 1 6 6 6 6 0 0 1-6-6Z"/> </svg>
  );
};

export default Yoga01;
