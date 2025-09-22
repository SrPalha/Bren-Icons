import React from 'react';
import type { IconProps } from '../types';

const Speechtotext: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16 17h-6M8 4v4M5 2v8M2 5v2m9-2v2m-7 6c.002 4.152.048 6.275 1.318 7.612C6.636 22 8.758 22 13 22h.45c3.807 0 5.71 0 6.972-1.135.18-.161.347-.337.5-.526C22 19.01 22 17.007 22 13s0-6.012-1.078-7.34a4.623 4.623 0 0 0-.5-.526C19.32 4.14 17.726 4.016 14.8 4H14"/> </svg>
  );
};

export default Speechtotext;
