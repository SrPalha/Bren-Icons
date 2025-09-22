import React from 'react';
import type { IconProps } from '../types';

const Lamp03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.594 10H9.406c-1.896 0-2.844 0-3.245-.548-.402-.549-.013-1.312.765-2.837l1.391-2.728c.467-.916.701-1.374 1.15-1.63C9.918 2 10.488 2 11.626 2h.75c1.139 0 1.708 0 2.157.256.45.257.684.715 1.15 1.63l1.392 2.73c.778 1.524 1.167 2.287.765 2.836-.401.548-1.35.548-3.245.548ZM12 10v9m-4 3h8m-7 0 .368-1.103c.28-.839.419-1.258.726-1.526a1.5 1.5 0 0 1 .228-.165C10.673 19 11.116 19 12 19c.884 0 1.327 0 1.678.206a1.5 1.5 0 0 1 .228.165c.307.268.447.687.726 1.526L15 22m.5-12v3"/> </svg>
  );
};

export default Lamp03;
