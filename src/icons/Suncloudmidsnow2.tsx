import React from 'react';
import type { IconProps } from '../types';

const Suncloudmidsnow2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.478 11.01h.022c2.485 0 4.5 2.017 4.5 4.506 0 1.962-1.252 3.365-3 3.984m-1.522-8.49A5.504 5.504 0 0 0 12 5a5.504 5.504 0 0 0-5.48 5.03m10.958.98a5.488 5.488 0 0 1-1.235 3.004M6.52 10.03A5.005 5.005 0 0 0 2 15.015C2 17.07 3.234 18.71 5 19.5m1.52-9.47a4.973 4.973 0 0 1 3.48.979M12 16v6m2.5-4.5-5 3m0-3 5 3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2.96 9.194c-.741-2.722.9-5.52 3.664-6.25m-3.665 6.25L2 9.447m.96-.253c.184.677.498 1.285.908 1.806m2.756-8.055L6.367 2m.257.945A5.23 5.23 0 0 1 12 4.67m-8.524.653-1.012-.577m8.677-2.289-.584.998"/> </svg>
  );
};

export default Suncloudmidsnow2;
