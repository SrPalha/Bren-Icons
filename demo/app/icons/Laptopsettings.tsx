import React from 'react';
import type { IconProps } from '../types';

const Laptopsettings: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 15v-1.5M4 15V7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 9.714V11m0-1.286a3.364 3.364 0 0 1-2.774-1.43M18 9.713a3.364 3.364 0 0 0 2.774-1.43m-5.548 0L14 9.07m1.226-.788a3.119 3.119 0 0 1 0-3.566m5.548 3.566L22 9.071m-1.226-.788a3.119 3.119 0 0 0 0-3.566M18 3.286c1.157 0 2.176.568 2.774 1.43M18 3.287a3.364 3.364 0 0 0-2.774 1.43M18 3.287V2m2.774 2.717L22 3.929m-6.774.788L14 3.929"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.498 16.015 4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989-.548.996-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996-.549-.996-.19-2.327 1.254-4.989Z"/> </svg>
  );
};

export default Laptopsettings;
