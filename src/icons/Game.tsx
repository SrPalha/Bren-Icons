import React from 'react';
import type { IconProps } from '../types';

const Game: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 14.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 7 6.212 7 9.5 7h5c3.288 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C22 9.57 22 11.212 22 14.5c0 3.288 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C19.43 22 17.788 22 14.5 22h-5c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 19.43 2 17.788 2 14.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7V5a1 1 0 0 1 1-1 1 1 0 0 0 1-1V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m10 16-1.5-1.5m0 0L7 13m1.5 1.5L7 16m1.5-1.5L10 13"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 15.5v-2"/> </svg>
  );
};

export default Game;
