import React from 'react';
import type { IconProps } from '../types';

const Usbmemory021: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M7 11.5c0-1.886 0-2.828.586-3.414C8.172 7.5 9.114 7.5 11 7.5h2c1.886 0 2.828 0 3.414.586C17 8.672 17 9.614 17 11.5V17c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 22 12.93 22 12 22s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 18.394 7 17.93 7 17v-5.5Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5c0-1.886 0-2.828.586-3.414C8.172 7.5 9.114 7.5 11 7.5h2c1.886 0 2.828 0 3.414.586C17 8.672 17 9.614 17 11.5V17c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 22 12.93 22 12 22s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 18.394 7 17.93 7 17v-5.5Zm8.5-4v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5v2m3-3h1"/> </svg>
  );
};

export default Usbmemory021;
