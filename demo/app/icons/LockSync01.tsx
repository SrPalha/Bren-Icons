import React from 'react';
import type { IconProps } from '../types';

const Locksync01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.543 10.5 22 11c-.503-5.053-4.777-9-9.975-9C6.488 2 2 6.477 2 12s4.488 10 10.025 10c4.11 0 7.643-2.468 9.19-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10.337 10.88c-1.08 0-1.62.78-1.74 1.26-.12.48-.12 2.22-.048 2.94.24.9.84 1.273 1.428 1.393.54.048 2.82.03 3.48.03.96.018 1.68-.342 1.98-1.422.06-.36.12-2.34-.03-2.94-.318-.96-1.11-1.26-1.71-1.26h-3.36Zm-.087-.421c0-.06.008-.406.01-.84 0-.398-.034-.78.156-1.13.71-1.414 2.75-1.27 3.254.17.087.237.092.612.09.96-.003.443.006.84.006.84"/> </svg>
  );
};

export default Locksync01;
