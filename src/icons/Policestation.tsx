import React from 'react';
import type { IconProps } from '../types';

const Policestation: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.618 7c.647.124 1.125.342 1.503.724.879.889.879 2.318.879 5.178V22H6v-9.098c0-2.86 0-4.29.879-5.178.378-.382.856-.6 1.503-.724"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 22h3c.471 0 .707 0 .854-.146C22 21.707 22 21.47 22 21v-5c0-1.886 0-2.828-.586-3.414C20.828 12 19.886 12 18 12M6 22H3c-.471 0-.707 0-.854-.146C2 21.707 2 21.47 2 21v-5c0-1.886 0-2.828.586-3.414C3.172 12 4.114 12 6 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22v-3m-3-4h1.2m4.8 0h-1.2"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8.042 4C10.966 4 12 2 12 2s1.034 2 3.958 2c.217 1.688-.305 5.65-3.958 7-3.652-1.35-4.175-5.313-3.958-7Z"/> </svg>
  );
};

export default Policestation;
