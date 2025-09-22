import React from 'react';
import type { IconProps } from '../types';

const Databasesetting: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 10.842c.602.18 1.274.33 2 .44M3 12c0 1.53 3.054 2.792 7 2.977m-4 2.865c.602.18 1.274.33 2 .44"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 20.714V22m0-1.286a3.364 3.364 0 0 1-2.774-1.43M17 20.713a3.364 3.364 0 0 0 2.774-1.43m-5.548 0L13 20.07m1.226-.788a3.12 3.12 0 0 1 0-3.566m5.548 3.566L21 20.07m-1.226-.788a3.12 3.12 0 0 0 0-3.566M17 14.286c1.157 0 2.176.568 2.774 1.43M17 14.287a3.364 3.364 0 0 0-2.774 1.43M17 14.287V13m2.774 2.717L21 14.929m-6.774.788L13 14.929"/> </svg>
  );
};

export default Databasesetting;
