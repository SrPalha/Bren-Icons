import React from 'react';
import type { IconProps } from '../types';

const Searching: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 10c-.49-.037-.83-.12-1.111-.309a2.004 2.004 0 0 1-.552-.554C2 8.63 2 7.925 2 6.515s0-2.116.337-2.622c.146-.22.333-.408.552-.555C3.393 3 4.096 3 5.5 3h13c1.404 0 2.107 0 2.611.338.218.147.406.335.552.555C22 4.399 22 5.104 22 6.515c0 1.288 0 1.987-.256 2.485"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.2 18.2 21 21m-1.4-7.7a6.3 6.3 0 1 0-12.6 0 6.3 6.3 0 0 0 12.6 0Z"/> </svg>
  );
};

export default Searching;
