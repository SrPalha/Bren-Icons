import React from 'react';
import type { IconProps } from '../types';

const Sodacan: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M5.927 3.887 6.9 2.72c.295-.354.443-.531.644-.626C7.746 2 7.976 2 8.437 2h7.126c.46 0 .691 0 .893.094.201.095.349.272.644.626l.973 1.167c.459.551.688.826.808 1.156.119.33.119.689.119 1.405v11.104c0 .716 0 1.075-.12 1.405-.119.33-.348.605-.807 1.155L16.8 21.64c-.148.177-.221.266-.322.313-.1.047-.216.047-.446.047H7.968c-.23 0-.345 0-.446-.047-.1-.047-.174-.136-.322-.313l-1.273-1.527c-.459-.551-.688-.826-.808-1.156C5 18.627 5 18.268 5 17.552V6.448c0-.716 0-1.075.12-1.405.119-.33.348-.605.807-1.156Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M5 5h14M5 19h14"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6 2h12"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/> </svg>
  );
};

export default Sodacan;
