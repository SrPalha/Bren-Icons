import React from 'react';
import type { IconProps } from '../types';

const Breastpump: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.214 22h2.572c1.61 0 2.414 0 2.961-.436.117-.094.223-.2.317-.317.436-.547.436-1.352.436-2.961V14a5 5 0 0 0-10 0v4.286c0 1.61 0 2.414.436 2.961a2 2 0 0 0 .317.317C8.8 22 9.605 22 11.214 22ZM15 14h2.5M15 18h2.5m-5-9V6M15 6H9c-.488 0-.732 0-.963.027A4 4 0 0 0 5.6 7.246c-.16.168-.306.364-.599.754"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M4.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 6c1.02-.509 2.6-1.824 3.34-2.71C18.87 2.657 19.5 2 21 2v8c-1.5 0-2.13-.657-2.66-1.29C17.6 7.822 16.02 6.507 15 6Z"/> </svg>
  );
};

export default Breastpump;
