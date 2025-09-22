import React from 'react';
import type { IconProps } from '../types';

const Borderright01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 2.5c1.094.199 1.899.55 2.535 1.17C21.5 5.1 21.5 7.4 21.5 12s0 6.9-1.465 8.33c-.636.62-1.441.972-2.535 1.17M6.31 2.751c-1.042.194-1.809.536-2.415 1.14-.606.605-.95 1.37-1.143 2.409M14 2.505c-.586-.005-1.288-.005-1.974-.005-.686 0-1.45 0-2.037.005M2.505 10.1C2.5 10.684 2.5 11.316 2.5 12c0 .684 0 1.316.005 1.9m.247 3.8c.194 1.04.537 1.804 1.143 2.409.606.604 1.373.946 2.415 1.14m7.69.246c-.586.005-1.288.005-1.974.005-.686 0-1.45 0-2.037-.005M12 2.5V4m0 16v1.5m3-9.5H9m-4.531 0H3m9-3v6"/> </svg>
  );
};

export default Borderright01;
