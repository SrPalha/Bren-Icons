import React from 'react';
import type { IconProps } from '../types';

const Money02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.549 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12c0-3.537 0-5.306 1.053-6.487.168-.189.354-.364.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99.201.16.387.334.555.523C22 6.693 22 8.463 22 12s0 5.306-1.053 6.487a4.376 4.376 0 0 1-.555.522C19.138 20 17.26 20 13.5 20h-3c-3.759 0-5.638 0-6.893-.99a4.377 4.377 0 0 1-.554-.523C2 17.307 2 15.537 2 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.51 12h-.01m-13 0h-.01"/> </svg>
  );
};

export default Money02;
