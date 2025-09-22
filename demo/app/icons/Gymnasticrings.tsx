import React from 'react';
import type { IconProps } from '../types';

const Gymnasticrings: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 11V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 9.303A5.51 5.51 0 0 0 7.513 7 5.507 5.507 0 0 0 2 12.5c0 3.244 2.928 5.829 6.14 5.466"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 7V2"/> </svg>
  );
};

export default Gymnasticrings;
