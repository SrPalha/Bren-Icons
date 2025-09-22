import React from 'react';
import type { IconProps } from '../types';

const Creditcardadd: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 20h-2c-3.759 0-5.638 0-6.893-.99a4.377 4.377 0 0 1-.554-.523C2 17.307 2 15.537 2 12s0-5.306 1.053-6.487c.168-.189.354-.364.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99.201.16.387.334.555.523.892 1 1.029 2.423 1.05 4.987"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.5 20v-7M15 16.5h7"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 9h20"/> </svg>
  );
};

export default Creditcardadd;
