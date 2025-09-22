import React from 'react';
import type { IconProps } from '../types';

const Cardiogram01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 21.5c-3.75 0-5.625 0-6.939-1.008a5.146 5.146 0 0 1-1.106-1.168C2 17.937 2 15.958 2 12c0-3.958 0-5.937.955-7.324A5.148 5.148 0 0 1 4.06 3.508C5.375 2.5 7.251 2.5 11 2.5h2c3.75 0 5.625 0 6.939 1.008.424.325.798.72 1.106 1.168C22 6.063 22 8.042 22 12c0 3.958 0 5.937-.955 7.324a5.146 5.146 0 0 1-1.106 1.168C18.625 21.5 16.749 21.5 13 21.5h-2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 15h19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.009 18H7m4 0h-.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 10.2c-.455 0-.934.028-1.343-.223-.156-.096-.26-.228-.466-.493L13.25 7l-2.5 4-1.807-1.734c-.256-.246-.506-.496-.845-.594C7.852 8.6 7.568 8.6 7 8.6"/> </svg>
  );
};

export default Cardiogram01;
