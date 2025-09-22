import React from 'react';
import type { IconProps } from '../types';

const Energyellipse1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.129 11.598 3.999-5.39c.313-.422.899-.16.899.402v4.172c0 .336.23.609.514.609h1.944c.442 0 .678.618.386 1.011l-3.999 5.39c-.313.422-.899.16-.899-.402v-4.172c0-.336-.23-.609-.514-.609H8.514c-.441 0-.677-.618-.385-1.011Z"/> </svg>
  );
};

export default Energyellipse1;
