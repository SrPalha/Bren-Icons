import React from 'react';
import type { IconProps } from '../types';

const Lockcomputer: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13 2h-3C6.227 2 4.341 2 3.17 3.172 2 4.343 2 6.229 2 10c0 3.771 0 5.657 1.17 6.828C4.343 18 6.229 18 10 18h4c3.77 0 5.656 0 6.828-1.172.653-.653.942-1.528 1.07-2.828"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 22h8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 15h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.75 5.376V4.122c.001-.397-.034-.78.156-1.13.71-1.414 2.75-1.27 3.254.17.088.238.093.613.09.96-.003.444.006 1.254.006 1.254m-3.506 0c-1.08 0-1.534.78-1.654 1.26-.12.48-.12 2.22-.048 2.94.24.9.84 1.272 1.428 1.392.54.048 2.82.03 3.48.03.96.018 1.68-.342 1.98-1.422.06-.36.12-2.34-.03-2.94-.318-.96-1.05-1.26-1.65-1.26m-3.506 0h3.506"/> </svg>
  );
};

export default Lockcomputer;
