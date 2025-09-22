import React from 'react';
import type { IconProps } from '../types';

const Factory1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13.5V9c0-.943 0-1.414-.293-1.707C8.414 7 7.943 7 7 7H5c-.943 0-1.414 0-1.707.293C3 7.586 3 8.057 3 9v9c0 1.886 0 2.828.586 3.414C4.172 22 5.114 22 7 22h2m0-8.5 3.317-1.658c1.1-.55 1.65-.826 2.077-.643a1 1 0 0 1 .252.155c.354.3.354.915.354 2.146l3.106-1.553c1.297-.648 1.945-.973 2.42-.68.474.293.474 1.019.474 2.47V18c0 1.886 0 2.828-.586 3.414C19.828 22 18.886 22 17 22H9m0-8.5V22M3 10h6m4-8H8c-.943 0-1.414 0-1.707.293C6 2.586 6 3.057 6 4m10-2h1m-6 3h6"/> </svg>
  );
};

export default Factory1;
