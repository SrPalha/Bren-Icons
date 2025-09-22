import React from 'react';
import type { IconProps } from '../types';

const Cash02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 18c-1.332.622-3.083 1-5 1-1.066 0-2.08-.117-3-.327-.591-.136-.887-.203-1.241-.484a2.367 2.367 0 0 1-.565-.709C2 17.073 2 16.677 2 15.886V5.114c0-.985 1.04-1.661 2-1.441.92.21 1.934.327 3 .327 1.917 0 3.668-.378 5-1 1.332-.622 3.083-1 5-1 1.066 0 2.08.117 3 .327.591.136.887.204 1.241.484.202.16.454.476.565.709.194.408.194.803.194 1.594v10.772c0 .985-1.04 1.661-2 1.441-.92-.21-1.934-.327-3-.327-1.917 0-3.668.378-5 1Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 21c1.333.622 3.083 1 5 1 1.917 0 3.668-.378 5-1 1.332-.622 3.083-1 5-1 1.917 0 3.668.378 5 1"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.5 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.5 11.5v.009m13-2.017v.01"/> </svg>
  );
};

export default Cash02;
