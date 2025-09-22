import React from 'react';
import type { IconProps } from '../types';

const Imagecompositionoval: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2 8.356c0-1.544 0-2.316.45-3.042.448-.725 1.007-1.003 2.123-1.56a16.595 16.595 0 0 1 14.854 0c1.116.557 1.675.835 2.124 1.56C22 6.04 22 6.812 22 8.356v7.288c0 1.544 0 2.316-.45 3.042-.449.726-1.007 1.004-2.123 1.56a16.596 16.596 0 0 1-14.854 0c-1.116-.556-1.674-.834-2.124-1.56C2 17.96 2 17.188 2 15.644V8.356Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 14.135c.667-.09 1.34-.134 2.016-.132 2.856-.056 5.642.77 7.86 2.331 2.06 1.448 3.505 3.44 4.124 5.666"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M22 16.896c-1.175-.595-2.391-.897-3.614-.896-1.851-.007-3.684.673-5.386 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/> </svg>
  );
};

export default Imagecompositionoval;
