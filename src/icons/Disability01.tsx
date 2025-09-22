import React from 'react';
import type { IconProps } from '../types';

const Disability01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 18h-1.323c-.328 0-.492 0-.619-.086s-.188-.238-.31-.543l-.497-1.242c-.121-.305-.182-.457-.31-.543-.126-.086-.29-.086-.618-.086H13.5c-.471 0-.707 0-.854-.146-.146-.147-.146-.383-.146-.854v-4m0 0V8m0 2.5h3.889M12.5 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.558 10c-2.87.48-5.058 2.964-5.058 5.958C4.5 19.295 7.217 22 10.57 22a6.07 6.07 0 0 0 4.93-2.517"/> </svg>
  );
};

export default Disability01;
