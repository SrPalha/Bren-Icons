import React from 'react';
import type { IconProps } from '../types';

const Artificialintelligence01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 22v-.5c0-1.105.932-2 1.922-2.49.963-.475 1.772-1.26 1.875-2.18L20 15l2-1-2.5-3.75A8.25 8.25 0 0 0 12 2.033M6.5 16.996V22m0-5.004A8.29 8.29 0 0 1 4 14.19m2.5 2.806c.75.53 1.594.937 2.5 1.193M8 4H6c-.943 0-1.414 0-1.707.293C4 4.586 4 5.057 4 6v2c0 .943 0 1.414.293 1.707C4.586 10 5.057 10 6 10h2c.943 0 1.414 0 1.707-.293C10 9.414 10 8.943 10 8V6c0-.943 0-1.414-.293-1.707C9.414 4 8.943 4 8 4Zm-2.5 6v2m3-2v2m-3-10v2m3-2v2M4 5.5H2m2 3H2m10-3h-2m2 3h-2"/> </svg>
  );
};

export default Artificialintelligence01;
