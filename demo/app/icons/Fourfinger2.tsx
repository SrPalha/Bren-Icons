import React from 'react';
import type { IconProps } from '../types';

const Fourfinger2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.892 9.356 5.474 11.96c-.322.332-.898 1.198-.967 1.991-.073.834.679 2.031.967 2.49.752 1.194 1.055 1.856 1.934 2.987.478.613 1.769 1.837 3.87 1.991 1.567.115 3.128.105 3.868 0 .508-.072 1.74-.299 2.901-1.494 1.161-1.194 1.451-3.153 1.451-3.982V7.976c0-.498-.29-1.494-1.45-1.494-1.161 0-1.451.996-1.451 1.494v3.485m-8.705 2.49V5.983c0-.498.29-1.494 1.45-1.494 1.161 0 1.452.996 1.452 1.494m0 0v4.481m0-4.48V3.992c0-.498.29-1.494 1.45-1.494 1.161 0 1.451.996 1.451 1.494v1.991m0 0v4.481m0-4.48c0-.499.29-1.495 1.45-1.495 1.162 0 1.452.996 1.452 1.494v2.49"/> </svg>
  );
};

export default Fourfinger2;
