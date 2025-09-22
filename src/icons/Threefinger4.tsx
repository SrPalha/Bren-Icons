import React from 'react';
import type { IconProps } from '../types';

const Threefinger4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.766 13.99V5.983c-.002-.83.628-1.5 1.458-1.5.829 0 1.525.674 1.525 1.503m0 0v4.496m0-4.496V4a1.5 1.5 0 1 1 3.001.003v6.473m3.002 1.003V5.986a1.5 1.5 0 1 0-3.002-.003m3.002 3.643c.806-.121 2.792 0 2.995 1.857v3.662c0 1.36.103 2.997-1.063 4.39-.7 1.04-2.193 1.61-2.193 1.61-1.54.509-2.934.303-3.847.337-1.035.038-1.744.041-2.612-.152 0 0-1.98-.337-3.238-2.465-.967-1.633-3.48-3.934-2.175-6.012.842-1.341 2.505-2.808 3.147-3.369"/> </svg>
  );
};

export default Threefinger4;
