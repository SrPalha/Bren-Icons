import React from 'react';
import type { IconProps } from '../types';

const Xvariablecircle: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8.99c-3.184 0-4.816 6.021-8 6.021"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.54 15.011c-.809 0-1.253 0-1.594-.12a1.82 1.82 0 0 1-.52-.285c-.265-.209-.41-.508-.7-1.108l-1.451-2.995c-.29-.6-.436-.899-.7-1.108a1.823 1.823 0 0 0-.52-.284c-.342-.12-.786-.12-1.595-.12"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/> </svg>
  );
};

export default Xvariablecircle;
