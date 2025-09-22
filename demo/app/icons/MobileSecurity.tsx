import React from 'react';
import type { IconProps } from '../types';

const Mobilesecurity: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 2C7.7 2 6.05 2 5.024 3.025 3.999 4.05 3.999 5.7 3.999 9v6c0 3.3 0 4.95 1.026 5.975C6.05 22 7.7 22 10.999 22c3.3 0 4.95 0 5.975-1.025C18 19.95 18 18.3 18 15v-1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.836 5.379c-1.08 0-1.62.78-1.74 1.26-.12.48-.12 2.22-.047 2.94.24.9.84 1.272 1.428 1.392.54.048 2.82.03 3.48.03.96.018 1.68-.342 1.98-1.422.06-.36.12-2.34-.03-2.94-.319-.96-1.11-1.26-1.71-1.26h-3.36Zm-.086-.42c0-.06.008-.406.009-.84.001-.398-.034-.78.156-1.13.71-1.414 2.75-1.27 3.254.17.088.237.093.612.09.96-.003.443.006.84.006.84"/> </svg>
  );
};

export default Mobilesecurity;
