import React from 'react';
import type { IconProps } from '../types';

const Energyrectangle1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.5 12c0-4.23 0-6.345 1.198-7.747.17-.2.356-.385.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198c.2.17.385.356.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747c-.17.2-.356.385-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198a4.93 4.93 0 0 1-.555-.555C2.5 18.345 2.5 16.23 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.129 11.598 3.999-5.39c.313-.422.899-.16.899.402v4.172c0 .336.23.609.514.609h1.944c.442 0 .678.618.386 1.011l-3.999 5.39c-.313.422-.899.16-.899-.402v-4.172c0-.336-.23-.609-.514-.609H8.514c-.441 0-.677-.618-.385-1.011Z"/> </svg>
  );
};

export default Energyrectangle1;
