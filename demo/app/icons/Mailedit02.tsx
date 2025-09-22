import React from 'react';
import type { IconProps } from '../types';

const Mailedit02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.002 7.75 2.942 1.74c1.716 1.014 2.401 1.014 4.116 0l2.942-1.74"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.997 10.75v-.972c-.065-3.067-.098-4.6-1.23-5.737-1.131-1.136-2.706-1.175-5.856-1.254a115.176 115.176 0 0 0-5.806 0c-3.15.079-4.725.118-5.857 1.254-1.132 1.136-1.165 2.67-1.23 5.737a69.116 69.116 0 0 0 0 2.953c.065 3.068.098 4.601 1.23 5.737 1.132 1.137 2.707 1.176 5.857 1.255.468.012 1.43.02 1.897.027m9.853-6.06.692.692a1.5 1.5 0 0 1 0 2.121l-3.628 3.696a2 2 0 0 1-1.047.551l-2.248.488a.5.5 0 0 1-.595-.593l.479-2.235a2 2 0 0 1 .552-1.047l3.673-3.674a1.5 1.5 0 0 1 2.122 0Z"/> </svg>
  );
};

export default Mailedit02;
