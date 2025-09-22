import React from 'react';
import type { IconProps } from '../types';

const Pyramid: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m2.87-8.324 7.119 3.91m0 0 .005.004m-.005-.004c.075-.437-.232-.928-.802-1.839L13.784 3.92C12.984 2.64 12.584 2 12 2c-.583 0-.983.64-1.784 1.92L2.813 15.746c-.57.911-.877 1.402-.802 1.84m19.978 0a.767.767 0 0 1-.028.109c-.152.467-.694.683-1.777 1.116l-7.403 2.957c-.385.154-.578.231-.781.231-.203 0-.396-.077-.781-.231l-7.403-2.957c-1.083-.433-1.625-.65-1.777-1.116a.779.779 0 0 1-.028-.11m0 0-.005.004m.005-.004 7.12-3.91"/> </svg>
  );
};

export default Pyramid;
