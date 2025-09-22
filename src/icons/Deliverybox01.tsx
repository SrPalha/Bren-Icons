import React from 'react';
import type { IconProps } from '../types';

const Deliverybox01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 13.429V8h20v5.429c0 4.04 0 6.06-1.302 7.316C19.396 22 17.301 22 13.111 22H10.89c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 8 .962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504.756.504 1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"/> </svg>
  );
};

export default Deliverybox01;
