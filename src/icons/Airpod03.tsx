import React from 'react';
import type { IconProps } from '../types';

const Airpod03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M7.33 10.846a4.51 4.51 0 0 1-2.663.266C3.07 10.777 2 9.717 2 8.056V6.129C2 4.122 3.526 2.98 5.556 3 7.81 3.023 10.5 4.764 10.5 7.507v11.91c0 .544 0 .816-.103 1.025-.29.588-.911.558-1.48.558-.57 0-1.19.03-1.48-.558-.104-.209-.104-.481-.104-1.025v-8.312c0-.089 0-.175-.003-.259Zm0 0 .003-.001m-.003.001C7.297 9.682 7 8.5 6 8.5m10.67 2.346a4.51 4.51 0 0 0 2.663.266C20.93 10.777 22 9.717 22 8.056V6.129C22 4.124 20.387 2.98 18.444 3 16.19 3.023 13.5 4.764 13.5 7.507v11.91c0 .544 0 .816.103 1.025.29.588.911.558 1.48.558.57 0 1.19.03 1.48-.558.104-.209.104-.481.104-1.025v-8.312c0-.089 0-.175.003-.259Zm0 0-.003-.001m.003.001C16.703 9.682 17 8.5 18 8.5"/> </svg>
  );
};

export default Airpod03;
