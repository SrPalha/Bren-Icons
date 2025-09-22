import React from 'react';
import type { IconProps } from '../types';

const Maximize3: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14.924 7.781.89.24a1.856 1.856 0 0 1 1.304 2.272m0 0-.239.895m.239-.895a.921.921 0 0 1 1.129-.656 1.856 1.856 0 0 1 1.304 2.271m0 0-.239.896m.239-.896a.78.78 0 0 1 1.078-.511l.29.133a1.858 1.858 0 0 1 1.018 2.168l-.352 1.319c-.518 1.946-.777 2.92-1.279 3.615-.29.403-.894.855-1.365 1.172-.408.274-.72.677-.847 1.153L17.816 22m-3.37-12.427 1.551-5.822a1.392 1.392 0 0 0-.978-1.703 1.382 1.382 0 0 0-1.693.983l-2.378 8.923-1.055-1.845a1.547 1.547 0 0 0-2.268-.477 1.578 1.578 0 0 0-.523 1.848l2.108 4.982c.404.953.413 2.258.147 3.258m.518-15.08s.245-2.22 0-2.463m0 0c-.319-.314-2.54-.05-2.54-.05m2.54.05L6.902 5.12M2.11 7.37s-.246 2.221 0 2.463m0 0c.318.314 2.54.05 2.54.05m-2.54-.05L5.08 6.89"/> </svg>
  );
};

export default Maximize3;
