import React from 'react';
import type { IconProps } from '../types';

const Dragleft2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.508 13.653 1.97 1.72V6.5c0-.83.673-1.501 1.504-1.501.83 0 1.503.671 1.503 1.5l.004 4.763 2.641.427c1.705.26 2.558.389 3.158.753.992.601 1.71 1.557 1.71 2.823 0 .918-.223 1.534-.769 3.19-.346 1.05-.519 1.575-.8 1.99a3.538 3.538 0 0 1-1.939 1.414c-.479.14-1.026.14-2.12.14h-.927c-1.454 0-2.182 0-2.83-.27a3.503 3.503 0 0 1-.34-.164c-.614-.338-1.073-.91-1.99-2.052l-2.97-3.698a1.571 1.571 0 0 1-.007-1.954 1.525 1.525 0 0 1 2.202-.21Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M13.923 9.5A3.998 3.998 0 0 0 11.98 2a3.998 3.998 0 0 0-1.942 7.5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.818 6.023H3.001m0 0c0 .47.515.694.837.989l1.18.998M3 6.023c0-.47.523-.724.837-1.021l1.18-1.012"/> </svg>
  );
};

export default Dragleft2;
