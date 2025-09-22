import React from 'react';
import type { IconProps } from '../types';

const Purse: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4 20a2 2 0 1 1 0-4c1.105 0 2 1.333 2 2s-.895 2-2 2Zm4 0c-1.105 0-2-1.5-2-2s.895-2 2-2a2 2 0 1 1 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13 20h3c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14v-1c0-2.828 0-4.243-.879-5.121-.641-.642-1.568-.815-3.121-.862m0 0C17.425 7 16.764 7 16 7h-6m8 .017c0-.948 0-1.422-.157-1.795a2 2 0 0 0-1.065-1.065C16.405 4 15.93 4 14.983 4H10C6.229 4 4.343 4 3.172 5.172 2 6.343 2 7.229 2 11v2"/> </svg>
  );
};

export default Purse;
