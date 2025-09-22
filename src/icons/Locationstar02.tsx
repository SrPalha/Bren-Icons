import React from 'react';
import type { IconProps } from '../types';

const Locationstar02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M12 2c4.87 0 9 4.033 9 8.926 0 4.97-4.197 8.459-8.073 10.83a1.886 1.886 0 0 1-1.854 0C7.203 19.363 3 15.915 3 10.927 3 6.033 7.13 2 12 2Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.691 7.578.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.858.858 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.991-1c-.584-.589-.396-1.186.42-1.323l1.275-.213a.872.872 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0Z"/> </svg>
  );
};

export default Locationstar02;
