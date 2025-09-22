import React from 'react';
import type { IconProps } from '../types';

const Messagedownload02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12.5h.01m3.986 0H16m-8 0h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 3.034a33.244 33.244 0 0 0-3.67.037c-4.184.278-7.516 3.657-7.79 7.9a19.99 19.99 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184.467.845.159 1.9-.328 2.823-.35.665-.526.997-.385 1.237.14.24.455.248 1.084.263 1.245.03 2.084-.322 2.75-.813.377-.279.566-.418.696-.434.13-.016.387.09.899.3.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0 4.183-.278 7.515-3.658 7.789-7.9.02-.327.034-.659.038-.991"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7.5c.491.506 1.8 2.5 2.5 2.5m0 0c.7 0 2.009-1.994 2.5-2.5M18.5 10V2"/> </svg>
  );
};

export default Messagedownload02;
