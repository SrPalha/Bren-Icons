import React from 'react';
import type { IconProps } from '../types';

const Blender: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.463 4H8.213m10.25 0-1.025 13H9l-.274-6m9.737-7H20M8.213 4H6.356c-1.261 0-1.892 0-2.2.403-.307.403-.126.993.237 2.172l.275.894c.232.756.348 1.134.594 1.435.245.302.596.497 1.299.889L8.726 11m-.513-7 .513 7M15 2h-3m5.467 15H9.053c-.293 1-1.597 3.708-.797 4.634.315.366.91.366 2.097.366h6.18c1.295 0 1.942 0 2.258-.403.792-1.012-.894-3.632-1.324-4.597ZM18 8h-2.5m2 3h-2m2 3h-2"/> </svg>
  );
};

export default Blender;
