import React from 'react';
import type { IconProps } from '../types';

const Pinlocation1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 11v7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.847 16c1.647 2.113 2.47 3.17 2.04 4.006a1.63 1.63 0 0 1-.14.223c-.575.771-2.06.771-5.03.771h-1.435c-2.97 0-4.454 0-5.029-.771a1.606 1.606 0 0 1-.14-.223c-.43-.837.393-1.893 2.04-4.006"/> </svg>
  );
};

export default Pinlocation1;
