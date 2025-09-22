import React from 'react';
import type { IconProps } from '../types';

const Prisoner: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 7c-1.671-.628-3.749-1-6-1s-4.329.372-6 1m1 0v1.725c0 1.793.921 3.455 2.428 4.378l.514.315a3.93 3.93 0 0 0 4.116 0l.514-.315A5.128 5.128 0 0 0 17 8.725V7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 8V5.956c0-1.345.921-2.591 2.428-3.283l.514-.236c1.267-.582 2.85-.582 4.116 0l.514.236C16.078 3.365 17 4.61 17 5.956V8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 13 1 3m0 0-1.369 1.195c-1.254 1.096-1.88 1.643-2.631 1.643-.75 0-1.377-.547-2.631-1.643L8 16m8 0 1.734.578c.998.333 1.497.5 1.94.756a5 5 0 0 1 1.167.936C21.188 18.647 22 20 22 22M8 16l1-3m-1 3-1.734.578c-.998.333-1.497.5-1.94.756a5 5 0 0 0-1.167.936C2.812 18.647 2 20 2 22"/> </svg>
  );
};

export default Prisoner;
