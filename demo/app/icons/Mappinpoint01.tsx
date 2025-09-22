import React from 'react';
import type { IconProps } from '../types';

const Mappinpoint01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14.5 10c-.43-1.446-1.915-2.5-3.5-2.5A3.5 3.5 0 0 0 7.5 11c0 1.763 1.304 3.257 3 3.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19.95 10c-.48-4.466-4.39-8-8.95-8-4.87 0-9 4.033-9 8.926 0 4.988 4.204 8.436 8.073 10.83a1.886 1.886 0 0 0 1.854 0c.255-.155.51-.316.767-.481"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.5 12c2.435 0 4.5 2.017 4.5 4.463 0 2.485-2.098 4.23-4.037 5.415a.942.942 0 0 1-.927 0C15.103 20.681 13 18.957 13 16.463 13 14.016 15.065 12 17.5 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 16.5h.009"/> </svg>
  );
};

export default Mappinpoint01;
