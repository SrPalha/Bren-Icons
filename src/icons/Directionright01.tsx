import React from 'react';
import type { IconProps } from '../types';

const Directionright01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C15.907 4 15.377 4 14.318 4H9v7h5.319c1.059 0 1.589 0 2.052-.22.463-.22.803-.633 1.48-1.46l.27-.326C18.706 8.28 19 7.922 19 7.5c0-.422-.293-.78-.88-1.494l-.268-.327ZM9 3v18m-4 0h8"/> </svg>
  );
};

export default Directionright01;
