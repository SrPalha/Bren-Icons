import React from 'react';
import type { IconProps } from '../types';

const Dragright4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.998 13.053v.173m0 0a1.8 1.8 0 0 0-1.52-1.765l-1.208-.198v.895m2.728 1.068v2.213c0 1.944 0 2.916-.301 3.69a4.503 4.503 0 0 1-2.607 2.574c-.784.297-1.769.297-3.738.297-1.033 0-1.55 0-2.03-.104a4.553 4.553 0 0 1-1.984-.98c-.373-.317-.683-.725-1.303-1.54l-2.73-3.596a1.499 1.499 0 0 1 .029-1.854 1.547 1.547 0 0 1 2.281-.125l1.383 1.455V6.5a1.5 1.5 0 1 1 3 0v2.974m5.272 2.684c0-.988-.814-1.79-1.818-1.79h-.909v.895m2.727.895v.895m-5.272-3.58h.727c1.004 0 1.818.802 1.818 1.79m-2.545-1.79v2.685m2.545-.895v.895"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.436 9.5a4 4 0 1 0-3.876 0"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.018 3.996 1.744 1.44c.255.273.297.478.172.78a.787.787 0 0 1-.212.279l-1.704 1.51M13.851 5.98h4.984"/> </svg>
  );
};

export default Dragright4;
