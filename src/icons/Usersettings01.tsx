import React from 'react';
import type { IconProps } from '../types';

const Usersettings01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 14.012a10.62 10.62 0 0 0-5.922 1.47c-1.415.842-5.125 2.562-2.865 4.715C3.816 21.248 5.045 22 6.59 22H12"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 20.714V22m0-1.286a3.364 3.364 0 0 1-2.774-1.43M18 20.713a3.364 3.364 0 0 0 2.774-1.43m-5.548 0L14 20.07m1.226-.788a3.12 3.12 0 0 1 0-3.566m5.548 3.566L22 20.07m-1.226-.788a3.12 3.12 0 0 0 0-3.566M18 14.286c1.157 0 2.176.568 2.774 1.43M18 14.287a3.364 3.364 0 0 0-2.774 1.43M18 14.287V13m2.774 2.717L22 14.929m-6.774.788L14 14.929"/> </svg>
  );
};

export default Usersettings01;
