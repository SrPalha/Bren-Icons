import React from 'react';
import type { IconProps } from '../types';

const Deliverytracking01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22h-1.611c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429V8h20v2.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M18 12c-2.21 0-4 1.809-4 4.04 0 1.276.5 2.268 1.5 3.155.705.624 1.559 1.662 2.071 2.503.246.403.594.403.858 0 .538-.825 1.366-1.879 2.071-2.503 1-.887 1.5-1.879 1.5-3.155 0-2.23-1.79-4.04-4-4.04Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 16h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 8 .962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504.756.504 1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h2"/> </svg>
  );
};

export default Deliverytracking01;
