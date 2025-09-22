import React from 'react';
import type { IconProps } from '../types';

const Certificate02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M9 5.026c-1.577-.423-4.348-1.566-5.838-.725-1.55.874-1.55 6.524 0 7.398 1.49.84 4.261-.302 5.838-.726m6-5.947c1.576-.423 4.348-1.566 5.838-.725 1.55.874 1.55 6.524 0 7.398-1.49.84-4.262-.302-5.838-.726"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m9.772 11-1.427 6.375c-.331 1.48-.497 2.22-.16 2.462 1.15.824 2.574-1.74 3.815-1.74 1.13 0 2.817 2.455 3.816 1.74.336-.241.17-.982-.161-2.462L14.228 11"/> </svg>
  );
};

export default Certificate02;
