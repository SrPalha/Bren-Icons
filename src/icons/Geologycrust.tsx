import React from 'react';
import type { IconProps } from '../types';

const Geologycrust: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 15a3 3 0 1 1 0-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18.5a6.472 6.472 0 0 1-4-1.376M12 5.5A6.503 6.503 0 0 0 5.813 10m.419 5a6.455 6.455 0 0 1-.656-2M12 5.5c1.624.115 4.185-.27 5.052-2.133m3.016 2.723c-.44.415-.966.759-1.568.91-2 .5-4 2-2.5 4s3 3.5 1.5 5.5c-.74.985-1.26 2.644.78 3.281"/> </svg>
  );
};

export default Geologycrust;
