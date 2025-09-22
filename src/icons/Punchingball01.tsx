import React from 'react';
import type { IconProps } from '../types';

const Punchingball01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12.002 22c-3.59 0-6.5-2.182-6.5-5.49 0-2.85 2.41-4.863 3.771-8.555.173-.469.26-.703.326-.825.355-.654.856-.985 1.642-1.084a6.352 6.352 0 0 1 1.522 0c.786.099 1.287.43 1.642 1.084.067.122.153.356.326.825 1.361 3.692 3.771 5.706 3.771 8.554 0 3.308-2.91 5.491-6.5 5.491Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M9.955 14c-1.023 1.778-.302 8 2.046 8 2.345 0 3.073-6.222 2.048-8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V3.5m0 0 .915-.229A2.43 2.43 0 0 0 14.5 2M12 3.5l-.915-.229A2.43 2.43 0 0 1 9.5 2m5.502 7h-6"/> </svg>
  );
};

export default Punchingball01;
