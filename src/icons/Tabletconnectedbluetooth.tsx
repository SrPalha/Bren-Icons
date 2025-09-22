import React from 'react';
import type { IconProps } from '../types';

const Tabletconnectedbluetooth: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.356 12.051 2.769 1.91c.582.402.874.604.875.87.001.267-.288.47-.866.876l-.576.405c-.953.67-1.43 1.004-1.816.852-.386-.153-.386-.676-.386-1.721V12.05Zm0 0L17.28 12m.075.051v-.102M17.28 12 14 9.736M17.281 12l.075-.051M17.28 12 14 14.264m3.356-2.315 2.769-1.91c.582-.403.874-.603.875-.87.001-.267-.288-.47-.866-.876l-.576-.405c-.953-.67-1.43-1.004-1.816-.852-.386.153-.386.676-.386 1.721v3.192Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 19.682C19.66 21 17.502 21 13.187 21h-2.034c-4.315 0-6.472 0-7.813-1.318C2 18.364 2 16.242 2 12c0-4.243 0-6.364 1.34-7.682C4.68 3 6.838 3 11.153 3h2.034C17.502 3 19.66 3 21 4.318"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 3.5v17"/> </svg>
  );
};

export default Tabletconnectedbluetooth;
