import React from 'react';
import type { IconProps } from '../types';

const Lamp02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M19.924 12.102c.464-.664-1.336-2.896-1.85-3.29-.469-.36-1.074-.538-2.284-.894C14.58 7.562 13.287 7 12 7s-2.581.562-3.79.918c-1.21.356-1.815.535-2.284.894-.514.394-2.314 2.627-1.85 3.29.888 1.271 15.065 1.121 15.848 0Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M9 13a3 3 0 1 0 6 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20v2m3-3 2 1.5M9 19l-2 1.5M12 7V2"/> </svg>
  );
};

export default Lamp02;
