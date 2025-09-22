import React from 'react';
import type { IconProps } from '../types';

const Workoutgymnastics: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M6.996 9.501c0 .826-.67 1.496-1.499 1.496-.828 0-1.499-.67-1.499-1.496s.671-1.495 1.5-1.495c.827 0 1.498.67 1.498 1.495Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.966 3.001.859 5.771c.028.194.043.39.043.586v.08c0 .21-.022.418-.066.623l-.05.233a.996.996 0 0 1-.08.231l-2.68 5.465m3.433-7.235 5.518 2.305.558.242c.338.147.596.433.707.784L20.002 21M9.51 11.96l5.124 2.012m0 0-2.615 6.902m2.615-6.902 2.183-2.165"/> </svg>
  );
};

export default Workoutgymnastics;
