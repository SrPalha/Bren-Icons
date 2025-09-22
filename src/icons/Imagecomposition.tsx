import React from 'react';
import type { IconProps } from '../types';

const Imagecomposition: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.075 3.884c3.212.95 6.638.95 9.85 0 2.592-.767 3.888-1.15 4.482-.675C22 3.685 22 4.908 22 7.353v9.294c0 2.445 0 3.668-.593 4.144-.594.476-1.89.092-4.482-.675a17.362 17.362 0 0 0-9.85 0c-2.592.767-3.888 1.15-4.482.675C2 20.315 2 19.092 2 16.647V7.353c0-2.445 0-3.668.593-4.144.594-.476 1.89-.092 4.482.675Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 20c3.947-4.158 8.382-9.671 15-5.536"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/> </svg>
  );
};

export default Imagecomposition;
