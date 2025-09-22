import React from 'react';
import type { IconProps } from '../types';

const Cabinet01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 18-1 3m13-3 1 3m-3-3H8c-2.828 0-4.243 0-5.121-.941C2 16.117 2 14.602 2 11.57V9.43c0-3.03 0-4.546.879-5.488C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.941C22 4.883 22 6.398 22 9.43v2.142c0 3.03 0 4.546-.879 5.488-.878.94-2.293.94-5.121.94ZM2.5 14h19M12 3v11M9 9V8m6 1V8"/> </svg>
  );
};

export default Cabinet01;
