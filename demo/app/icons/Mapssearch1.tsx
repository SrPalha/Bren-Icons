import React from 'react';
import type { IconProps } from '../types';

const Mapssearch1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12.089V9.236c0-1.944 0-2.916-.586-3.52-.586-.604-1.528-.604-3.414-.604h-2.079c-.917 0-.925-.002-1.75-.416l-3.331-1.67c-1.391-.698-2.087-1.047-2.828-1.023-.74.024-1.413.418-2.759 1.205l-1.227.719c-.989.578-1.483.867-1.754 1.348C2 5.756 2 6.342 2 7.513v8.236c0 1.539 0 2.309.342 2.737.228.285.547.476.9.54.53.095 1.18-.284 2.478-1.044.882-.516 1.73-1.052 2.785-.907.884.122 1.705.681 2.495 1.077"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M8 2.002v15.034"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5.01v6.013"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m20.107 20.174 1.845 1.823m-.783-4.36a3.56 3.56 0 1 1-7.121.001 3.56 3.56 0 0 1 7.121 0Z"/> </svg>
  );
};

export default Mapssearch1;
