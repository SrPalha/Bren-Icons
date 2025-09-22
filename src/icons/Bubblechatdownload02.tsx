import React from 'react';
import type { IconProps } from '../types';

const Bubblechatdownload02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12c-.237 5.082-4.622 9.133-9.995 9.133-.65.001-1.297-.059-1.936-.178-.459-.087-.689-.13-.849-.105-.16.024-.387.145-.842.386a6.505 6.505 0 0 1-4.226.657 5.29 5.29 0 0 0 1.087-2.348c.1-.53-.147-1.045-.519-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.48 2 12.005 2c.508 0 1.007.036 1.495.106"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7.5c.491.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.009-1.994 2.5-2.5M18.5 10V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01M8 12h.009"/> </svg>
  );
};

export default Bubblechatdownload02;
