import React from 'react';
import type { IconProps } from '../types';

const Keyframe: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M9.382 5.005C10.59 3.668 11.194 3 12 3c.806 0 1.41.668 2.618 2.005l2.972 3.288C19.197 10.07 20 10.959 20 12c0 1.04-.803 1.93-2.41 3.707l-2.972 3.288C13.41 20.332 12.806 21 12 21c-.806 0-1.41-.668-2.618-2.005L6.41 15.707C4.803 13.93 4 13.041 4 12c0-1.04.803-1.93 2.41-3.707l2.972-3.288Z"/> </svg>
  );
};

export default Keyframe;
