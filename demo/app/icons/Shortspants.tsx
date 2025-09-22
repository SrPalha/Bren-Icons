import React from 'react';
import type { IconProps } from '../types';

const Shortspants: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.988 15.123-.731 5.102c-.234 1.629-.624 1.922-2.256 1.718l-4.209-.524c-1.586-.198-1.89-.565-1.768-2.159l.736-9.54c.057-.737.086-1.106.158-1.467.185-.914.694-1.717.904-2.618.122-.524.08-1.08.08-1.616C3.901 2.346 4.252 2 5.925 2h12.148c1.673 0 2.025.346 2.025 2.019 0 .537-.043 1.092.079 1.616.21.9.72 1.704.903 2.618.716 3.553.616 7.4.895 11.008.123 1.593-.182 1.96-1.768 2.158l-4.21.524c-1.631.204-2.021-.09-2.255-1.718l-.73-5.102"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13.5c.76.76 1.198 1.5 2.328 1.5h1.344c1.13 0 1.567-.74 2.328-1.5M4 5h16M3 11c4 .007 4-3.998 4-6m10 0c0 2.002 0 6.007 4 6"/> </svg>
  );
};

export default Shortspants;
