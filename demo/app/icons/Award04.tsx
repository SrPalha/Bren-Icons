import React from 'react';
import type { IconProps } from '../types';

const Award04: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M9.426 3.063C10.684 2.354 11.312 2 12 2s1.316.354 2.574 1.063l1.75.986c1.305.735 1.958 1.103 2.317 1.718C19 6.382 19 7.132 19 8.632v1.736c0 1.5 0 2.25-.36 2.865-.358.615-1.01.983-2.316 1.718l-1.75.986C13.316 16.646 12.688 17 12 17s-1.316-.354-2.574-1.063l-1.75-.986c-1.305-.735-1.958-1.103-2.317-1.718C5 12.618 5 11.868 5 10.368V8.632c0-1.5 0-2.25.36-2.865.358-.615 1.01-.983 2.316-1.718l1.75-.986Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10.167s.75 0 1.5 1.333c0 0 2.382-3.333 4.5-4m1.883 7.5.67 3.21c.43 2.062.646 3.093.203 3.582-.442.489-1.21.069-2.746-.772l-2.274-1.245c-.363-.198-.544-.298-.736-.298-.192 0-.373.1-.736.298L8.99 21.02c-1.536.84-2.304 1.261-2.746.772-.443-.489-.227-1.52.203-3.582l.67-3.21"/> </svg>
  );
};

export default Award04;
