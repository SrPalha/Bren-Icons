import React from 'react';
import type { IconProps } from '../types';

const Smartphone03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.5 9c0-3.3 0-4.95.952-5.975C7.404 2 8.936 2 12 2s4.596 0 5.548 1.025S18.5 5.7 18.5 9v6c0 3.3 0 4.95-.952 5.975C16.596 22 15.064 22 12 22s-4.596 0-5.548-1.025S5.5 18.3 5.5 15V9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5h2m9 3.5s-1 .346-1 1.313c0 .966 1 1.22 1 2.187 0 .966-1 1.221-1 2.188 0 .966 1 1.312 1 1.312m-20-7s1 .346 1 1.313c0 .966-1 1.22-1 2.187 0 .966 1 1.221 1 2.188 0 .966-1 1.312-1 1.312"/> </svg>
  );
};

export default Smartphone03;
