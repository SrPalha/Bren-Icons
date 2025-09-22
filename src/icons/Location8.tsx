import React from 'react';
import type { IconProps } from '../types';

const Location8: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.91 18c.915 1.368 1.301 2.203.977 2.9-.04.085-.087.168-.14.247-.575.853-2.06.853-5.03.853H9.283c-2.97 0-4.454 0-5.029-.853a1.813 1.813 0 0 1-.14-.247c-.324-.697.062-1.532.976-2.9"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2c4.059 0 7.5 3.428 7.5 7.587 0 4.225-3.497 7.19-6.727 9.206a1.548 1.548 0 0 1-1.546 0C8.003 16.757 4.5 13.827 4.5 9.587 4.5 5.428 7.941 2 12 2Z"/> </svg>
  );
};

export default Location8;
