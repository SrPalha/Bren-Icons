import React from 'react';
import type { IconProps } from '../types';

const Swiperight5: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 8h1a2 2 0 0 1 2 2m0 0v1m0-1a1 1 0 0 1 1-1 2 2 0 0 1 2 2m0 0v1m0-1c0-.524.47-.922.987-.836l.342.058A2 2 0 0 1 19 12.194v1.473c0 2.173 0 3.26-.331 4.125-.192.502-.699 1.142-1.104 1.604a2.2 2.2 0 0 0-.565 1.44V22m-7-12V3.5a1.5 1.5 0 1 0-3 0v9.962l-1.62-1.625a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l3.6 4.598C7.126 19.527 7.5 20.883 7.5 22m14-17.5h-6m6 0c0-.7-1.994-2.008-2.5-2.5m2.5 2.5c0 .7-1.994 2.008-2.5 2.5"/> </svg>
  );
};

export default Swiperight5;
