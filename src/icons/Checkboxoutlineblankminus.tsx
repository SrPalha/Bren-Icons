import React from 'react';
import type { IconProps } from '../types';

const Checkboxoutlineblankminus: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none">   <g class="checkboxoutlineblankminus">     <g class="checkboxoutlineblankminus">       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12H8m-5.5 0c0-4.47834 0-6.71751 1.39124-8.10876C5.28249 2.5 7.52166 2.5 12 2.5c4.4783 0 6.7175 0 8.1088 1.39124C21.5 5.28249 21.5 7.52166 21.5 12c0 4.4783 0 6.7175-1.3912 8.1088C18.7175 21.5 16.4783 21.5 12 21.5c-4.47834 0-6.71751 0-8.10876-1.3912C2.5 18.7175 2.5 16.4783 2.5 12Z" class="Vector"/>     </g>   </g> </svg>
  );
};

export default Checkboxoutlineblankminus;
