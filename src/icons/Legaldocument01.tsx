import React from 'react';
import type { IconProps } from '../types';

const Legaldocument01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.333 10.667c1.055 1.055 2.445 2.127 2.445 2.127l1.904-1.905s-1.072-1.39-2.126-2.445C12.5 7.39 11.11 6.317 11.11 6.317L9.206 8.222s1.072 1.39 2.127 2.445Zm0 0L8 14m8-3.429-2.54 2.54M11.43 6 8.89 8.54"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 18h8"/> </svg>
  );
};

export default Legaldocument01;
