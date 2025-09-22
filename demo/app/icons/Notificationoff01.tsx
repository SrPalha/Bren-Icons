import React from 'react';
import type { IconProps } from '../types';

const Notificationoff01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.005 19H4.8C3.781 19 3 18.15 3 17.153c0-.726.342-1.41.922-1.845 1.248-.935 1.163-2.421 1.237-3.817C5.247 9.816 5.931 8.141 7 7m2.5-1.5a6.474 6.474 0 0 1 2.502-.5 6.852 6.852 0 0 1 6.844 6.491c.074 1.396-.01 2.882 1.237 3.817.54.405.873 1.024.917 1.692"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.5 3.125C10.5 3.953 11.172 5 12 5s1.5-1.047 1.5-1.875C13.5 2.297 12.828 2 12 2s-1.5.297-1.5 1.125Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19a3 3 0 1 1-6 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 22 2 2"/> </svg>
  );
};

export default Notificationoff01;
