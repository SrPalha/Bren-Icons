import React from 'react';
import type { IconProps } from '../types';

const Safetypin02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.546 3.794 12.293 5.41c-1.071 1.383 1.06 3.057 2.147 1.666l.374-.48c.693-.888 1.998-.978 2.783-.193.785.785.694 2.09-.193 2.783l-.48.374c-1.391 1.087.283 3.218 1.666 2.147l1.616-1.253c2.226-1.725 2.409-5.031.39-7.05-2.019-2.019-5.325-1.836-7.05.39ZM4.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 17.41 7 5m-.41 16L17 12"/> </svg>
  );
};

export default Safetypin02;
