import React from 'react';
import type { IconProps } from '../types';

const Playlistfavourite01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20.998 12c.002-.47.002.03.002-.5 0-4.478 0-6.718-1.391-8.109C18.217 2 15.979 2 11.5 2 7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21h.5"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 7h19m-4.5-5-3 5m-4-5-3 5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15.015 15.387c1.073-.64 2.009-.382 2.571.028.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028 1.408.84 1.726 3.609-1.52 5.945-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945Z"/> </svg>
  );
};

export default Playlistfavourite01;
