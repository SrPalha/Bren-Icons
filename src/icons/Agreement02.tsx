import React from 'react';
import type { IconProps } from '../types';

const Agreement02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m22 3.5-3.41 2.233a4.208 4.208 0 0 1-2.76.66l-1.303-.143a4.198 4.198 0 0 0-3.25 1.035L8.76 9.533a2.252 2.252 0 0 0-.08 3.3c.802.787 2.067.89 2.99.242l1.665-1.168c.234-.163.526-.225.807-.17l.333.066a4.208 4.208 0 0 0 3.304-.736l.59-.435"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.142 11.737C14.762 12.992 15.6 15.9 18 17.5c-1.167 1.333-4.4 3-8 3-4.5 0-8-5-8-5m10-8.732c-.787-.484-2.98-1.185-5.968-1.261a2.106 2.106 0 0 1-.993-.27L2 3.5m16 14s2.5-.5 4-2"/> </svg>
  );
};

export default Agreement02;
