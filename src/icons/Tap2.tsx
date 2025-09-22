import React from 'react';
import type { IconProps } from '../types';

const Tap2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.25 22.002c.03-1.865-.037-1.48.116-1.954.152-.474.743-1.299 1.108-2.348 1.023-2.94.478-4.145-1.036-5.082-1.595-.986-3.206-1.369-4.617-1.247V6.735c0-.962-.546-1.705-1.509-1.705-.963 0-1.45.838-1.45 1.8l.051 4.835m0 0-2.08 2.066c-1.105 1.15-.806 1.975-.757 2.328.275.757.27.84 1.471 2.578 1.09 1.576 1.348 1.912 1.348 2.697v.668m.018-10.337v3.527"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.498 6.023c-.066-.92.5-2.74 2.053-3.5.64-.39 2.399-.993 4.08.081 1.657 1.06 1.769 2.62 1.873 3.409"/> </svg>
  );
};

export default Tap2;
