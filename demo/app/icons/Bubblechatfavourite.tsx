import React from 'react';
import type { IconProps } from '../types';

const Bubblechatfavourite: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 2C6.21 2.25 2 6.435 2 11.56c0 2.54 1.033 4.848 2.719 6.56.371.378.619.893.519 1.423a5.296 5.296 0 0 1-1.087 2.35 6.496 6.496 0 0 0 4.224-.657c.454-.242.681-.363.842-.387.16-.025.39.019.848.105a10.4 10.4 0 0 0 1.935.179c5.522 0 10-4.286 10-9.572 0-.19-.006-.38-.017-.568"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.015 2.387c1.073-.64 2.009-.382 2.571.028.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028 1.408.84 1.726 3.609-1.52 5.945-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01m3.986 0H16m-8 0h.009"/> </svg>
  );
};

export default Bubblechatfavourite;
