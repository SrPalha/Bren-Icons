import React from 'react';
import type { IconProps } from '../types';

const Cash01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M21 21c-.272.203-.571.38-.894.527-1.04.473-2.414.473-5.163.473H9.057c-2.749 0-4.123 0-5.163-.473A4.805 4.805 0 0 1 3 21"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 10c0-3.537 0-5.306 1.053-6.487.168-.189.354-.364.554-.522C4.862 2 6.741 2 10.5 2h3c3.759 0 5.638 0 6.892.99.201.16.387.334.555.523C22 4.693 22 6.463 22 10s0 5.306-1.053 6.487a4.376 4.376 0 0 1-.555.522C19.138 18 17.26 18 13.5 18h-3c-3.759 0-5.638 0-6.893-.99a4.377 4.377 0 0 1-.554-.523C2 15.307 2 13.537 2 10Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 10h-.009M5.5 10h-.01"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M14.551 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/> </svg>
  );
};

export default Cash01;
