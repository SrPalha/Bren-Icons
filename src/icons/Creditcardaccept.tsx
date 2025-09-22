import React from 'react';
import type { IconProps } from '../types';

const Creditcardaccept: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 20h-.5c-3.759 0-5.638 0-6.893-.99a4.377 4.377 0 0 1-.554-.523C2 17.307 2 15.537 2 12s0-5.306 1.053-6.487c.168-.189.354-.364.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99.201.16.387.334.555.523C21.896 6.577 21.99 8.118 22 11"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 9h20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 18s1 0 2 2c0 0 3.177-5 6-6"/> </svg>
  );
};

export default Creditcardaccept;
