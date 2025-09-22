import React from 'react';
import type { IconProps } from '../types';

const Notificationblock02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 2.424A7.535 7.535 0 0 0 11.5 2C7.344 2 3.975 5.358 3.975 9.5c0 1.072-.062 2.08-.69 3.003-.478.697-1.124 1.41-1.255 2.267-.213 1.394.738 2.361 1.902 2.843 4.463 1.85 10.673 1.85 15.136 0 1.164-.482 2.115-1.45 1.902-2.843-.1-.655-.5-1.226-.898-1.77"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m15.05 5.05 4.9 4.9M21 7.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 19c.458 1.725 2.076 3 4 3 1.925 0 3.541-1.275 4-3"/> </svg>
  );
};

export default Notificationblock02;
