import React from 'react';
import type { IconProps } from '../types';

const Cpusettings: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 10c-.036-2.48-.22-3.885-1.163-4.828C17.663 4 15.777 4 12.004 4s-5.66 0-6.832 1.172C4 6.343 4 8.229 4 12c0 3.771 0 5.657 1.172 6.828C6.235 19.891 7.886 19.99 11 20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 19.714V21m0-1.286a3.364 3.364 0 0 1-2.774-1.43M18 19.713a3.364 3.364 0 0 0 2.774-1.43m-5.548 0L14 19.07m1.226-.788a3.12 3.12 0 0 1 0-3.566m5.548 3.566L22 19.07m-1.226-.788a3.12 3.12 0 0 0 0-3.566M18 13.286c1.157 0 2.176.568 2.774 1.43M18 13.287a3.364 3.364 0 0 0-2.774 1.43M18 13.287V12m2.774 2.717L22 13.929m-6.774.788L14 13.929"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 2v2m5-2v2m-5 16v2M4 9.5H2m2 5H2m20-5h-2M12 8H8"/> </svg>
  );
};

export default Cpusettings;
