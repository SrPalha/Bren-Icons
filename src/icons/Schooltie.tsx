import React from 'react';
import type { IconProps } from '../types';

const Schooltie: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.946 6 9.584 17.085c-.188.883-.085 1.213.563 1.846l2.62 2.562c.346.338.518.507.733.507.215 0 .387-.169.733-.507l2.62-2.561c.648-.634.751-.964.563-1.846L15.054 6m-4.497-2.876c-.068-.524-.101-.786.052-.955.154-.169.426-.169.97-.169h3.843c.543 0 .815 0 .969.17.153.168.12.43.052.954l-.05.395c-.143 1.108-.214 1.662-.57 2.021a1.509 1.509 0 0 1-.188.161C15.224 6 14.649 6 13.5 6c-1.15 0-1.724 0-2.135-.299a1.534 1.534 0 0 1-.187-.16c-.357-.36-.428-.914-.57-2.022l-.051-.395Z"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M10 15c-.608.693-1.122 1-1.5 1-.484 0-1.356-1.22-1.743-2.105-.182-.414-.273-.622-.255-.884.018-.263.137-.454.375-.838C8.222 10.003 10.515 8.02 12 6"/> </svg>
  );
};

export default Schooltie;
