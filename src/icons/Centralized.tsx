import React from 'react';
import type { IconProps } from '../types';

const Centralized: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.737-.737L21.5 2.5m-3.763 3.763c-.44-.44-.154-2.242-.04-3.263m.04 3.263c.44.44 2.242.154 3.263.04M6.263 17.737 2.5 21.5m3.763-3.763c-.44-.44-2.242-.154-3.263-.04m3.263.04c.44.44.154 2.242.04 3.263m11.434-3.263L21.5 21.5m-3.763-3.763c.44-.44 2.242-.154 3.263-.04m-3.263.04c-.44.44-.154 2.242-.04 3.263M6.263 6.263 2.5 2.5m3.763 3.763c.44-.44.154-2.242.04-3.263m-.04 3.263c-.44.44-2.242.154-3.263.04"/> </svg>
  );
};

export default Centralized;
