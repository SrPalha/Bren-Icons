import React from 'react';
import type { IconProps } from '../types';

const Dentalbraces: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6c.5.5 1.503.412 3-.824m0 0c-.221-.182-.451-.39-.689-.626-2.306-2.284-5.446-1.837-6.917 0C3.378 5.82.778 8.98 7.142 20.24c.264.466.789.76 1.354.76.902 0 1.607-.72 1.636-1.56.063-1.782.408-3.837 1.868-3.837 1.46 0 1.806 2.055 1.868 3.837.029.84.734 1.56 1.636 1.56.565 0 1.09-.294 1.354-.76 6.364-11.261 3.764-14.42 2.748-15.69-1.471-1.837-4.611-2.284-6.917 0-.238.236-.468.444-.689.626Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M10.387 9.387c-.516.516-.516 2.71 0 3.226s2.71.516 3.226 0 .516-2.71 0-3.226-2.71-.516-3.226 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M10 11H4m16 0h-6"/> </svg>
  );
};

export default Dentalbraces;
