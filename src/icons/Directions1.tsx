import React from 'react';
import type { IconProps } from '../types';

const Directions1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.919 4.44c.542-.708.813-1.062 1.184-1.251C6.473 3 6.898 3 7.745 3h2.416c.867 0 1.3 0 1.57.293C12 3.586 12 4.057 12 5v4H7.745c-.847 0-1.271 0-1.642-.189-.37-.189-.642-.543-1.184-1.25l-.215-.28C4.234 6.667 4 6.361 4 6c0-.362.235-.668.704-1.28l.215-.28Zm14.162 5c-.542-.708-.813-1.062-1.184-1.251C17.527 8 17.102 8 16.255 8H12v6h4.255c.847 0 1.271 0 1.642-.189.37-.189.642-.543 1.184-1.25l.215-.28c.47-.613.704-.919.704-1.281 0-.362-.235-.668-.704-1.28l-.215-.28ZM12 21V4M9 21h6"/> </svg>
  );
};

export default Directions1;
