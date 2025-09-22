import React from 'react';
import type { IconProps } from '../types';

const Boxer: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M4.82 3h14.36c.537 0 .805 0 1.004.093a.998.998 0 0 1 .54.641c.058.213.014.48-.075 1.013-.065.395-.098.593-.185.747a.995.995 0 0 1-.521.445C19.776 6 19.578 6 19.18 6H4.82c-.398 0-.597 0-.763-.061a.995.995 0 0 1-.521-.445c-.087-.154-.12-.352-.185-.747-.089-.534-.133-.8-.075-1.013a.998.998 0 0 1 .54-.641C4.015 3 4.283 3 4.82 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6c-1.2 2.352-2 4.066-2 6.7v5.067c0 1.387 0 2.08.44 2.51.918.902 6.077 1.024 7.12 0 1.084-1.062.045-3.114.592-4.41.336-.794 1.236-1.422 1.848-2.022m0 0-1.5-1.471m1.5 1.47c.613.601 1.512 1.229 1.848 2.024.547 1.295-.492 3.347.591 4.41.919.9 6.078 1.023 7.122 0 .439-.431.439-1.124.439-2.511V12.7c0-2.634-.8-4.348-2-6.7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 8.778 12 6l3 5"/> </svg>
  );
};

export default Boxer;
