import React from 'react';
import type { IconProps } from '../types';

const Zeppelin: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19 15.998-.306 1.323c-.329 1.418-.493 2.127-1 2.474-.508.346-1.171.203-2.499-.084l-.766-.165c-.707-.153-1.06-.23-1.362-.427-.302-.198-.527-.502-.977-1.11L11 16.538"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 10.996c0 3 8 6 13 6 4 0 7-2.686 7-6s-3-6-7-6c-5 0-13 3-13 6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 10.998h3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 5.997c-.755-.847-1.959-2.142-3.133-1.984-.345.047-.686.238-1.367.62l1 3.364m3.5 7.999c-.755.847-1.959 2.142-3.133 1.984-.345-.046-.686-.237-1.367-.62l1-3.364"/> </svg>
  );
};

export default Zeppelin;
