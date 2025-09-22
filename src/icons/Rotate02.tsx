import React from 'react';
import type { IconProps } from '../types';

const Rotate02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="rotate-02"> <path id="Vector" d="M20 2V5.13219C20 5.42605 19.6328 5.55908 19.4447 5.33333C17.6146 3.2875 14.955 2 11.9949 2C6.47485 2 2 6.47715 2 12C2 15.9582 4.29852 19.3793 7.63298 21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M12.265 21.9999C11.7982 21.9999 11.3387 21.9686 10.8887 21.9082M21.7344 8.6665C21.8468 9.06368 21.935 9.46511 21.9998 9.86875M21.9652 13.5379C21.8949 13.9379 21.8033 14.334 21.6913 14.7243M20.1669 17.9961C19.9285 18.3495 19.6702 18.6897 19.3927 19.0145M16.5712 21.3605C16.2175 21.563 15.8494 21.7462 15.4675 21.9082" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Rotate02;
