import React from 'react';
import type { IconProps } from '../types';

const Userlist: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.08 15.296c-1.218.738-4.412 2.243-2.466 4.126.95.92 2.009 1.578 3.34 1.578h7.593c1.33 0 2.389-.658 3.34-1.578 1.945-1.883-1.25-3.389-2.468-4.126a9.057 9.057 0 0 0-9.338 0Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 5h5m-5 3h5m-2 3h2"/> </svg>
  );
};

export default Userlist;
