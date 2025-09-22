import React from 'react';
import type { IconProps } from '../types';

const Note05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2v2m-5-2v2M7 2v2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.5 13V9c0-2.828 0-4.243.879-5.121C5.257 3 6.672 3 9.5 3h5c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v4c0 2.828 0 4.243-.879 5.121C18.743 19 17.328 19 14.5 19h-5c-2.828 0-4.243 0-5.121-.879C3.5 17.243 3.5 15.828 3.5 13Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3.5 16V9c0-2.828 0-4.243.879-5.121C5.257 3 6.672 3 9.5 3h5c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v7c0 2.828 0 4.243-.879 5.121C18.743 22 17.328 22 14.5 22h-5c-2.828 0-4.243 0-5.121-.879C3.5 20.243 3.5 18.828 3.5 16Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 15h4m-4-5h8"/> </svg>
  );
};

export default Note05;
