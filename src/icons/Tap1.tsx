import React from 'react';
import type { IconProps } from '../types';

const Tap1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.988 6.027c-.066-.92.501-2.742 2.057-3.503.642-.39 2.403-.994 4.087.082 1.66 1.06 1.772 2.622 1.876 3.41"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.166 22.001c-.046-1.636.057-1.798.177-2.162.12-.364.956-1.676 1.252-2.614.958-3.034.065-3.68-1.125-4.54-1.32-.954-3.694-1.428-4.929-1.323V6.523c0-.823-.789-1.497-1.632-1.497-.842 0-1.617.674-1.617 1.497v8.312l-1.72-1.49c-.559-.594-1.458-.654-2.072-.115a1.45 1.45 0 0 0-.196 1.983l1.131 1.464m0 0c.244.31.516.66.826 1.07m-.826-1.07.826 1.07m-.826-1.07c-.5-.634-.877-1.095-1.202-1.553m4.012 6.877v-.853c.037-1.053-.747-1.74-1.769-3.114a57.903 57.903 0 0 0-.215-.287m0 0 1.023 1.326"/> </svg>
  );
};

export default Tap1;
