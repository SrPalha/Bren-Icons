import React from 'react';
import type { IconProps } from '../types';

const Twofinger1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.091 11v1m0-1c0-1.105-.868-2-1.94-2-.535 0-.969.448-.969 1v1-7.5c0-.828-.652-1.5-1.455-1.5s-1.454.672-1.454 1.5V5m5.818 6c0-.524.456-.922.956-.836l.332.057c.936.161 1.621.995 1.621 1.973v1.473c0 2.173 0 3.26-.321 4.125-.187.502-.678 1.142-1.07 1.604-.34.4-.549.908-.549 1.44V22M11.273 5c0-.828-.652-1.5-1.455-1.5S8.364 4.172 8.364 5v8.462l-1.572-1.625a1.6 1.6 0 0 0-2.434.14 1.739 1.739 0 0 0-.03 2.072l3.49 4.598c.668.88 1.03 2.236 1.03 3.353m2.425-17v5"/> </svg>
  );
};

export default Twofinger1;
