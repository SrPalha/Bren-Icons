import React from 'react';
import type { IconProps } from '../types';

const Locationupdate1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12.808 16.683A1.183 1.183 0 0 1 12 17c-.302 0-.591-.113-.808-.317-1.986-1.87-4.647-3.96-3.349-6.993C8.545 8.05 10.23 7 12 7s3.456 1.05 4.157 2.69c1.296 3.03-1.358 5.13-3.349 6.993Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.5h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20 11 2 1c0-5.523-4.477-10-10-10-4.1 0-7.625 2.468-9.168 6M4 13l-2-1c0 5.523 4.477 10 10 10 4.1 0 7.625-2.468 9.168-6"/> </svg>
  );
};

export default Locationupdate1;
