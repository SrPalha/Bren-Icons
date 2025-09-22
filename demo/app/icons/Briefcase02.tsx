import React from 'react';
import type { IconProps } from '../types';

const Briefcase02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.58 8.625c-.071-.59-.106-.885-.057-1.126.142-.689.748-1.247 1.556-1.434C4.362 6 4.717 6 5.428 6h13.144c.711 0 1.066 0 1.35.065.807.187 1.413.745 1.555 1.434.05.241.014.536-.057 1.126-.162 1.352-.92 2.091-2.369 2.517L14.88 12.37c-1.426.42-2.139.63-2.88.63-.741 0-1.454-.21-2.88-.63l-4.171-1.228c-1.448-.426-2.207-1.165-2.37-2.517Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.463 10.5-.196 2.276c-.352 4.079-.528 6.119.6 7.421C4.996 21.5 6.94 21.5 10.824 21.5h2.352c3.885 0 5.828 0 6.957-1.303 1.128-1.302.952-3.342.6-7.421l-.196-2.276"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m15.5 5.5-.077-.265c-.385-1.32-.578-1.98-1.036-2.357-.458-.378-1.067-.378-2.285-.378h-.204c-1.218 0-1.827 0-2.285.378-.458.377-.65 1.037-1.036 2.357L8.5 5.5"/> </svg>
  );
};

export default Briefcase02;
