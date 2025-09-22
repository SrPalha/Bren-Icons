import React from 'react';
import type { IconProps } from '../types';

const Keyframeleft2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M18.997 10.69c.669.605 1.003.907 1.003 1.31s-.334.705-1.003 1.31l-1.643 1.485C16.464 15.598 16.02 16 15.5 16s-.965-.402-1.854-1.205l-1.644-1.486C11.335 12.705 11 12.403 11 12c0-.403.334-.705 1.002-1.31l1.644-1.485C14.536 8.402 14.98 8 15.5 8s.965.402 1.854 1.205l1.643 1.486Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M18.997 10.69c.669.605 1.003.907 1.003 1.31s-.334.705-1.003 1.31l-1.643 1.485C16.464 15.598 16.02 16 15.5 16s-.965-.402-1.854-1.205l-1.644-1.486C11.335 12.705 11 12.403 11 12c0-.403.334-.705 1.002-1.31l1.644-1.485C14.536 8.402 14.98 8 15.5 8s.965.402 1.854 1.205l1.643 1.486Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12H4m0-9v18"/> </svg>
  );
};

export default Keyframeleft2;
