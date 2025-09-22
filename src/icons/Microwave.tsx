import React from 'react';
import type { IconProps } from '../types';

const Microwave: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 15V7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7v8c0 1.886 0 2.828-.586 3.414C20.828 19 19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586C2 17.828 2 16.886 2 15Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 6.009V6m0 3.004v-.008M19 12v-.009"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M5 14V8c0-.943 0-1.414.293-1.707C5.586 6 6.057 6 7 6h7c.943 0 1.414 0 1.707.293C16 6.586 16 7.057 16 8v6c0 .943 0 1.414-.293 1.707C15.414 16 14.943 16 14 16H7c-.943 0-1.414 0-1.707-.293C5 15.414 5 14.943 5 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5 19v2m14-2v2"/> </svg>
  );
};

export default Microwave;
