import React from 'react';
import type { IconProps } from '../types';

const Keffiyeh: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 5h12"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M17.62 7.834C16.867 4.404 14.993 2 12 2 9.007 2 7.133 4.404 6.38 7.834c-.514 2.34-1.64 4.522-2.829 6.596-.33.578-.551 1.165-.551 1.702 0 1.04.798 2.082 1.571 3.262 1.088 1.661 1.633 2.492 1.998 2.591.365.1 1.177-.306 2.8-1.119.832-.416 1.716-.697 2.631-.697.915 0 1.799.28 2.632.697 1.622.813 2.434 1.219 2.8 1.12.364-.1.909-.93 1.997-2.592.773-1.18 1.571-2.221 1.571-3.262 0-.537-.22-1.124-.551-1.702-1.19-2.074-2.315-4.257-2.829-6.596Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.5 22c.516-1.404 1.077-4.636.47-6.174-.433-1.097.104-2.195.814-3.045a4.936 4.936 0 0 0 .984-1.859C9.299 8.97 10.392 8 12 8s2.7.969 3.232 2.922a4.94 4.94 0 0 0 .985 1.86c.709.849 1.246 1.947.813 3.044-.607 1.538-.046 4.77.47 6.174"/> </svg>
  );
};

export default Keffiyeh;
