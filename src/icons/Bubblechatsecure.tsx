import React from 'react';
import type { IconProps } from '../types';

const Bubblechatsecure: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.505 2C6.212 2.25 2 6.435 2 11.56c0 2.54 1.034 4.848 2.72 6.56.372.378.62.893.52 1.423a5.295 5.295 0 0 1-1.088 2.35 6.502 6.502 0 0 0 4.226-.657c.455-.242.682-.363.842-.387.16-.025.39.019.85.105.638.12 1.285.18 1.935.179 5.373 0 9.758-4.054 9.995-9.139"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 2c-1.267 0-2.088.808-3.06 1.102-.394.12-.592.18-.672.264-.08.084-.103.208-.15.454-.5 2.638.594 5.078 3.204 6.027.28.102.42.153.679.153.257 0 .398-.051.678-.153 2.61-.95 3.704-3.389 3.203-6.027-.047-.247-.07-.37-.15-.454-.08-.085-.278-.144-.673-.264C20.088 2.808 19.266 2 18 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01M8 12h.009"/> </svg>
  );
};

export default Bubblechatsecure;
