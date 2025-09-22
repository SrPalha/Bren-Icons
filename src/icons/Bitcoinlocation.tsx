import React from 'react';
import type { IconProps } from '../types';

const Bitcoinlocation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 18.268c1.245.396 2 .916 2 1.485C20 20.994 16.418 22 12 22s-8-1.006-8-2.247c0-.57.755-1.09 2-1.485"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 11.667V6.333m1.562 0V5m0 8v-1.333M10.437 9h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.347 18.462A1.95 1.95 0 0 1 12 19a1.95 1.95 0 0 1-1.347-.538c-3.31-3.18-7.744-6.732-5.581-11.89C6.24 3.785 9.048 2 12 2s5.759 1.784 6.928 4.573c2.16 5.15-2.264 8.72-5.581 11.889Z"/> </svg>
  );
};

export default Bitcoinlocation;
