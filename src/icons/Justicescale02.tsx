import React from 'react';
import type { IconProps } from '../types';

const Justicescale02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 17-3-7-3 7m-6 0-3-7-3 7m1-7h1.048c1.264 0 2.49-.705 3.476-2 2.032-2.667 4.92-2.667 6.952 0 .986 1.295 2.212 2 3.476 2H20"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18 22c1.56 0 2.918-1.052 3.618-2.603.353-.78.529-1.171.23-1.784-.3-.613-.796-.613-1.787-.613h-4.122c-.992 0-1.487 0-1.787.613-.299.613-.123 1.003.23 1.784C15.082 20.948 16.44 22 18 22ZM6 22c1.56 0 2.918-1.052 3.618-2.603.353-.78.529-1.171.23-1.784C9.548 17 9.053 17 8.06 17H3.939c-.992 0-1.487 0-1.787.613-.299.613-.123 1.003.23 1.784C3.082 20.948 4.44 22 6 22Zm8-18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/> </svg>
  );
};

export default Justicescale02;
