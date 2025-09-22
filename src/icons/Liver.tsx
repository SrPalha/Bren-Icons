import React from 'react';
import type { IconProps } from '../types';

const Liver: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 8.034c-2.88 0-4.873-3.023-8-3.023-4.418 0-8 3.61-8 8.063 0 1.433.171 3.138.868 4.535.546 1.097 1.813 1.555 3.013 1.34C10.43 18.13 14 15.002 15 13.004m0 0c-1.769.106-4-.5-6-1.947m6 1.947c2.83-.17 7-2.796 7-5.978 0-3.183-5-2.016-8-.56"/> </svg>
  );
};

export default Liver;
