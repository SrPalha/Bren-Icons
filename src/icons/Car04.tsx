import React from 'react';
import type { IconProps } from '../types';

const Car04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.98 13.289c-.72 1.302-.922 2.914-.979 3.713a.47.47 0 0 0 .479.498h1.502M2.98 13.289c0-3.145.915-6.94 2.746-8.578a.879.879 0 0 1 .59-.211h4.795c.58 0 1.157.117 1.643.432 1.199.778 3.01 2.348 4.549 4.757.127.2.317.35.54.431.885.322 1.871.767 2.502 1.064.426.2.766.55.927.992.444 1.217.695 2.575.727 4.823a.495.495 0 0 1-.497.501H20M2.98 13.289c.36-.652.851-1.226 1.519-1.582M15.996 17.5h-8.01"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M8 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 10C14.5 9 11 8.5 7 9c0-2 1-4 1.5-4.5M8 11h1"/> </svg>
  );
};

export default Car04;
