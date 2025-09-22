import React from 'react';
import type { IconProps } from '../types';

const Triangle02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.495 12.632.364.633c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H15M4.505 12.632l-.364.633c-1.726 3-2.589 4.5-1.908 5.618C2.913 20 4.69 20 8.243 20H9M7.533 7.366l.365-.633C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l.365.633M12 18v4m7.66-13-3.464 2M4.34 9l3.464 2"/> </svg>
  );
};

export default Triangle02;
