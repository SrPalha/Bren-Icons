import React from 'react';
import type { IconProps } from '../types';

const Collectionsbookmark: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.902 6.129C18 7.257 18 9.074 18 12.708v1.585c0 3.633 0 5.45-1.098 6.578C15.803 22 14.035 22 10.5 22c-3.536 0-5.303 0-6.402-1.129C3 19.743 3 17.926 3 14.293v-1.585c0-3.634 0-5.45 1.098-6.58C5.197 5 6.964 5 10.5 5s5.303 0 6.402 1.129Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 5.5v4.87c0 .935 0 1.402.29 1.57.561.324 1.614-.758 2.114-1.083.29-.19.435-.284.596-.284.161 0 .306.095.596.284.5.325 1.553 1.407 2.114 1.083.29-.168.29-.635.29-1.57V5.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 2h2c4.714 0 7.071 0 8.535 1.464C21 4.93 21 7.286 21 12v6"/> </svg>
  );
};

export default Collectionsbookmark;
