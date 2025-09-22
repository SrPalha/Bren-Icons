import React from 'react';
import type { IconProps } from '../types';

const Handcuffs: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 14.167C2 17.388 4.686 20 8 20s6-2.612 6-5.833c0-1.98-1.014-3.729-2.565-4.783-.309-.21-.435-.386-.435-.772 0-.803 0-1.205-.133-1.522C10.415 6.01 9.34 6 8.314 6h-.628c-1.026 0-2.1.01-2.553 1.09C5 7.407 5 7.809 5 8.612c0 .367-.116.554-.435.772C3.014 10.438 2 12.187 2 14.167Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.51 8.066c.374-.064.779-.066 1.177-.066h.628c1.026 0 2.1.01 2.553 1.09.133.317.133.719.133 1.522 0 .386.126.561.435.772 1.55 1.054 2.565 2.803 2.565 4.783C22 19.388 19.315 22 16 22a6.112 6.112 0 0 1-2.76-.653M8 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.115 17.997a2 2 0 0 0 .884-3.73M16 9V6.933c0-1.651 0-2.477-.424-3.074-.423-.598-1.15-.798-2.606-1.199l-.12-.033c-2.173-.598-3.26-.897-4.01-.308a2.04 2.04 0 0 0-.138.119C8 3.097 8 4.33 8 6.798"/> </svg>
  );
};

export default Handcuffs;
