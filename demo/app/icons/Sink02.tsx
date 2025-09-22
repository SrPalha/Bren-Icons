import React from 'react';
import type { IconProps } from '../types';

const Sink02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 17c3.76 0 6.917-2.56 7.804-6.02.206-.805.309-1.207.007-1.594C19.509 9 19.019 9 18.039 9H5.961c-.98 0-1.47 0-1.772.386-.302.387-.199.789.007 1.594C5.083 14.44 8.241 17 12 17Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9V3.5a1.5 1.5 0 0 1 3 0M9 9V8c0-.943 0-1.414-.293-1.707C8.414 6 7.943 6 7 6m8 1v2m-6 7.5.642 3.532a2.396 2.396 0 0 0 4.716 0L15 16.5"/> </svg>
  );
};

export default Sink02;
