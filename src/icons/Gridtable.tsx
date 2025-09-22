import React from 'react';
import type { IconProps } from '../types';

const Gridtable: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="grid-table"> <path id="Vector" d="M3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088Z" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M2.5 9H21.5" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_3" d="M2.5 15H21.5" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_4" d="M16 21.5V2.5" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_5" d="M8 21.5V2.5" stroke="#1B1C1B" strokeWidth="1.5"/> </g> </svg>
  );
};

export default Gridtable;
