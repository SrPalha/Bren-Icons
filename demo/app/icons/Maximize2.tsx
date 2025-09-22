import React from 'react';
import type { IconProps } from '../types';

const Maximize2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.863 12.66 2.135 1.83 2.666-10.227a1.72 1.72 0 0 1 3.339.83l-1.202 5.1 1.688.27c1.93.29 2.895.435 3.574.842 1.123.673 1.936 1.684 1.936 3.16 0 1.027-.254 1.716-.871 3.569-.392 1.175-.587 1.763-.907 2.228a4.003 4.003 0 0 1-2.193 1.582c-.542.156-1.16.156-2.399.156h-1.05c-1.645 0-2.468 0-3.2-.302a3.983 3.983 0 0 1-.386-.184c-.696-.378-1.215-1.017-2.253-2.296L5.38 15.08a1.742 1.742 0 0 1-.008-2.186 1.74 1.74 0 0 1 2.49-.235Zm2.008-8.045s.246-2.22 0-2.462m0 0c-.318-.314-2.538-.05-2.538-.05m2.538.05-2.97 2.942m-4.79 2.25s-.246 2.22 0 2.463m0 0c.318.314 2.539.05 2.539.05m-2.54-.05 2.971-2.942"/> </svg>
  );
};

export default Maximize2;
