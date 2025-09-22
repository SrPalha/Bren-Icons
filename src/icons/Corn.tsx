import React from 'react';
import type { IconProps } from '../types';

const Corn: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.885 20.132c2.103 2.078 5.978 1.618 8.655-1.026 3.059-3.021 4.642-3.927 5.753-4.547.224-.125.28-.436.098-.616-3.609-3.565-9.633-.897-10.284 3.807m-4.222 2.382L2.5 21.5m1.385-1.368c-2.103-2.077-1.638-5.904 1.039-8.548.847-.628 2.472-2.407 2.734-4.81.026-.243.335-.366.51-.193a6.53 6.53 0 0 1 1.955 4.666"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.592 13c2.35-3.624 4.94-8.276 3.487-9.954-1.73-2-7.07 1.892-11.079 5.29"/> </svg>
  );
};

export default Corn;
