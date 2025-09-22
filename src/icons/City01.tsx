import React from 'react';
import type { IconProps } from '../types';

const City01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14 8h-4c-2.482 0-3 .518-3 3v11h10V11c0-2.482-.518-3-3-3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 12h2m-2 3h2m-2 3h2m8 4V8.186c0-1.229 0-1.843-.299-2.336-.298-.494-.836-.769-1.912-1.318l-4.342-2.217C13.287 1.723 13 1.932 13 3.23v4.474M3 22v-9c0-.827.173-1 1-1h3m15 10H2"/> </svg>
  );
};

export default City01;
