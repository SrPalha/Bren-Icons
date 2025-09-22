import React from 'react';
import type { IconProps } from '../types';

const Cabinet03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 18v3m13-3v3M21 3H3v10c0 2.357 0 3.535.824 4.268.824.732 2.15.732 4.801.732h6.75c2.652 0 3.977 0 4.801-.732C21 16.535 21 15.357 21 13V3ZM2 3h20M3 10.5h18"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 13.5.155.078c.42.21.631.315.858.369.226.053.461.053.931.053h.112c.47 0 .705 0 .931-.053.227-.054.437-.16.858-.37L14 13.5m-4-7 .155.078c.42.21.631.315.858.369.226.053.461.053.931.053h.112c.47 0 .705 0 .931-.053.227-.054.437-.16.858-.37L14 6.5"/> </svg>
  );
};

export default Cabinet03;
