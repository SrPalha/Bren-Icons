import React from 'react';
import type { IconProps } from '../types';

const Taco01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 9c-4.32 0-8.01 2.937-9.466 7.072-.528 1.498-.791 2.246-.185 3.087C2.954 20 3.943 20 5.92 20h12.16c1.978 0 2.967 0 3.572-.841.606-.841.343-1.59-.184-3.087C20.01 11.937 16.32 9 12 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21.33 15a3.237 3.237 0 0 0-.24-4.222 3.302 3.302 0 0 1-.898-1.975c-.148-1.677-1.566-3.016-3.344-3.144l-.204-.015a4.019 4.019 0 0 1-2.153-.812c-1.445-1.11-3.537-1.11-4.981 0a4.019 4.019 0 0 1-2.154.812l-.204.015c-1.778.128-3.196 1.467-3.344 3.144a3.302 3.302 0 0 1-.898 1.975A3.237 3.237 0 0 0 2.67 15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.008 14h-.01m-2.99 2h-.01m5.01 1h-.01"/> </svg>
  );
};

export default Taco01;
