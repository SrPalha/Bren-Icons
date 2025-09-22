import React from 'react';
import type { IconProps } from '../types';

const Beta: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.883 10.2c2.252 0 4.078-1.612 4.078-3.6S15.135 3 12.883 3c-2.252 0-4.078 1.612-4.078 3.6v12.6c0 .994-.913 1.8-2.039 1.8-.755 0-1.413-.362-1.766-.9m3.805-5.4c0 2.485 2.282 4.5 5.098 4.5 2.815 0 5.097-2.015 5.097-4.5s-2.282-4.613-5.097-4.613"/> </svg>
  );
};

export default Beta;
