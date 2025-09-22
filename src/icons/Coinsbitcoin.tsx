import React from 'react';
import type { IconProps } from '../types';

const Coinsbitcoin: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.1 11a7.179 7.179 0 0 0 9.9 9.9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 10h3.5M12 10V6.5h2M12 10v3.5h2m1.5-3.5c.828 0 1.5-.784 1.5-1.75s-.672-1.75-1.5-1.75H14m1.5 3.5c.828 0 1.5.784 1.5 1.75s-.672 1.75-1.5 1.75H14m0-7v-1m0 8v1"/> </svg>
  );
};

export default Coinsbitcoin;
