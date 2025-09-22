import React from 'react';
import type { IconProps } from '../types';

const Tictactoe: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="tic-tac-toe"> <path id="Vector" d="M12 2V22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M22 12H2" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M8 18.5C8 19.8807 6.88071 21 5.5 21C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16C6.88071 16 8 17.1193 8 18.5Z" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_4" d="M16 3L21 8M21 3L16 8" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Tictactoe;
