import React from 'react';
import type { IconProps } from '../types';

const Datarecovery: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M3 12c0 1.657 3.582 3 8 3 .339 0 .672-.008 1-.023"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3 .339 0 .672-.008 1-.023"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M11 8c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3 3.582 3 8 3Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7 8v2m0 5v2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.987 14 .5 2.084-.83-.518a3.494 3.494 0 0 0-2.122-.715c-1.952 0-3.535 1.6-3.535 3.575C14 20.4 15.583 22 17.535 22c1.71 0 3.137-1.228 3.465-2.86"/> </svg>
  );
};

export default Datarecovery;
