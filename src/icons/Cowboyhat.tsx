import React from 'react';
import type { IconProps } from '../types';

const Cowboyhat: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M16.276 18c-.985 1.102-2.264 2-4.276 2s-3.29-.898-4.276-2m8.552 0c1.211-1.354 1.979-3.016 3.122-3.692M16.276 18c2.069 0 5.724.562 5.724-2.5 0-.787-.68-1.5-1.5-1.5-.282 0-.54.053-.781.15M7.724 18c-1.211-1.354-1.979-3.016-3.122-3.692M7.724 18C5.655 18 2 18.562 2 15.5c0-.787.68-1.5 1.5-1.5.282 0 .54.053.781.15m15.117.158c.103-.061.21-.115.32-.159m-.32.16.32-.16m-.32.16C18.073 14.955 15.68 16 12 16c-3.68 0-6.073-1.044-7.398-1.692m0 0a2.315 2.315 0 0 0-.32-.159m.32.16-.32-.16"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 12c0-1.505.442-5.37 2.576-7.599C8.838 4.127 9.2 4 9.567 4c.27 0 .523.144.673.384l.205.328c.347.555.93.888 1.555.888a1.84 1.84 0 0 0 1.555-.888l.205-.328A.796.796 0 0 1 14.433 4c.367 0 .729.127.991.401C17.558 6.631 18 10.495 18 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.5 10c1.416.51 2.89 1 5.5 1s4.084-.49 5.5-1"/> </svg>
  );
};

export default Cowboyhat;
