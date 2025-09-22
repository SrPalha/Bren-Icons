import React from 'react';
import type { IconProps } from '../types';

const Fingerprintcheck1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" fillRule="evenodd" d="M2.751 9.76v4.452c0 2.648 1.356 4.988 3.429 6.396.519.426 1.932 1.286 3.428 1.318a8.076 8.076 0 0 0 5.303-1.107 4 4 0 0 1 3.84-6.69v-3.794c0-1.94-.355-2.842-.622-3.521a9.619 9.619 0 0 1-.148-.394C15.887 2.126 10.151.666 6.18 3.364c-.752.676-2.34 2.238-2.672 3.082a7.595 7.595 0 0 0-.757 3.314Zm4 .896v2.672c0 1.589.678 2.993 1.714 3.838.26.255.966.771 1.715.79 2.363.395 4.571-1.817 4.571-4.628v-2.326c0-1.164-.177-1.705-.31-2.113a5.678 5.678 0 0 1-.075-.236c-1.047-2.576-3.915-3.453-5.9-1.834-.377.406-1.17 1.343-1.336 1.85a5.323 5.323 0 0 0-.379 1.987Z" clipRule="evenodd" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.18 20.608C4.107 19.2 2.75 16.86 2.75 14.212V9.76c0-1.185.271-2.308.757-3.314m6.1 15.48a7.968 7.968 0 0 0 2.643-.075M17.98 6.42C15.887 2.126 10.151.666 6.18 3.364m12.571 6.971v1.167m-8-5.5c2.21 0 4 1.88 4 4.2m-7.615-1.8a4.359 4.359 0 0 0-.385 1.8v3.6c0 2.32 1.79 4.2 4 4.2.17 0 .336-.011.5-.032m-.5-7.468v3"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M17.751 22.002a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M16.419 18.446c.3.144.672.516.852.816.06.42.36-1.2 1.824-2.16"/> </svg>
  );
};

export default Fingerprintcheck1;
