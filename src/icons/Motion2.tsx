import React from 'react';
import type { IconProps } from '../types';

const Motion2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 16.5c0-2.056 0-3.084.442-3.85a3.3 3.3 0 0 1 1.208-1.208C13.416 11 14.444 11 16.5 11s3.084 0 3.85.442a3.3 3.3 0 0 1 1.208 1.208c.442.766.442 1.794.442 3.85s0 3.084-.442 3.85a3.3 3.3 0 0 1-1.208 1.208C19.584 22 18.556 22 16.5 22s-3.084 0-3.85-.442a3.3 3.3 0 0 1-1.208-1.208C11 19.584 11 18.556 11 16.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.513 15c-.486-.046-.847-.137-1.156-.316a2.714 2.714 0 0 1-.993-.993C6 13.06 6 12.215 6 10.524c0-1.691 0-2.537.364-3.167a2.71 2.71 0 0 1 .993-.993C7.987 6 8.833 6 10.524 6c1.691 0 2.537 0 3.167.364.413.238.755.58.993.993.179.309.27.67.316 1.156M3.416 9c-.477-.145-.88-.503-1.128-.93C2 7.574 2 6.907 2 5.57c0-1.334 0-2.002.288-2.499.189-.325.46-.596.787-.784C3.575 2 4.245 2 5.585 2c1.34 0 2.01 0 2.51.287.4.23.748.601.905 1.04"/> </svg>
  );
};

export default Motion2;
