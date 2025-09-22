import React from 'react';
import type { IconProps } from '../types';

const Scooter03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 4H6m12 0h-4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9 20c-1.327-.035-2.1-.172-2.578-.695-.647-.709-.453-1.79-.064-3.955l.612-3.4c.245-1.364.368-2.046.724-2.564.351-.509.86-.908 1.459-1.145C9.763 8 10.508 8 12 8s2.238 0 2.847.241a3.19 3.19 0 0 1 1.459 1.145c.356.518.479 1.2.724 2.564l.611 3.4c.39 2.164.584 3.246-.063 3.955-.476.52-1.244.659-2.56.695"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18v4"/> </svg>
  );
};

export default Scooter03;
