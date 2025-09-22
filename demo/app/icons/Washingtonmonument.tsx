import React from 'react';
import type { IconProps } from '../types';

const Washingtonmonument: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 19 8.768 6.627c.115-.809.173-1.213.333-1.583.16-.37.416-.689.928-1.325l.557-.694C11.252 2.342 11.586 2 12 2c.414 0 .748.342 1.414 1.025l.557.694c.511.636.767.955.928 1.325.16.37.218.774.333 1.583L17 19M3 22h18m-1 0-.219-.328c-.872-1.308-1.308-1.962-1.971-2.317C17.147 19 16.36 19 14.789 19H9.21c-1.572 0-2.358 0-3.021.355-.663.355-1.1 1.009-1.971 2.317L4 22M9 6h6m-3 13v-6"/> </svg>
  );
};

export default Washingtonmonument;
