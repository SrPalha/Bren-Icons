import React from 'react';
import type { IconProps } from '../types';

const Pizza01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="m10.22 18.821 8.46-5.69c1.445-.972 2.167-1.458 2.299-2.343.13-.885-.344-1.48-1.293-2.67-2.178-2.73-5.138-4.765-8.524-5.737-1.288-.37-1.932-.554-2.622-.162s-.916 1.157-1.367 2.687l-2.767 9.397c-1.294 4.396-1.941 6.595-.858 7.436 1.083.842 2.946-.412 6.672-2.918Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.5 5s.538.118 1.4.381c2.732.835 5.17 2.452 7.1 4.62"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.008 11h-.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.284 7.954c1.075.295 1.76 1.278 1.76 2.473 0 1.667-1.62 2.941-3.22 2.487"/>   <path stroke="#1B1C1B" strokeLinecap="round" d="M8.223 18.748c-.552-.969-.401-2.24.444-3.085 1.009-1.009 2.625-1.028 3.61-.043.165.165.302.348.411.543"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M12.923 16.993c-.296-1.145-1.265-1.984-2.414-1.984-1.385 0-2.507 1.219-2.507 2.722 0 .797.315 1.513.817 2.011"/> </svg>
  );
};

export default Pizza01;
