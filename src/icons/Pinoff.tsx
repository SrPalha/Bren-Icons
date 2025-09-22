import React from 'react';
import type { IconProps } from '../types';

const Pinoff: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 8c-.541.128-1 .142-1.507.459-.92.575-1.142 1.258-.905 2.302.852 3.753 4.398 7.299 8.15 8.15 1.045.238 1.728.017 2.304-.903.3-.48.33-1 .458-1.508m-4-8.7a1.27 1.27 0 0 0 .43-.118c.97-.505 1.5-2.148 2.02-3.082.481-.863.722-1.294 1.288-1.498.566-.203.907-.08 1.588.166a5.643 5.643 0 0 1 3.406 3.406c.246.681.37 1.022.166 1.588-.204.566-.635.807-1.498 1.288-.94.524-2.605 1.06-3.11 2.04a1.22 1.22 0 0 0-.113.41M3 21l5-5M3 3l18 18"/> </svg>
  );
};

export default Pinoff;
