import React from 'react';
import type { IconProps } from '../types';

const Tropicalstorm5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12.039 15a3.008 3.008 0 0 0 3.015-3c0-1.657-1.35-3-3.015-3a3.008 3.008 0 0 0-3.016 3c0 1.657 1.35 3 3.016 3Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5.227 12.12c.256-7.645 9.266-8.81 14.499-7.81.088.017.107.132.032.18l-3.522 2.246c1.593 1.814 2.55 2.837 2.65 5.104-.129 7.78-9.638 8.886-14.51 7.814-.087-.019-.103-.13-.029-.178l3.53-2.251c-1.592-1.815-2.55-2.837-2.65-5.104Z"/> </svg>
  );
};

export default Tropicalstorm5;
