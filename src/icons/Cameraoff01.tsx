import React from 'react';
import type { IconProps } from '../types';

const Cameraoff01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 6c-.64.026-1.033.09-1.419.25a3.5 3.5 0 0 0-1.803 1.697c-.306.626-.356 1.428-.456 3.032l-.157 2.513c-.249 3.989-.373 5.983.81 7.245C4.16 22 6.156 22 10.146 22h3.965c3.693 0 5.676 0 6.89-1.001M17 7l-.41-1m0 0-.496-1.215c-.395-.963-.74-2.043-1.737-2.525C13.82 2 13.175 2 11.884 2s-1.937 0-2.473.26C8.677 2.615 8.313 3.272 8 4m8.59 2H17c1.22.004 1.896.033 2.451.266a3.47 3.47 0 0 1 1.78 1.696c.303.625.352 1.426.451 3.028l.155 2.51c.101 1.643.181 2.946.16 4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.5 10.837a3.5 3.5 0 1 0 4.663 4.663"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m2 2 20 20"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h.009"/> </svg>
  );
};

export default Cameraoff01;
