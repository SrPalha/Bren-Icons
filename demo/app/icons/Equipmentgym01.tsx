import React from 'react';
import type { IconProps } from '../types';

const Equipmentgym01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 11.5h8.5c1.393 0 1.75.41 1.75 1.75 0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 15 6 14.59 6 13.25c0-1.393.41-1.75 1.75-1.75Zm0 3.5h8.5c1.393 0 1.75.41 1.75 1.75 0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 18.5 6 18.09 6 16.75 6 15.357 6.41 15 7.75 15Zm0 3.5h8.5c1.393 0 1.75.41 1.75 1.75 0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 22 6 21.59 6 20.25c0-1.393.41-1.75 1.75-1.75ZM22 7.5l-.799-.999c-.59-.737-.885-1.106-1.296-1.303-.344-.166-.732-.193-1.405-.197M2 7.501l.799-1c.59-.737.885-1.106 1.296-1.303.344-.166.732-.193 1.405-.197m10.5 0H8M16 2v9.5M8 2v9.5"/> </svg>
  );
};

export default Equipmentgym01;
