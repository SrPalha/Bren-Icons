import React from 'react';
import type { IconProps } from '../types';

const Shoppingbasketadd01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m21.052 11.5.279-1.66c.182-1.086.273-1.628-.019-1.984-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.274C6.1 22 7.274 22 9.622 22H12m2-4h8m-4 4v-8"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 7.5a5.5 5.5 0 1 0-11 0"/> </svg>
  );
};

export default Shoppingbasketadd01;
