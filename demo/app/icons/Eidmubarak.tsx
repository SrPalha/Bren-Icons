import React from 'react';
import type { IconProps } from '../types';

const Eidmubarak: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 11.805c0 5.354 4.34 9.695 9.695 9.695 4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.463 2.5C5.44 3.68 2.5 7.399 2.5 11.805Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.25 8.5c-2.424-3 1.711-4.5 2.75-6 1.039 1.5 5.174 3 2.75 6m-5.5 0h5.5m-5.5 0v7m5.5-7v7"/> </svg>
  );
};

export default Eidmubarak;
