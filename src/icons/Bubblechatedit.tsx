import React from 'react';
import type { IconProps } from '../types';

const Bubblechatedit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01M8 12h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 11.567c0 5.283-4.478 9.566-10 9.566a10.46 10.46 0 0 1-1.935-.178c-.459-.087-.688-.13-.848-.105-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567 2 6.284 6.478 2 12 2c.685 0 1.354.066 2 .191"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.839 2.476.692.693a1.5 1.5 0 0 1 0 2.121l-3.627 3.696a2 2 0 0 1-1.047.552l-2.249.488a.5.5 0 0 1-.595-.594l.479-2.235a2 2 0 0 1 .552-1.047l3.673-3.674a1.5 1.5 0 0 1 2.122 0Z"/> </svg>
  );
};

export default Bubblechatedit;
