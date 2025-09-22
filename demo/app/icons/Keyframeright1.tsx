import React from 'react';
import type { IconProps } from '../types';

const Keyframeright1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M5.003 13.31C4.334 12.704 4 12.402 4 12s.334-.705 1.003-1.31l1.643-1.485C7.536 8.402 7.98 8 8.5 8s.965.402 1.854 1.205l1.644 1.486C12.665 11.295 13 11.597 13 12c0 .403-.334.705-1.002 1.31l-1.644 1.485C9.464 15.598 9.02 16 8.5 16s-.965-.402-1.854-1.205l-1.643-1.486Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5.003 13.31C4.334 12.704 4 12.402 4 12s.334-.705 1.003-1.31l1.643-1.485C7.536 8.402 7.98 8 8.5 8s.965.402 1.854 1.205l1.644 1.486C12.665 11.295 13 11.597 13 12c0 .403-.334.705-1.002 1.31l-1.644 1.485C9.464 15.598 9.02 16 8.5 16s-.965-.402-1.854-1.205l-1.643-1.486Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12h4m0 9V3"/> </svg>
  );
};

export default Keyframeright1;
