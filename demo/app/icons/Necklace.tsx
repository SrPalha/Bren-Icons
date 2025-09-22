import React from 'react';
import type { IconProps } from '../types';

const Necklace: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m10.542 12 .39-3.124c.091-.728.422-.876 1.11-.876.688 0 1.018.148 1.11.876l.39 3.124"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.284 12.611c1.336-.811 2.501-.484 3.201.036.287.214.43.32.515.32.085 0 .228-.106.515-.32.7-.52 1.865-.847 3.2-.036 1.753 1.065 2.15 4.578-1.892 7.542-.77.565-1.155.847-1.823.847-.668 0-1.053-.282-1.822-.847-4.042-2.964-3.646-6.477-1.894-7.542Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.006 3c-.097 1.578.97 5.043 6.047 6.662M21.994 3c.097 1.578-.97 5.043-6.047 6.662"/> </svg>
  );
};

export default Necklace;
