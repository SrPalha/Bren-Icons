import React from 'react';
import type { IconProps } from '../types';

const Tabletpen: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 12c0-4.243 0-6.364 1.318-7.682C4.636 3 6.758 3 11 3h2c4.243 0 6.364 0 7.682 1.318C22 5.636 22 7.758 22 12c0 4.243 0 6.364-1.318 7.682C19.364 21 17.242 21 13 21h-2c-4.243 0-6.364 0-7.682-1.318C2 18.364 2 16.242 2 12Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 3v18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.006 8.884.608.606a1.309 1.309 0 0 1 0 1.856l-3.187 3.234a1.76 1.76 0 0 1-.92.483l-1.974.427a.438.438 0 0 1-.523-.52l.42-1.955c.066-.347.235-.667.485-.916l3.227-3.215a1.321 1.321 0 0 1 1.864 0Z"/> </svg>
  );
};

export default Tabletpen;
