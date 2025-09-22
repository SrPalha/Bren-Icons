import React from 'react';
import type { IconProps } from '../types';

const Yogaball: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.853 4.717C18.038 9.422 13.937 13 9 13a9.965 9.965 0 0 1-6.854-2.717m19.664-.233C19.693 14.738 14.977 18 9.5 18a13.44 13.44 0 0 1-6.52-1.676m.674-9.836a7.002 7.002 0 0 0 11.202-4.074"/> </svg>
  );
};

export default Yogaball;
