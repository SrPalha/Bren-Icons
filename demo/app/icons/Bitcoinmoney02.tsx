import React from 'react';
import type { IconProps } from '../types';

const Bitcoinmoney02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.438 14.667V9.333m1.562 0V8m0 8v-1.333M10.437 12h3.126m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.938 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H9.5m9.5 1.809a13.62 13.62 0 0 0-1-.107m-12 1.93c-.341-.024-.675-.06-1-.107"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 19.5c-1.332.622-3.083 1-5 1-1.066 0-2.08-.117-3-.327-1.5-.344-2-1.247-2-2.787V6.614c0-.985 1.04-1.661 2-1.441.92.21 1.934.327 3 .327 1.917 0 3.668-.378 5-1 1.332-.622 3.083-1 5-1 1.066 0 2.08.117 3 .327 1.582.363 2 1.293 2 2.787v10.772c0 .985-1.04 1.661-2 1.441-.92-.21-1.934-.327-3-.327-1.917 0-3.668.378-5 1Z"/> </svg>
  );
};

export default Bitcoinmoney02;
