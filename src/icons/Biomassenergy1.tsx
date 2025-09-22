import React from 'react';
import type { IconProps } from '../types';

const Biomassenergy1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 14.498C20 18.642 16.418 22 12 22s-8-3.359-8-7.502v-.219c0-.734 0-1.101.254-1.236C4.804 12.751 6 14 6 14M4 9.501C4 5.358 7.582 2 12 2s8 3.358 8 7.501v.22c0 .734 0 1.101-.254 1.236C19.196 11.248 18 10 18 10"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.98 11.16c-.72 1.424-1.245 3.733-.418 6.34m-.419-2.472c-4.246-3.02-1.329-6.494 1.417-8.248.331-.211.497-.317.69-.268.193.05.286.222.47.568 1.542 2.877 2.647 7.41-2.577 7.948Z"/> </svg>
  );
};

export default Biomassenergy1;
