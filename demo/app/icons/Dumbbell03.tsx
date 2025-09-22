import React from 'react';
import type { IconProps } from '../types';

const Dumbbell03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6.5h1.528c.31 0 .616-.075.899-.202 2.382-1.064 4.764-1.064 7.146 0 .284.127.589.202.9.202H18m-12 11h1.528c.31 0 .616-.076.899-.202 2.382-1.064 4.764-1.064 7.146 0 .284.127.589.202.9.202H18M6 3v7m12-7v7M6 14v7m12-7v7M3.5 6.5H2m18.5 0H22m-18.5 11H2m18.5 0H22M3.5 4.5v4m17-4v4m-17 7v4m17-4v4"/> </svg>
  );
};

export default Dumbbell03;
