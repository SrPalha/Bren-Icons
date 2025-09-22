import React from 'react';
import type { IconProps } from '../types';

const Hanger: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.126 15.367 6.002-3.377A3.692 3.692 0 0 1 12 11.5a3.7 3.7 0 0 1 1.872.49l6.002 3.377a2.208 2.208 0 0 1-1.082 4.133H5.208a2.208 2.208 0 0 1-1.082-4.133Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 6.405c0-1.052.895-1.905 2-1.905s2 .853 2 1.905c0 .72-.42 1.346-1.038 1.67-.489.256-.962.682-.962 1.235v2.19"/> </svg>
  );
};

export default Hanger;
