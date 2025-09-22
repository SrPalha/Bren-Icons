import React from 'react';
import type { IconProps } from '../types';

const Handpointingdown1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.834 2.001v.948a3 3 0 0 1-.595 1.792L4.58 9.643c-.422.566-.759 1.267-.48 1.915.45 1.049 1.723 1.73 3.28.158l1.598-1.71V20.43c.056 2.044 3.345 2.145 3.486 0v-5.94c1.48.191 8.454-.852 7.437-5.272l-.144-.634c-.205-.918-.813-2.556-1.484-3.513-.698-.997-.451-2.626-.451-3.07"/> </svg>
  );
};

export default Handpointingdown1;
