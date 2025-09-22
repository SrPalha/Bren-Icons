import React from 'react';
import type { IconProps } from '../types';

const Sink01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 14a7.053 7.053 0 0 0 6.773-5.026c.232-.782.347-1.173.045-1.573C18.515 7 18.024 7 17.04 7H6.96c-.983 0-1.474 0-1.777.4-.302.401-.187.792.045 1.574A7.053 7.053 0 0 0 12 14Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7V3.5a1.5 1.5 0 0 1 3 0V4m-6 3V6c0-.943 0-1.414-.293-1.707C9.414 4 8.943 4 8 4m6.5 10-.5 8m-4.5-8 .5 8m-2 0h8"/> </svg>
  );
};

export default Sink01;
