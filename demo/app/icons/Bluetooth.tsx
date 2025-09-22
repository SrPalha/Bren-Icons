import React from 'react';
import type { IconProps } from '../types';

const Bluetooth: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12V6.666c0-1.862 0-2.793.585-3.088.585-.295 1.324.264 2.803 1.38l.705.534c1.036.783 1.553 1.174 1.553 1.707 0 .534-.517.925-1.553 1.707L12 12Zm0 0v5.334c0 1.862 0 2.793.585 3.088.585.295 1.324-.264 2.803-1.38l.705-.534c1.036-.783 1.553-1.174 1.553-1.707 0-.534-.517-.925-1.553-1.707L12 12Zm0 0L5.645 7.2M12 12l-6.353 4.8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12h.009M5 12h.009"/> </svg>
  );
};

export default Bluetooth;
