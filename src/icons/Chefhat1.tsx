import React from 'react';
import type { IconProps } from '../types';

const Chefhat1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M18 13a4 4 0 1 0-2.225-7.325 4.002 4.002 0 0 0-7.55 0A4 4 0 1 0 6 13v4.5c1.599-.622 3.7-1 6-1s4.401.378 6 1V13Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 13a4 4 0 1 0-2.225-7.325m0 0a4.002 4.002 0 0 0-7.55 0m7.55 0A3.994 3.994 0 0 1 15.874 8M6 13a4 4 0 1 1 2.225-7.325m0 0c.507.34.933.794 1.24 1.325"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 17.5c1.599-.622 3.7-1 6-1s4.401.378 6 1M5 21c1.866-.622 4.316-1 7-1s5.134.378 7 1m-1-9v8M6 12v8"/> </svg>
  );
};

export default Chefhat1;
