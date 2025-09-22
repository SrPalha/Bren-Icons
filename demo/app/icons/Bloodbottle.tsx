import React from 'react';
import type { IconProps } from '../types';

const Bloodbottle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5V2m3 0H9c-2.357 0-3.536 0-4.268.732C4 3.464 4 4.643 4 7v15"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 11.125c0-2.458 0-3.687.578-4.57.25-.382.571-.71.946-.965C10.389 5 11.592 5 14 5s3.611 0 4.476.59c.375.255.696.583.946.966.578.882.578 2.111.578 4.569v1.75c0 2.458 0 3.687-.578 4.57a3.45 3.45 0 0 1-.946.965C17.612 19 16.408 19 14 19s-3.611 0-4.476-.59a3.464 3.464 0 0 1-.946-.965C8 16.562 8 15.333 8 12.875v-1.75Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 10.372c6.857-4.13 5.571 2.633 12 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 22a3 3 0 0 0 3-3"/> </svg>
  );
};

export default Bloodbottle;
