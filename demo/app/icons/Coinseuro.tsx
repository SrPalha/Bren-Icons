import React from 'react';
import type { IconProps } from '../types';

const Coinseuro: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.157 11A7.111 7.111 0 0 0 13 20.843"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 12.492c-.478.904-1.349 1.508-2.343 1.508-1.51 0-2.734-1.393-2.734-3.111V9.11c0-1.717 1.224-3.11 2.734-3.11.994 0 1.865.604 2.343 1.508M11 10h3.923"/> </svg>
  );
};

export default Coinseuro;
