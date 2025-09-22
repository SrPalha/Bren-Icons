import React from 'react';
import type { IconProps } from '../types';

const Barcode02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 4v16M5 4v16M15 4v16m-7-2V6c0-.943 0-1.414.293-1.707C8.586 4 9.057 4 10 4c.943 0 1.414 0 1.707.293C12 4.586 12 5.057 12 6v12c0 .943 0 1.414-.293 1.707C11.414 20 10.943 20 10 20c-.943 0-1.414 0-1.707-.293C8 19.414 8 18.943 8 18Zm10 0V6c0-.943 0-1.414.293-1.707C18.586 4 19.057 4 20 4c.943 0 1.414 0 1.707.293C22 4.586 22 5.057 22 6v12c0 .943 0 1.414-.293 1.707C21.414 20 20.943 20 20 20c-.943 0-1.414 0-1.707-.293C18 19.414 18 18.943 18 18Z"/> </svg>
  );
};

export default Barcode02;
