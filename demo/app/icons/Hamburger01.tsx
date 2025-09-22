import React from 'react';
import type { IconProps } from '../types';

const Hamburger01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.854 4H9.146C6.65 4 4.529 5.683 3.753 8.029c-.255.772-.383 1.158-.062 1.565.32.406.843.406 1.887.406h12.844c1.044 0 1.566 0 1.887-.406.321-.407.194-.793-.062-1.565C19.471 5.683 17.35 4 14.854 4ZM4 16h-.5a1.5 1.5 0 0 1 0-3h7.894a2 2 0 0 1 1.11.336l1.941 1.294a1 1 0 0 0 1.11 0l1.941-1.294a2 2 0 0 1 1.11-.336H20.5a1.5 1.5 0 0 1 0 3H20M4 16l.432 1.728A3 3 0 0 0 7.342 20h9.316a3 3 0 0 0 2.91-2.272L20 16M4 16h7m9 0h-1.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.008 7h-.01"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.5 6.5-1 1"/> </svg>
  );
};

export default Hamburger01;
