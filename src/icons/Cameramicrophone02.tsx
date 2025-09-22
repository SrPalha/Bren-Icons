import React from 'react';
import type { IconProps } from '../types';

const Cameramicrophone02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M17 6c2.346 0 3.018 0 3.826.62a3 3 0 0 1 .554.554c.62.808.62 1.98.62 4.326V16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4.5c0-2.346 0-3.518.62-4.326a3 3 0 0 1 .554-.554C3.982 6 4.654 6 7 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17 7-.886-2.215c-.382-.955-.715-2.039-1.697-2.525C13.892 2 13.262 2 12 2c-1.262 0-1.892 0-2.417.26-.982.486-1.315 1.57-1.697 2.525L7 7m1.492 7.515c.32.882 1.334 2.418 3.486 2.497m0 0c.706 0 2.622-.26 3.53-2.497m-3.53 2.497v1.485"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.253 11.241a1.738 1.738 0 1 1 3.477 0v2.017a1.738 1.738 0 1 1-3.477 0v-2.017Z"/> </svg>
  );
};

export default Cameramicrophone02;
