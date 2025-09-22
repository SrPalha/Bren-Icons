import React from 'react';
import type { IconProps } from '../types';

const Messagedelay01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 15h7m-7-5h2M12 3c-.73 0-1.458.024-2.17.071-4.184.278-7.516 3.657-7.79 7.9a19.99 19.99 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184.467.845.159 1.9-.328 2.823-.35.665-.526.997-.385 1.237.14.24.455.248 1.084.263 1.245.03 2.084-.322 2.75-.813.377-.279.566-.418.696-.434.13-.016.387.09.899.3.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0 4.183-.278 7.515-3.658 7.789-7.9.031-.49.044-.992.039-1.491"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m18 6 1-1m3 1a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/> </svg>
  );
};

export default Messagedelay01;
