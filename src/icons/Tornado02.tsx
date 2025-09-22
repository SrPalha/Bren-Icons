import React from 'react';
import type { IconProps } from '../types';

const Tornado02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.017 6.159c1.977-1.386 8.9-2.6 9.889 0 1.48 3.89-15.029 6.221-13.845 0C5.555 3.558 10.5 2 12.973 2M18 11.193c-2.577 1.878-9.423 2.631-12 .589m8.022 9.911c-.978.188-2.014.295-3.022.306m-4-6.833c2.077.878 5.383.791 8 .115m-6.96 3.223c1.453.356 3.247.381 4.959.16"/> </svg>
  );
};

export default Tornado02;
