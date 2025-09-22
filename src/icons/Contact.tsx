import React from 'react';
import type { IconProps } from '../types';

const Contact: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13c0-4.243 0-6.364 1.245-7.682C5.99 4 7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13c0 4.243 0 6.364-1.245 7.682C18.01 22 16.007 22 12 22Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 4V2m8 2V2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.018 9.493a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239 1.216.002 2.848.61 3.906 2.24.068.105.087.234.025.344-.247.439-1.016 1.31-1.57 1.369-.638.067-2.307.077-2.36.077-.053 0-1.772-.01-2.41-.077-.556-.06-1.324-.93-1.572-1.37-.061-.109-.042-.238.026-.344Z"/> </svg>
  );
};

export default Contact;
