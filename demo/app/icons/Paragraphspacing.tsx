import React from 'react';
import type { IconProps } from '../types';

const Paragraphspacing: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="paragraph-spacing"> <path id="Vector" d="M3 2H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M3 22H21" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M9.47266 8.5089L11.2737 6.37457C11.6424 5.93304 12.2676 5.92923 12.6732 6.37457L14.4529 8.5089M11.9734 7.08454V11.408L11.9719 16.9994M14.4727 15.5751L12.6716 17.7094C12.3029 18.1509 11.6777 18.1548 11.2721 17.7094L9.4924 15.5751" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Paragraphspacing;
