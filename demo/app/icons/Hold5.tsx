import React from 'react';
import type { IconProps } from '../types';

const Hold5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.46 5.71a1.5 1.5 0 1 0-2.954-.522l-1.389 7.879-.203 1.345-2.025-2.075a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.094c.53.117 1.1.117 2.24.117h2.34a5 5 0 0 0 4.914-4.08l1.07-5.716.434-2.462a1.5 1.5 0 0 0-2.955-.521m-5.561-3.012.347-1.97a1.5 1.5 0 1 1 2.954.522l-.347 1.97m-2.954-.522-.782 4.432m6.343-1.42.348-1.97a1.5 1.5 0 1 0-2.955-.52m2.607 2.49-.434 2.462M15.415 6.23l-.781 4.432"/> </svg>
  );
};

export default Hold5;
