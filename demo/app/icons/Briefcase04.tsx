import React from 'react';
import type { IconProps } from '../types';

const Briefcase04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.572 8.224c-.06-.494-.09-.74-.061-.942a1.486 1.486 0 0 1 1.05-1.228C3.753 6 3.995 6 4.477 6h15.048c.482 0 .723 0 .914.054.555.159.967.64 1.051 1.228.029.202-.001.448-.061.942-.16 1.314-.239 1.97-.434 2.514-.565 1.571-1.856 2.747-3.438 3.13-.547.132-1.19.132-2.473.132H8.917c-1.284 0-1.926 0-2.473-.132-1.582-.383-2.873-1.559-3.438-3.13-.195-.543-.275-1.2-.434-2.514Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.5 12v3.02c0 3.055 0 4.582 1.106 5.531 1.107.949 2.888.949 6.45.949h1.888c3.562 0 5.343 0 6.45-.949 1.106-.949 1.106-2.476 1.106-5.531V12"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m16 6-.088-.31c-.44-1.54-.66-2.31-1.184-2.75-.524-.44-1.22-.44-2.611-.44h-.234c-1.391 0-2.087 0-2.61.44-.525.44-.745 1.21-1.185 2.75L8 6"/> </svg>
  );
};

export default Briefcase04;
