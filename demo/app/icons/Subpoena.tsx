import React from 'react';
import type { IconProps } from '../types';

const Subpoena: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m4.5 3 1.325 2.12c.574.919.862 1.379 1.314 1.63.452.25.994.25 2.078.25h5.566c1.084 0 1.626 0 2.078-.25.452-.251.74-.711 1.314-1.63L19.5 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.75 15.25c1.187 1.187 2.75 2.393 2.75 2.393l2.143-2.143s-1.206-1.563-2.393-2.75c-1.187-1.187-2.75-2.393-2.75-2.393L9.357 12.5s1.206 1.563 2.393 2.75Zm0 0L8 19m9-3.857L14.143 18m-2.286-8L9 12.857"/> </svg>
  );
};

export default Subpoena;
