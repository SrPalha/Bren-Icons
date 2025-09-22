import React from 'react';
import type { IconProps } from '../types';

const Computerprogramming01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10c0 3.28 0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10c0-3.28 0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 8 1.227 1.057c.515.445.773.667.773.943 0 .276-.258.498-.773.943L16 12M8 8 6.773 9.057C6.258 9.502 6 9.724 6 10c0 .276.258.498.773.943L8 12m5-5-2 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m14.656 22-.42-.419a3.102 3.102 0 0 1-.58-3.581M9 22l.42-.419A3.102 3.102 0 0 0 10 18m-3 4h10"/> </svg>
  );
};

export default Computerprogramming01;
