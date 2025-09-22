import React from 'react';
import type { IconProps } from '../types';

const Calling: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M3.778 11.942C2.83 10.29 2.372 8.94 2.096 7.572c-.408-2.024.526-4.001 2.073-5.263.654-.533 1.404-.35 1.791.343l.873 1.567c.692 1.242 1.038 1.862.97 2.52-.069.659-.536 1.195-1.469 2.267l-2.556 2.936Zm0 0c1.919 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.002 1.406 4.37 1.682 2.024.408 4.001-.526 5.262-2.073.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97-.659.069-1.195.536-2.267 1.469l-2.936 2.556Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 6.832A5.996 5.996 0 0 1 17.168 10m-2.514-8A10.776 10.776 0 0 1 22 9.346"/> </svg>
  );
};

export default Calling;
