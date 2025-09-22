import React from 'react';
import type { IconProps } from '../types';

const Hdd: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M20 14v-4c0-3.771 0-5.657-1.103-6.828C17.795 2 16.02 2 12.471 2h-.942C7.98 2 6.205 2 5.103 3.172 4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.103 6.828C6.205 22 7.98 22 11.529 22h.942c3.549 0 5.324 0 6.426-1.172C20 19.657 20 17.771 20 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8.8 12.665a4.5 4.5 0 1 0 6.4-6.329 4.5 4.5 0 0 0-6.398 6.329Zm0 0 3.2-3.2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19h4"/> </svg>
  );
};

export default Hdd;
