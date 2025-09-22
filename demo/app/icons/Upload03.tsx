import React from 'react';
import type { IconProps } from '../types';

const Upload03: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M6.938 10c-.691.005-1.107.026-1.438.114-1.508.4-2.54 1.75-2.499 3.27.012.441.18.986.515 2.075.807 2.62 2.164 4.895 5.202 5.44.559.101 1.188.101 2.445.101h1.674c1.257 0 1.886 0 2.445-.1 3.038-.546 4.395-2.821 5.202-5.441.335-1.09.503-1.634.515-2.074.04-1.521-.991-2.872-2.499-3.271-.33-.088-.747-.109-1.438-.114"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v11m0-11c.468 0 .824.438 1.536 1.314L14.5 5.5M12 3c-.468 0-.824.438-1.536 1.314L9.5 5.5"/> </svg>
  );
};

export default Upload03;
