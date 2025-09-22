import React from 'react';
import type { IconProps } from '../types';

const Bubblechatquestion: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M22 11.567c0 5.283-4.478 9.566-10 9.566a10.46 10.46 0 0 1-1.935-.178c-.459-.087-.688-.13-.848-.105-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.478 2 12 2s10 4.284 10 9.567Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 9.846C10 8.826 10.895 8 12 8s2 .827 2 1.846c0 .368-.116.71-.317.998C13.085 11.7 12 12.519 12 13.539V14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.5h.009"/> </svg>
  );
};

export default Bubblechatquestion;
