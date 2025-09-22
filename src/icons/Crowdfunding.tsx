import React from 'react';
import type { IconProps } from '../types';

const Crowdfunding: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20 15c0-1.105-1.12-2-2.5-2h-11c-1.38 0-2.5.895-2.5 2m8-4v4"/> </svg>
  );
};

export default Crowdfunding;
