import React from 'react';
import type { IconProps } from '../types';

const Messageincoming01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.71 9.387a8.58 8.58 0 0 1 .25 1.575 19.8 19.8 0 0 1 0 2.522c-.274 4.246-3.606 7.628-7.79 7.906a33.168 33.168 0 0 1-4.34 0 4.871 4.871 0 0 1-1.486-.34c-.512-.21-.768-.316-.899-.3-.13.016-.319.155-.696.434-.666.491-1.505.845-2.75.814-.629-.015-.943-.023-1.084-.263-.141-.24.034-.573.385-1.238.487-.923.795-1.98.328-2.826-.805-1.209-1.488-2.64-1.588-4.187a19.78 19.78 0 0 1 0-2.522c.274-4.246 3.606-7.628 7.79-7.906A32.12 32.12 0 0 1 11 3M8.5 15h7m-7-5H12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 4.5h8m-8 0c0-.7 1.994-2.008 2.5-2.5M14 4.5c0 .7 1.994 2.008 2.5 2.5"/> </svg>
  );
};

export default Messageincoming01;
