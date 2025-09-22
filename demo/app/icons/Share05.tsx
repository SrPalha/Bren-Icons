import React from 'react';
import type { IconProps } from '../types';

const Share05: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18 7c.774.16 1.359.429 1.828.876C21 8.992 21 10.788 21 14.38c0 3.592 0 5.388-1.172 6.504C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.116C3 19.768 3 17.972 3 14.38c0-3.592 0-5.388 1.172-6.504C4.642 7.429 5.226 7.16 6 7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.025 2 12 14m.025-12a.685.685 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2a.7.7 0 0 1 .422.174C13.353 2.94 15 4.93 15 4.93"/> </svg>
  );
};

export default Share05;
