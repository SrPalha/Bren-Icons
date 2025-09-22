import React from 'react';
import type { IconProps } from '../types';

const Underpants03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 18.5c0-2.667 1.9-8.5 7.5-8.5M10 18.5c0-2.667-1.9-8.5-7.5-8.5m8-2h3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 8v1.56c0 .302.025.574.108.864.83 2.9 3.812 7.242 7.42 8.439.323.107.624.137.964.137h3.016c.34 0 .641-.03.965-.137 3.607-1.197 6.59-5.54 7.419-8.44.083-.289.108-.56.108-.862V8c0-1.414 0-2.121-.44-2.56C21.122 5 20.415 5 19 5H5c-1.414 0-2.121 0-2.56.44C2 5.878 2 6.585 2 8Z"/> </svg>
  );
};

export default Underpants03;
