import React from 'react';
import type { IconProps } from '../types';

const Temperature1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8"/> </svg>
  );
};

export default Temperature1;
