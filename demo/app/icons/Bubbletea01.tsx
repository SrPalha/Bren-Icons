import React from 'react';
import type { IconProps } from '../types';

const Bubbletea01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18 9-1.478 9.414c-.25 1.585-.374 2.378-.936 2.85-1.2 1.009-6.039.953-7.172 0-.562-.472-.687-1.265-.936-2.85L6 9"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m6 9 .514-1.286a5.908 5.908 0 0 1 10.972 0L18 9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 9h14m-6 0 3-7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.009 16.5H10m4 1.5h-.009m-.98-4h-.009"/> </svg>
  );
};

export default Bubbletea01;
