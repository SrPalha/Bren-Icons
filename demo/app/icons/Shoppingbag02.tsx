import React from 'react';
import type { IconProps } from '../types';

const Shoppingbag02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="m3.062 15.193.365-2.071c.432-2.448.647-3.672 1.502-4.397C5.784 8 7.012 8 9.467 8h5.066c2.455 0 3.683 0 4.538.725.855.725 1.07 1.949 1.502 4.397l.365 2.071c.598 3.388.896 5.082-.023 6.194-.92 1.113-2.62 1.113-6.017 1.113H9.102c-3.398 0-5.097 0-6.017-1.113-.92-1.112-.62-2.806-.023-6.194ZM7.5 8l.168-2.014a4.347 4.347 0 0 1 8.664 0L16.5 8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M15 11c-.13 1.413-1.434 2.5-3 2.5S9.13 12.413 9 11"/> </svg>
  );
};

export default Shoppingbag02;
