import React from 'react';
import type { IconProps } from '../types';

const Saveenergy2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3.5V2m0 1.5c-.94 0-4.472 3.793-5.028 8.704M12 3.5c.94 0 4.472 3.793 5.028 8.704M12 3.5c4.937 0 9.055 3.436 10 8-1.388 1.2-3.893.97-4.972.704M12 3.5c-4.937 0-9.055 3.436-10 8 1.388 1.2 3.893.97 4.972.704m0 0A10.32 10.32 0 0 0 12 13.5a10.32 10.32 0 0 0 5.028-1.296M18.5 15 16 18.5h4L17.5 22"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13.5v7a1.5 1.5 0 0 1-3 0V20"/> </svg>
  );
};

export default Saveenergy2;
