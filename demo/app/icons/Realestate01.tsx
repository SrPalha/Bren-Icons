import React from 'react';
import type { IconProps } from '../types';

const Realestate01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M21 7.485c0-1.098 0-1.646-.276-2.11-.276-.463-.785-.767-1.802-1.376l-1.294-.774c-1.597-.956-2.396-1.434-3.012-1.138C14 2.383 14 3.245 14 4.967V22h7V7.485Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 22H2M14 9h-4m4 6h-4"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M3 7.485c0-1.098 0-1.646.276-2.11.276-.463.785-.767 1.802-1.376l1.294-.774C7.97 2.269 8.768 1.79 9.384 2.087 10 2.383 10 3.245 10 4.967V22H3V7.485Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.501 8h-.009m.01 4h-.01m.01 4h-.01m11.009-8h-.009m.01 4h-.01m.01 4h-.01"/> </svg>
  );
};

export default Realestate01;
