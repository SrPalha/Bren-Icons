import React from 'react';
import type { IconProps } from '../types';

const Bitcoincloud: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 17.5a4.5 4.5 0 1 0-.022-9m0 0A5.5 5.5 0 1 0 6.52 7.523m10.957.977a5.475 5.475 0 0 1-1.235 3M6.52 7.523a5 5 0 0 0 0 9.954m0-9.954A4.978 4.978 0 0 1 10 8.5m.125 11.5v-6M12 14v-1.5m0 9V20m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H9m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H9"/> </svg>
  );
};

export default Bitcoincloud;
