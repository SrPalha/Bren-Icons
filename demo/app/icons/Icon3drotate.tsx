import React from 'react';
import type { IconProps } from '../types';

const Icon3drotate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="3-d-rotate"> <path id="Vector" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M2 12C7.18491 16.8269 16.4642 16.3877 22 12.3556" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M11.5368 2C6.98947 6.5 6.48416 17 11.9941 22" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Icon3drotate;
