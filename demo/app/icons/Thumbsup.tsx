import React from 'react';
import type { IconProps } from '../types';

const Thumbsup: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12.5a2 2 0 0 1 2-2 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 2 2 0 0 1-2-2v-6Zm13.479-4.694-.267.86c-.218.705-.327 1.057-.243 1.336a.985.985 0 0 0 .42.547c.251.158.63.158 1.39.158h.404c2.57 0 3.855 0 4.462.76.07.087.131.18.185.277.467.848-.064 1.991-1.126 4.277-.974 2.098-1.462 3.147-2.366 3.764-.088.06-.178.116-.27.17-.952.545-2.132.545-4.492.545h-.511c-2.86 0-4.289 0-5.177-.86C7 18.779 7 17.394 7 14.624v-.974c0-1.455 0-2.183.258-2.85.259-.666.753-1.213 1.743-2.309l4.091-4.53c.103-.114.154-.17.2-.21a1.033 1.033 0 0 1 1.442.091c.04.045.083.108.17.234.135.196.202.294.261.392.528.871.687 1.906.446 2.89-.027.109-.062.222-.132.448Z"/> </svg>
  );
};

export default Thumbsup;
