import React from 'react';
import type { IconProps } from '../types';

const Smartwatch02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M7 11c0-1.886 0-2.828.586-3.414C8.172 7 9.114 7 11 7h2c1.886 0 2.828 0 3.414.586C17 8.172 17 9.114 17 11v2c0 1.886 0 2.828-.586 3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414-.586C7 15.828 7 14.886 7 13v-2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 7s.689-1.34.844-3c.084-.899.126-1.349.38-1.603.253-.255.559-.285 1.17-.345a11.56 11.56 0 0 1 2.212 0c.611.06.917.09 1.17.345.254.254.296.704.38 1.604A9.148 9.148 0 0 0 15.5 7m0 10s-.689 1.34-.844 3c-.084.899-.126 1.349-.38 1.603-.253.255-.559.285-1.17.345a11.56 11.56 0 0 1-2.212 0c-.611-.06-.917-.09-1.17-.345-.254-.254-.296-.704-.38-1.604C9.19 18.34 8.5 17 8.5 17"/> </svg>
  );
};

export default Smartwatch02;
