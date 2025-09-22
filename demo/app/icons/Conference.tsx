import React from 'react';
import type { IconProps } from '../types';

const Conference: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M19 15V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v6c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.828 0 4.243 0 5.121-.879C19 19.243 19 17.828 19 15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 7v10M2 7v10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 8.509a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.956 7.223c1.059-1.63 2.74-2.24 3.955-2.239 1.217.002 2.848.61 3.906 2.24.069.105.088.234.026.344-.248.439-1.016 1.31-1.571 1.369-.638.067-2.306.077-2.36.077-.052 0-1.772-.01-2.41-.077-.555-.06-1.324-.93-1.571-1.37-.062-.109-.043-.238.025-.344Z"/> </svg>
  );
};

export default Conference;
