import React from 'react';
import type { IconProps } from '../types';

const Userstar01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803-2.26-2.153 1.45-3.873 2.865-4.715A10.657 10.657 0 0 1 13 14.188"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18.691 14.578.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.858.858 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.992-1c-.583-.589-.395-1.186.42-1.323l1.276-.213a.872.872 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0Z"/> </svg>
  );
};

export default Userstar01;
