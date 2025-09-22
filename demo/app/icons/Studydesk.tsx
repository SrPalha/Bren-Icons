import React from 'react';
import type { IconProps } from '../types';

const Studydesk: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12H2m18 5h-4c-1.886 0-2.828 0-3.414-.586C12 15.828 12 14.886 12 13v-1m-8 0v10m16-10v10"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M15.04 2.599a1.94 1.94 0 0 0-2.648 0c-.414.393-.572.845-.115 1.28l1.416 1.348c.456.434.929.29 1.347-.108a1.722 1.722 0 0 0 0-2.52Zm0 0c.496-.326 1.053-.781 1.672-.523.29.122.49.419.889 1.013l1.498 2.233c.565.842.847 1.263.894 1.74.047.476-.148.94-.539 1.865L18.158 12"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12V7.5C4 6.373 4.45 6 5.5 6S7 6.373 7 7.5V12m0 0V7.5C7 6.373 7.45 6 8.5 6s1.5.373 1.5 1.5V12"/> </svg>
  );
};

export default Studydesk;
