import React from 'react';
import type { IconProps } from '../types';

const Notificationsnooze03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 11.845c.063.118.134.234.214.349.48.676 1.125 1.368 1.256 2.2.213 1.353-.738 2.292-1.902 2.76-4.463 1.795-10.673 1.795-15.136 0-1.164-.468-2.115-1.407-1.902-2.76.13-.832.777-1.524 1.256-2.2.627-.897.689-1.874.69-2.915C4.475 5.26 7.843 2 12 2c.514 0 1.015.05 1.5.145"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.016 3h3.672c.773 0 1.16 0 1.262.24.103.24-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104.103.24.634.24 1.407.24H21M9 21c.796.622 1.848 1 3 1s2.204-.378 3-1"/> </svg>
  );
};

export default Notificationsnooze03;
