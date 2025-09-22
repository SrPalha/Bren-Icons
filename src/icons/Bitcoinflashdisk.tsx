import React from 'react';
import type { IconProps } from '../types';

const Bitcoinflashdisk: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.509 22c-.931 0-1.397 0-1.784-.077a4.003 4.003 0 0 1-3.148-3.143C5.5 18.394 5.5 17.93 5.5 17v-5.5c0-1.886 0-2.828.587-3.414.587-.586 1.531-.586 3.42-.586h2.004c1.888 0 2.833 0 3.42.586.405.404.53.978.569 1.914"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.625 20.5v-6m1.875 0V13m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H12.5m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H12.5m1.5-7v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.607 2 11.904 2 10.5 2c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C7 3.393 7 4.096 7 5.5v2m3-3h1"/> </svg>
  );
};

export default Bitcoinflashdisk;
