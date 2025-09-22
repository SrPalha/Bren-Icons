import React from 'react';
import type { IconProps } from '../types';

const Mobilenavigator1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4 9c0-3.3 0-4.95 1.172-5.975C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.025C20 4.05 20 5.7 20 9v6c0 3.3 0 4.95-1.172 5.975C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.025C4 19.95 4 18.3 4 15V9Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12.629 14.247a.906.906 0 0 1-1.258 0c-1.544-1.497-3.613-3.168-2.604-5.595A3.528 3.528 0 0 1 12 6.5c1.378 0 2.688.84 3.233 2.152 1.008 2.424-1.056 4.104-2.604 5.595Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 19h2"/> </svg>
  );
};

export default Mobilenavigator1;
