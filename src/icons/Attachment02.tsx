import React from 'react';
import type { IconProps } from '../types';

const Attachment02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="attachment-02"> <path id="Vector" d="M8 8.00049V6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049V18.0005C16 20.2096 14.2091 22.0005 12 22.0005C9.79086 22.0005 8 20.2096 8 18.0005V13.5005C8 12.1198 9.11929 11.0005 10.5 11.0005C11.8807 11.0005 13 12.1198 13 13.5005V16.0005" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Attachment02;
