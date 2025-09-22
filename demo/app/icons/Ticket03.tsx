import React from 'react';
import type { IconProps } from '../types';

const Ticket03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M22 8.879c-.067-1.542-.254-2.546-.78-3.34a4.658 4.658 0 0 0-1.109-1.174C18.945 3.5 17.3 3.5 14.008 3.5H9.993c-3.291 0-4.937 0-6.103.865-.432.32-.807.717-1.11 1.174-.525.794-.712 1.798-.78 3.34-.01.263.216.465.465.465 1.386 0 2.51 1.189 2.51 2.656s-1.124 2.656-2.51 2.656c-.249 0-.476.202-.464.466.067 1.541.254 2.545.78 3.34a4.66 4.66 0 0 0 1.109 1.173c1.166.865 2.812.865 6.103.865h4.015c3.291 0 4.937 0 6.103-.865.432-.32.807-.717 1.11-1.174.525-.794.712-1.798.779-3.34V8.88Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 12h4m-8 4h8"/> </svg>
  );
};

export default Ticket03;
