import React from 'react';
import type { IconProps } from '../types';

const Candelier01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.259 15.317C5.895 14.63 5.584 14 4.5 14c-1.085 0-1.395.63-1.759 1.317-.338.638-1.126 1.65-.516 2.329.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33Zm7.5 3C13.395 17.63 13.084 17 12 17c-1.085 0-1.395.63-1.759 1.317-.338.638-1.126 1.65-.516 2.329.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33Zm7.5-3C20.895 14.63 20.584 14 19.5 14c-1.084 0-1.395.63-1.759 1.317-.338.638-1.126 1.65-.516 2.329.317.354.97.354 2.275.354s1.958 0 2.275-.354c.61-.68-.178-1.69-.516-2.33ZM9 3h6m-3 0v14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 14v-2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 1 1 7.5 0V14"/> </svg>
  );
};

export default Candelier01;
