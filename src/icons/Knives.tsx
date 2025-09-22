import React from 'react';
import type { IconProps } from '../types';

const Knives: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.5 10 2.602-2.609a2.586 2.586 0 0 0 2.154-.695 2.403 2.403 0 0 0 0-3.476 2.598 2.598 0 0 0-3.59 0L12 7.739"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m17 12 1.425-1.455a2.67 2.67 0 0 0 2.298-.782c1.015-1.036 1.012-2.704.13-3.763"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.65 18.463 1.992-1.97c1.239-1.226 1.858-1.84 1.858-2.601 0-.762-.62-1.375-1.858-2.602L13.67 9.34c-1.239-1.227-1.858-1.84-2.628-1.84s-1.39.613-2.628 1.84l-4.825 4.775c-.537.531-.806.797-.948 1.135-.141.338-.141.714-.141 1.466v1.105c0 1.734 0 2.601.544 3.14.545.539 1.42.539 3.173.539h6.472c1.768 0 2.651 0 3.2-.538.55-.538.55-1.403.55-3.134v-2.135"/> </svg>
  );
};

export default Knives;
