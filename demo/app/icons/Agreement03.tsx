import React from 'react';
import type { IconProps } from '../types';

const Agreement03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22c.36 0 1.69-.607 3.05-1.822m0 0c1.158-1.036 2.336-2.514 2.95-4.433 1.333-4.17-6.667 0-4 3.475.328.428.681.74 1.05.958Zm0 0c1.602.948 3.481.096 4.754-.884.39-.299.584-.449.7-.402.116.047.184.314.32.85.434 1.715 1.717 3.099 3.176.868"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V7.89c0-1.714 0-2.57-.268-3.255-.43-1.101-1.342-1.97-2.497-2.38C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.447-2.02.718-3.615 2.237-4.37 4.164C3 7.809 3 9.309 3 12.309v2.577c0 3.108 0 4.661.848 5.74.243.31.53.584.855.816.367.261.787.438 1.297.558"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.667 1.667 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"/> </svg>
  );
};

export default Agreement03;
