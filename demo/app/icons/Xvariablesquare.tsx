import React from 'react';
import type { IconProps } from '../types';

const Xvariablesquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 9c-3.184 0-4.816 6.02-8 6.02"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.54 15.02c-.809 0-1.253 0-1.594-.12a1.822 1.822 0 0 1-.52-.284c-.265-.21-.41-.509-.7-1.108l-1.451-2.995c-.29-.6-.436-.9-.7-1.108a1.823 1.823 0 0 0-.52-.284C9.712 9 9.268 9 8.46 9"/> </svg>
  );
};

export default Xvariablesquare;
