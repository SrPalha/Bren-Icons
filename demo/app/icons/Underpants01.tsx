import React from 'react';
import type { IconProps } from '../types';

const Underpants01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 17 .346.995c.317.944.476 1.417.844 1.697l.07.05c.383.258.884.258 1.885.258 2.288 0 3.431 0 4.166-.724.043-.041.089-.09.128-.135.68-.776.609-1.86.468-4.026-.23-3.554-.683-6.41-1.121-8.415-.264-1.209-.396-1.814-.949-2.257C19.284 4 18.6 4 17.231 4H6.769C5.4 4 4.716 4 4.163 4.443c-.553.443-.685 1.048-.949 2.257-.438 2.005-.89 4.861-1.121 8.415-.14 2.167-.211 3.25.468 4.026.04.045.085.094.128.135C3.424 20 4.568 20 6.855 20c1.001 0 1.502 0 1.886-.259a1.59 1.59 0 0 0 .07-.05c.367-.28.526-.752.843-1.696L9.987 17"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.5 15c.599 1.196 2.218 2.5 3.5 2.5s2.901-1.304 3.5-2.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8h18"/> </svg>
  );
};

export default Underpants01;
