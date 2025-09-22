import React from 'react';
import type { IconProps } from '../types';

const Cheesecake021: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M10 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 5.001c-3.314 0-6-1.078-6-2.407V17c0 1.105 2.686 2 6 2s6-.895 6-2V8.594C18 9.924 15.314 11 12 11Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.5 7c.933.424 1.5.982 1.5 1.592C18 9.922 15.314 11 12 11S6 9.922 6 8.592c0-.61.566-1.168 1.5-1.592"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6 13c0 1.105 2.686 2 6 2s6-.895 6-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 9v8c0 1.105-2.686 2-6 2s-6-.895-6-2V9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.5 16c.95.601 1.5 1.31 1.5 2.07C22 20.24 17.523 22 12 22S2 20.24 2 18.07c0-.76.55-1.469 1.5-2.07"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0c0-.5.4-1.6 2-2"/> </svg>
  );
};

export default Cheesecake021;
