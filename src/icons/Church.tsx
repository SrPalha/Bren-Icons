import React from 'react';
import type { IconProps } from '../types';

const Church: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v4m2-2h-4M8.501 8.799 12 6l3.499 2.799C16.717 9.774 17 10.362 17 11.922V22H7V11.922c0-1.56.283-2.148 1.501-3.123ZM17 12l1.789.894c1.076.538 1.614.807 1.912 1.29.299.484.299 1.085.299 2.288V20c0 .943 0 1.414-.293 1.707C20.414 22 19.943 22 19 22h-2M7 12l-1.789.894c-1.076.538-1.614.807-1.912 1.29C3 14.669 3 15.27 3 16.473V20c0 .943 0 1.414.293 1.707C3.586 22 4.057 22 5 22h2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 22v-4a2 2 0 1 1 4 0v4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.008 11h-.009"/> </svg>
  );
};

export default Church;
