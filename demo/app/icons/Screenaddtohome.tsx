import React from 'react';
import type { IconProps } from '../types';

const Screenaddtohome: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.069 5c.136-.869.393-1.491.879-1.975C8.979 2 10.638 2 13.958 2s4.979 0 6.01 1.025C20.999 4.05 20.999 5.7 20.999 9v6c0 3.3 0 4.95-1.031 5.975C18.937 22 17.278 22 13.958 22s-4.979 0-6.01-1.025c-.655-.652-.894-1.556-.981-2.975"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 19h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.443 7.952h3.48c.436.015 1.095.546 1.095.957v3.605m-8.019 3.438 7.268-7.203"/> </svg>
  );
};

export default Screenaddtohome;
