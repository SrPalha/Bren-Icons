import React from 'react';
import type { IconProps } from '../types';

const Signlanguagec1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21v-6.606c0-2.628 0-3.941.359-5.09.51-1.635 2.315-3.382 3.714-4.4.895-.651 1.74-.91 3.793-1.613.327-.112.49-.168.787-.223.296-.055.368-.058.511-.064a5 5 0 0 1 1.295.115c.343.079.684.208 1.365.465l1.91.786a1.49 1.49 0 0 1-1.086 2.775m0 0-.912-.282c-.7-.215-1.386-.355-1.966-.284C12.724 6.707 10.11 8 10.11 8m6.54-.855 2.387.888a1.46 1.46 0 0 1 .915 1.742c-.213.803-1.062 1.272-1.872 1.034l-2.194-.643c-1.78-.709-5.267.323-5.267 2.558 0 1.638 1.935 2.704 3.408 1.971 1.693-.842 3.453-1.903 5.287-.686.567.376.877 1.13.248 1.642L16.727 17.5c-.51.415-1.665.97-2.483 1.273l-.084.032-.042.017c-.322.14-1.794.844-2.118 2.178"/> </svg>
  );
};

export default Signlanguagec1;
