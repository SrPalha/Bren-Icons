import React from 'react';
import type { IconProps } from '../types';

const Aiinnovation01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 2C6.582 2 3 5.545 3 9.919c0 1.493.417 2.89 1.143 4.081"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 5h-2c-.943 0-1.414 0-1.707.293C13 5.586 13 6.057 13 7v2c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293C19 10.414 19 9.943 19 9V7c0-.943 0-1.414-.293-1.707C18.414 5 17.943 5 17 5Zm-2.5 6v2m3-2v2m-3-10v2m3-2v2M13 6.5h-2m2 3h-2m10-3h-2m2 3h-2"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527-.17.511-.255.767-.386.974a1.993 1.993 0 0 1-1.2.869c-.238.059-.506.059-1.043.059H9.012c-.537 0-.806 0-1.043-.06a1.993 1.993 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974ZM14 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C12.082 22 11.72 22 11 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L8 19"/> </svg>
  );
};

export default Aiinnovation01;
