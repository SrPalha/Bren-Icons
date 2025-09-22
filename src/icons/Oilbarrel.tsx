import React from 'react';
import type { IconProps } from '../types';

const Oilbarrel: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 6c4.418 0 8-.895 8-2s-3.582-2-8-2-8 .895-8 2 3.582 2 8 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12.5a1.5 1.5 0 0 0 1.5-1.5c0-1-1.5-2.5-1.5-2.5S10.5 10 10.5 11a1.5 1.5 0 0 0 1.5 1.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5v5.546c.637.431 1 .927 1 1.454 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.527.363-1.023 1-1.454V5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 13.5v4.047c.637.43 1 .926 1 1.453 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.527.363-1.023 1-1.453V13.5"/> </svg>
  );
};

export default Oilbarrel;
