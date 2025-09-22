import React from 'react';
import type { IconProps } from '../types';

const Plug01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 2v4m-7 0V2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.004 7.613C5.937 6.743 6.64 6 7.53 6h8.94c.89 0 1.593.743 1.526 1.613l-.184 2.379a9.872 9.872 0 0 1-1.68 4.785l-.6.885A3.077 3.077 0 0 1 12.983 17h-1.968a3.077 3.077 0 0 1-2.547-1.338l-.601-.885a9.872 9.872 0 0 1-1.68-4.785l-.184-2.379Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 17v5M11 9h2"/> </svg>
  );
};

export default Plug01;
