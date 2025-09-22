import React from 'react';
import type { IconProps } from '../types';

const Ramadhan02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.072 15C-.346 7 10.012 5 12 2c1.988 3 12.347 5 5.927 13v3c0 1.886 0 2.828-.579 3.414-.578.586-1.51.586-3.372.586h-3.952c-1.863 0-2.794 0-3.372-.586-.579-.585-.58-1.528-.58-3.413V15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m11 19 .299-.217c1.614-1.174 2.422-1.76 3.34-1.782.109-.003.218 0 .327.01.878.077 1.534.989 2.534 1.989m-11 0c1.5-1 2.169-1.975 3.18-2 .121-.002.242.002.361.012.634.057 1.204.36 1.959.933m3-5.511A3.23 3.23 0 1 1 10.566 8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9h.009"/> </svg>
  );
};

export default Ramadhan02;
