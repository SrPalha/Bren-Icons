import React from 'react';
import type { IconProps } from '../types';

const Locationupdate02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20 11 2 1c0-5.523-4.477-10-10-10-4.1 0-7.625 2.468-9.168 6M4 13l-2-1c0 5.523 4.477 10 10 10 4.1 0 7.625-2.468 9.168-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 7c2.435 0 4.5 2.016 4.5 4.463 0 2.485-2.098 4.23-4.037 5.415a.942.942 0 0 1-.926 0C9.601 15.681 7.5 13.957 7.5 11.463 7.5 9.016 9.565 7 12 7Z"/> </svg>
  );
};

export default Locationupdate02;
