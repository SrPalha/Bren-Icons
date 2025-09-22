import React from 'react';
import type { IconProps } from '../types';

const Aicomputer: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.014 2c-3.778 0-5.667 0-6.84 1.172C2 4.343 2 6.229 2 10c0 3.771 0 5.657 1.174 6.828C4.347 18 6.236 18 10.014 18h4.007c3.778 0 5.667 0 6.84-1.172.81-.808 1.061-1.956 1.139-3.828"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 22h8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 15h2m5-11h-2c-.943 0-1.414 0-1.707.293C14 4.586 14 5.057 14 6v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293C20 9.414 20 8.943 20 8V6c0-.943 0-1.414-.293-1.707C19.414 4 18.943 4 18 4Zm-2.5 6v2m3-2v2m-3-10v2m3-2v2M14 5.5h-2m2 3h-2m10-3h-2m2 3h-2"/> </svg>
  );
};

export default Aicomputer;
