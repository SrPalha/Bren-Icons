import React from 'react';
import type { IconProps } from '../types';

const Exchange03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.125 20.5v-6m1.875 0V13m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H15m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H15M11 5c2.828 0 5.243 0 6.121.799C18 6.598 18 7.429 18 10l-2-1m-4 11c-2.828 0-5.243 0-6.121-.799C5 18.402 5 17.571 5 15l2 1"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.5 3.25c-1.38 0-2.5.84-2.5 1.875C3 6.161 4.12 7 5.5 7S8 7.84 8 8.875c0 1.036-1.12 1.875-2.5 1.875m0-7.5c1.089 0 2.015.522 2.358 1.25M5.5 3.25V2m0 8.75c-1.089 0-2.015-.522-2.358-1.25M5.5 10.75V12"/> </svg>
  );
};

export default Exchange03;
