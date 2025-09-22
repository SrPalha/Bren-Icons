import React from 'react';
import type { IconProps } from '../types';

const Squareunlock02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 16.5v-2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.268 18.845c.225 1.67 1.608 2.979 3.292 3.056 1.416.065 2.855.099 4.44.099 1.585 0 3.024-.034 4.44-.1 1.684-.076 3.067-1.385 3.292-3.055.147-1.09.268-2.207.268-3.345 0-1.138-.121-2.255-.268-3.345-.225-1.67-1.608-2.979-3.292-3.056A95.434 95.434 0 0 0 12 9c-1.585 0-3.024.034-4.44.1-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5c0 1.138.121 2.255.268 3.345Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 9V6.5A4.5 4.5 0 0 1 12 2c1.96 0 3.5 1.5 4 3"/> </svg>
  );
};

export default Squareunlock02;
