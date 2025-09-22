import React from 'react';
import type { IconProps } from '../types';

const Discoversquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.401 8.298 2.92-.973c.886-.296 1.33-.443 1.564-.21.233.234.086.677-.21 1.564l-.973 2.92c-.503 1.51-.755 2.265-1.297 2.806-.541.542-1.296.794-2.806 1.297l-2.92.973c-.887.296-1.33.444-1.564.21-.233-.234-.086-.678.21-1.564l.973-2.92c.503-1.51.755-2.265 1.297-2.806.541-.542 1.296-.794 2.806-1.297Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 12-.006.006"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/> </svg>
  );
};

export default Discoversquare;
