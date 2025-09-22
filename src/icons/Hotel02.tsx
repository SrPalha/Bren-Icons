import React from 'react';
import type { IconProps } from '../types';

const Hotel02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v11c0 1.886 0 2.828.586 3.414C4.172 22 5.114 22 7 22h10c1.886 0 2.828 0 3.414-.586C21 20.828 21 19.886 21 18V7m-4 0A5 5 0 0 0 7 7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 22v-4a2 2 0 1 0-4 0v4M9 3H4.472c-.31 0-.625.082-.874.329C2.856 4.064 2.428 5.288 2 7h5m8-4h4.528c.31 0 .625.082.874.329.742.735 1.17 1.959 1.598 3.671h-5M6 11h.5M6 14.5h.5m11-3.5h.5m-.5 3.5h.5M10.5 8v1.5m0 0V11m0-1.5h3m0-1.5v1.5m0 0V11"/> </svg>
  );
};

export default Hotel02;
