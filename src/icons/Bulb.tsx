import React from 'react';
import type { IconProps } from '../types';

const Bulb: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.143 14A7.822 7.822 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.82 7.82 0 0 1 18.857 14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M14 10c-.613.643-1.289 1-2 1-.711 0-1.387-.357-2-1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527-.17.511-.255.767-.386.974a1.993 1.993 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a1.993 1.993 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974ZM15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15.5V11"/> </svg>
  );
};

export default Bulb;
