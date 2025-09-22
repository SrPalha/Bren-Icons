import React from 'react';
import type { IconProps } from '../types';

const Heartremove: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12 21c-1.341 0-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994c2.682-1.645 5.023-.982 6.429.074.576.433.864.65 1.034.65.17 0 .458-.217 1.034-.65 1.406-1.056 3.747-1.719 6.429-.074C21.18 5.048 22.25 7.286 21.949 10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16 14 3 3m0 0 3 3m-3-3 3-3m-3 3-3 3"/> </svg>
  );
};

export default Heartremove;
