import React from 'react';
import type { IconProps } from '../types';

const Directionleft02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.06 5.68c.626-.827.939-1.24 1.367-1.46C8.855 4 9.343 4 10.32 4H16c.943 0 1.414 0 1.707.293C18 4.586 18 5.057 18 6v3c0 .943 0 1.414-.293 1.707C17.414 11 16.943 11 16 11h-5.679c-.978 0-1.466 0-1.894-.22-.428-.22-.741-.633-1.367-1.46l-.248-.326C6.271 8.28 6 7.922 6 7.5c0-.422.27-.78.812-1.494l.248-.327Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.06 5.68c.626-.827.939-1.24 1.367-1.46C8.855 4 9.343 4 10.32 4H16c.943 0 1.414 0 1.707.293C18 4.586 18 5.057 18 6v3c0 .943 0 1.414-.293 1.707C17.414 11 16.943 11 16 11h-5.679c-.978 0-1.466 0-1.894-.22-.428-.22-.741-.633-1.367-1.46l-.248-.326C6.271 8.28 6 7.922 6 7.5c0-.422.27-.78.812-1.494l.248-.327ZM14 21V11m0-7V3m-4 18h8"/> </svg>
  );
};

export default Directionleft02;
