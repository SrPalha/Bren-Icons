import React from 'react';
import type { IconProps } from '../types';

const Scooterelectric: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6.514 18h6.775c.732 0 1.099 0 1.344-.155.245-.156.452-.596.867-1.476.235-.498.536-.958.892-1.369m0 0L4 16m12.392-1a6 6 0 0 1 2.521-1.724c.537-.191.806-.287.896-.462.09-.174.024-.415-.11-.896l-1.53-5.51c-.25-.902-.376-1.353-.646-1.68a2 2 0 0 0-.73-.555C16.405 4 15.937 4 15 4m-3.537 3-1.394 1.812a.33.33 0 0 0 .2.526l1.461.31a.33.33 0 0 1 .177.553L10.177 12"/> </svg>
  );
};

export default Scooterelectric;
