import React from 'react';
import type { IconProps } from '../types';

const Bitcoinsmartphone01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17.599 5c-.135-.869-.39-1.491-.874-1.975C15.7 2 14.05 2 10.75 2S5.8 2 4.775 3.025C3.75 4.05 3.75 5.7 3.75 9v6c0 3.3 0 4.95 1.025 5.975C5.8 22 7.45 22 10.75 22s4.95 0 5.975-1.025c.483-.484.739-1.106.874-1.975"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.188 14.667V9.333m1.562 0V8m0 8v-1.333M16.187 12h3.125m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.938 1H15.25M19.313 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.938-1H15.25"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.75 19h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 5h2"/> </svg>
  );
};

export default Bitcoinsmartphone01;
