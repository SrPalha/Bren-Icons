import React from 'react';
import type { IconProps } from '../types';

const Deliveryview01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 13.5V8H2v5.429c0 4.04 0 6.06 1.302 7.316C4.508 21.908 6.396 21.993 10 22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 18.5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.772 18.023c.152.213.228.32.228.477 0 .158-.076.264-.228.477C21.089 19.935 19.345 22 17 22s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477 0-.158.076-.264.228-.477C12.911 17.065 14.655 15 17 15s4.089 2.065 4.772 3.023Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 8 .962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504.756.504 1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"/> </svg>
  );
};

export default Deliveryview01;
