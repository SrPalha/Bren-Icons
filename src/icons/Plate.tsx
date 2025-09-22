import React from 'react';
import type { IconProps } from '../types';

const Plate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.43 13c.36.517.57 1.147.57 1.828C19 16.58 17.602 18 15.877 18c-.304 0-.599-.044-.877-.127M18.98 10c1.805 1.019 3.02 2.924 3.02 5.106C22 18.361 19.298 21 15.965 21A6.096 6.096 0 0 1 12 19.55"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9 17A7 7 0 1 0 9 3a7 7 0 0 0 0 14Z"/> </svg>
  );
};

export default Plate;
