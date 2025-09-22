import React from 'react';
import type { IconProps } from '../types';

const Aiphone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 15c0 3.3 0 4.95-.952 5.975C15.096 22 13.564 22 10.5 22s-4.596 0-5.548-1.025S4 18.3 4 15V9c0-3.3 0-4.95.952-5.976.85-.916 2.164-1.014 4.62-1.024"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 4h-2c-.943 0-1.414 0-1.707.293C12 4.586 12 5.057 12 6v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293C18 9.414 18 8.943 18 8V6c0-.943 0-1.414-.293-1.707C17.414 4 16.943 4 16 4Zm-2.5 6v2m3-2v2m-3-10v2m3-2v2M12 5.5h-2m2 3h-2m10-3h-2m2 3h-2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.49 19h.009"/> </svg>
  );
};

export default Aiphone01;
