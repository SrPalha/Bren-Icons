import React from 'react';
import type { IconProps } from '../types';

const Databaseimport: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 10.842c.602.18 1.274.33 2 .44M12 15c-4.418 0-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-4.418 0-8-1.343-8-3V5m16 0v7m0 7.326-1.174 1.487C18.2 21.604 17.888 22 17.5 22c-.388 0-.7-.396-1.326-1.187L15 19.327m2.5 2.586V14"/> </svg>
  );
};

export default Databaseimport;
