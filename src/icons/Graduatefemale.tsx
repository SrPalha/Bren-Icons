import React from 'react';
import type { IconProps } from '../types';

const Graduatefemale: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M19 10c-2.005-.632-4.412-1-7-1s-4.995.368-7 1v3.5c2.005-.632 4.412-1 7-1s4.995.368 7 1V10Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M19 11v3.261c.18 1.179.846 3.81 3 5.83-.718 1.178-3.123 3.03-7 1.01M5 11v3.261c-.18 1.179-.846 3.81-3 5.83.718 1.178 3.123 3.03 7 1.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.5 16v1.349c0 1.42-.664 2.737-1.748 3.468l-.9.607a3.264 3.264 0 0 1-3.704 0l-.9-.607C8.163 20.086 7.5 18.77 7.5 17.349V16M19 10l1.126-.593c1.263-.828 1.894-1.242 1.873-1.834-.02-.592-.679-.952-1.996-1.672l-4.728-2.583C13.668 2.439 12.865 2 12 2c-.864 0-1.668.44-3.275 1.318L3.998 5.9C2.68 6.621 2.02 6.981 2 7.573c-.02.592.611 1.006 1.874 1.834L5 10"/> </svg>
  );
};

export default Graduatefemale;
