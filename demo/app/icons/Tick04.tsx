import React from 'react';
import type { IconProps } from '../types';

const Tick04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.86 5.392c.428 1.104-.171 1.86-1.33 2.606-.935.6-2.126 1.252-3.388 2.365-1.238 1.091-2.445 2.406-3.518 3.7a54.638 54.638 0 0 0-2.62 3.437c-.414.591-.993 1.473-.993 1.473A2.245 2.245 0 0 1 8.082 20a2.239 2.239 0 0 1-1.9-1.075c-.999-1.677-1.769-2.34-2.123-2.577C3.112 15.71 2 15.618 2 14.134 2 12.954 2.995 12 4.222 12c.867.032 1.672.373 2.386.853.456.306.939.712 1.441 1.245a57.455 57.455 0 0 1 2.098-2.693c1.157-1.395 2.523-2.892 3.988-4.184 1.44-1.27 3.105-2.459 4.87-3.087 1.15-.41 2.429.153 2.856 1.258Z"/> </svg>
  );
};

export default Tick04;
