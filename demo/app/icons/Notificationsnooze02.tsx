import React from 'react';
import type { IconProps } from '../types';

const Notificationsnooze02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 2.149A7.584 7.584 0 0 0 12 2C7.844 2 4.475 5.358 4.475 9.5c0 1.072-.062 2.08-.69 3.003-.478.697-1.124 1.41-1.255 2.267-.213 1.394.738 2.361 1.902 2.843 4.463 1.85 10.673 1.85 15.136 0 1.164-.482 2.115-1.45 1.902-2.843-.1-.655-.5-1.226-.898-1.77"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.016 4h3.672c.773 0 1.16 0 1.262.24.103.24-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104.103.24.634.24 1.407.24H21M8 19c.458 1.725 2.075 3 4 3 1.925 0 3.541-1.275 4-3"/> </svg>
  );
};

export default Notificationsnooze02;
