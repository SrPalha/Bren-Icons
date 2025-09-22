import React from 'react';
import type { IconProps } from '../types';

const Dashboardcircleedit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.25 10.5a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM17.75 22a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Zm-11.5 0a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.868 2.439.692.692a1.5 1.5 0 0 1 0 2.122l-3.627 3.695a2 2 0 0 1-1.047.552l-2.248.488a.5.5 0 0 1-.595-.593l.478-2.236a2 2 0 0 1 .552-1.047l3.674-3.673a1.5 1.5 0 0 1 2.12 0Z"/> </svg>
  );
};

export default Dashboardcircleedit;
