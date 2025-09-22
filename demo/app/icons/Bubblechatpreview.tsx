import React from 'react';
import type { IconProps } from '../types';

const Bubblechatpreview: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.866 10c.088.51.134 1.033.134 1.567 0 5.283-4.478 9.566-10 9.566a10.4 10.4 0 0 1-1.935-.179c-.459-.086-.688-.129-.848-.104-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567 2 6.607 5.947 2.48 11 2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 5h.009"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M21.795 4.59c.137.183.205.275.205.41 0 .135-.068.227-.205.41C21.18 6.23 19.61 8 17.5 8s-3.68-1.77-4.295-2.59C13.068 5.226 13 5.134 13 5c0-.135.068-.227.205-.41C13.82 3.77 15.39 2 17.5 2s3.68 1.77 4.295 2.59Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 12h.01M8 12h.009m7.986 0h.01"/> </svg>
  );
};

export default Bubblechatpreview;
