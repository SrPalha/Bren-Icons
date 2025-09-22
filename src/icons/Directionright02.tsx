import React from 'react';
import type { IconProps } from '../types';

const Directionright02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C14.907 4 14.377 4 13.318 4H8c-.943 0-1.414 0-1.707.293C6 4.586 6 5.057 6 6v3c0 .943 0 1.414.293 1.707C6.586 11 7.057 11 8 11h5.319c1.059 0 1.589 0 2.052-.22.463-.22.803-.633 1.48-1.46l.27-.326C17.706 8.28 18 7.922 18 7.5c0-.422-.293-.78-.88-1.494l-.268-.327ZM10 11v10m0-18v1M6 21h8"/> </svg>
  );
};

export default Directionright02;
