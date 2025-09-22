import React from 'react';
import type { IconProps } from '../types';

const Medalfirstplace: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 15c0-3.866 3.022-7 6.75-7h.5C15.978 8 19 11.134 19 15s-3.022 7-6.75 7h-.5C8.022 22 5 18.866 5 15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 18v-5.052c0-.574 0-.862-.23-.933-.507-.157-1.27.984-1.27.984m1.5 5H11m1.5 0H14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.56 2 11 7.898M18 2l-2.821 6.5M10.44 2 12 5.594M6 2l2.821 6.5"/> </svg>
  );
};

export default Medalfirstplace;
