import React from 'react';
import type { IconProps } from '../types';

const Blackhole: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-17 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm17.538-8.938c.57-.135.962-.569.962-1.062 0-.493-.392-.927-.962-1.062l-4.517-1.076a5 5 0 0 0-9.042 0l-4.517 1.076C2.392 11.073 2 11.507 2 12c0 .493.392.927.962 1.062l4.517 1.076a5 5 0 0 0 9.042 0l4.517-1.076Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-11.542A9.996 9.996 0 0 0 12 2a9.985 9.985 0 0 0-8 4m5 15.542A9.997 9.997 0 0 0 12 22a9.985 9.985 0 0 0 8-3.999"/> </svg>
  );
};

export default Blackhole;
