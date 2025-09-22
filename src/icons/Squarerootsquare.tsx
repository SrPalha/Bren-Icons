import React from 'react';
import type { IconProps } from '../types';

const Squarerootsquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 7.99h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.46c-.332 1.328-.503 1.524-.834 1.55-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84-.4-.11-.713.201-1.02.4m7.104-1.708c.42-.014.876-.032 1.125.384.343.693.887 2.112 1.089 2.562.1.173.162.322.521.442.27.035.66.044.66.044m.242-3.444c-.846 0-1.35.946-1.824 1.539-.61.907-1.236 1.921-2.028 1.893"/> </svg>
  );
};

export default Squarerootsquare;
