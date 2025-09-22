import React from 'react';
import type { IconProps } from '../types';

const Bubblechatdone: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2C6.478 2 2 6.284 2 11.567c0 2.538 1.033 4.845 2.719 6.556.371.377.619.892.519 1.422a5.292 5.292 0 0 1-1.087 2.348 6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.842-.386.16-.025.39.018.848.104.638.12 1.286.18 1.935.18 5.522 0 10-4.284 10-9.567 0-.89-.127-1.75-.364-2.567"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 6s1 0 2 2c0 0 3.177-5 6-6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01m3.986 0H16m-8 0h.009"/> </svg>
  );
};

export default Bubblechatdone;
