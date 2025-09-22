import React from 'react';
import type { IconProps } from '../types';

const Rubelhizb: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.5 6.643c0-1.01 0-1.515.314-1.83.314-.313.819-.313 1.829-.313h10.714c1.01 0 1.515 0 1.83.314.313.314.313.819.313 1.829v10.714c0 1.01 0 1.515-.314 1.83-.314.313-.819.313-1.829.313H6.643c-1.01 0-1.515 0-1.83-.314-.313-.314-.313-.819-.313-1.829V6.643Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.509 3.054C11.212 2.351 11.563 2 12 2c.437 0 .788.351 1.491 1.054l7.455 7.455C21.649 11.212 22 11.563 22 12c0 .437-.351.788-1.054 1.491l-7.455 7.455C12.788 21.649 12.437 22 12 22c-.437 0-.788-.351-1.491-1.054L3.054 13.49C2.351 12.788 2 12.437 2 12c0-.437.351-.788 1.054-1.491l7.455-7.455Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/> </svg>
  );
};

export default Rubelhizb;
