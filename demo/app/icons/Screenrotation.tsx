import React from 'react';
import type { IconProps } from '../types';

const Screenrotation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12c.131 3.194 2.198 9.442 9.3 9.978.418.031.627.047.687-.08.06-.126-.091-.273-.393-.567l-1.356-1.32M22 12c-.131-3.193-2.198-9.442-9.3-9.978-.418-.031-.627-.047-.687.08-.06.126.091.273.393.567l1.356 1.32m-5.686 9.457C6.713 12.083 6.03 11.4 6 10.585c-.03-.817.603-1.45 1.868-2.716 1.266-1.265 1.899-1.898 2.716-1.868.816.03 1.498.712 2.86 2.075l2.48 2.478c1.362 1.363 2.044 2.045 2.074 2.861.03.817-.603 1.45-1.868 2.716-1.266 1.265-1.899 1.898-2.716 1.868-.816-.03-1.498-.712-2.86-2.075l-2.48-2.478Z"/> </svg>
  );
};

export default Screenrotation;
