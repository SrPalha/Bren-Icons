import React from 'react';
import type { IconProps } from '../types';

const Callringing01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M16.713 13.594c1.48.39 2.51.885 3.446 1.49 1.384.896 1.978 2.51 1.815 4.068-.07.658-.6.973-1.215.802l-1.389-.384c-1.1-.305-1.65-.457-1.986-.86-.336-.403-.375-.959-.454-2.07l-.217-3.046Zm0 0c-2.997-.791-6.426-.792-9.426 0m0 0c-1.48.39-2.51.885-3.446 1.49-1.384.896-1.978 2.51-1.815 4.068.07.658.6.973 1.215.802l1.389-.384c1.1-.305 1.65-.457 1.986-.86.336-.403.375-.959.454-2.07l.217-3.046Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v2.857m6 .714L15.6 9M6 7.571 8.4 9"/> </svg>
  );
};

export default Callringing01;
