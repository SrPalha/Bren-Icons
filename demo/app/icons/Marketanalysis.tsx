import React from 'react';
import type { IconProps } from '../types';

const Marketanalysis: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 16V8c0-.943 0-1.414-.293-1.707C13.414 6 12.943 6 12 6c-.943 0-1.414 0-1.707.293C10 6.586 10 7.057 10 8v8c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293.943 0 1.414 0 1.707-.293C14 17.414 14 16.943 14 16Zm7-7V7c0-.943 0-1.414-.293-1.707C20.414 5 19.943 5 19 5c-.943 0-1.414 0-1.707.293C17 5.586 17 6.057 17 7v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293.943 0 1.414 0 1.707-.293C21 10.414 21 9.943 21 9ZM7 14v-2c0-.943 0-1.414-.293-1.707C6.414 10 5.943 10 5 10c-.943 0-1.414 0-1.707.293C3 10.586 3 11.057 3 12v2c0 .943 0 1.414.293 1.707C3.586 16 4.057 16 5 16c.943 0 1.414 0 1.707-.293C7 15.414 7 14.943 7 14Zm5 7v-3m7-5v-2m-7-5V3m7 2V3M5 18v-2m0-6V8"/> </svg>
  );
};

export default Marketanalysis;
