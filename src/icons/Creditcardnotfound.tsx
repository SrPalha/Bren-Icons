import React from 'react';
import type { IconProps } from '../types';

const Creditcardnotfound: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.463 4.5c-.318.128-.6.289-.856.49-.2.16-.386.334-.554.523C2 6.693 2 8.463 2 12s0 5.306 1.053 6.487c.168.189.354.364.554.522C4.862 20 6.741 20 10.5 20h3c2.992 0 4.757 0 6-.5M8 4.016C8.728 4 9.554 4 10.5 4h3c3.759 0 5.638 0 6.892.99.201.16.387.334.555.523C22 6.693 22 8.463 22 12c0 2.313 0 3.87-.294 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 2 20 20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 9H9m12.5 0h-8"/> </svg>
  );
};

export default Creditcardnotfound;
