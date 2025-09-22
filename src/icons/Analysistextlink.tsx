import React from 'react';
import type { IconProps } from '../types';

const Analysistextlink: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025C3 18.95 3 17.3 3 14V3m4 1h1M7 7h4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 20c1.07-1.947 2.523-6.981 5.306-6.981 1.924 0 2.422 2.453 4.308 2.453C17.857 15.472 17.387 10 21 10"/> </svg>
  );
};

export default Analysistextlink;
