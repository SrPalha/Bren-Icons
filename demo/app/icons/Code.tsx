import React from 'react';
import type { IconProps } from '../types';

const Code: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.009m3.986 0h.01m3.986 0H16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 21c1.232 0 2.231-1.151 2.231-2.571 0-2.248-.1-3.742 1.442-5.52.436-.502.436-1.316 0-1.818-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571 0-2.248.1-3.742-1.442-5.52-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57 3.769 4.151 4.768 3 6 3"/> </svg>
  );
};

export default Code;
