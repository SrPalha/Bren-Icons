import React from 'react';
import type { IconProps } from '../types';

const Delete04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19.5 5.5-.402 6.506M4.5 5.5l.605 10.025c.154 2.567.232 3.85.874 4.774.317.456.726.842 1.2 1.131.671.41 1.502.533 2.821.57"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20 15-7 7m7 0-7-7"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 5.5h18m-4.944 0-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a1.994 1.994 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5"/> </svg>
  );
};

export default Delete04;
