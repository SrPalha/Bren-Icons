import React from 'react';
import type { IconProps } from '../types';

const Fingerprintminus1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" fillRule="evenodd" d="M2.5 9.758v4.452c0 2.648 1.356 4.988 3.429 6.396.519.426 1.932 1.286 3.428 1.318a8.076 8.076 0 0 0 5.303-1.107 4 4 0 0 1 3.84-6.69v-3.794c0-1.939-.355-2.842-.622-3.521a9.619 9.619 0 0 1-.148-.394C15.636 2.124 9.9.664 5.93 3.362c-.753.676-2.34 2.238-2.673 3.082A7.595 7.595 0 0 0 2.5 9.758Zm4 .897v2.671c0 1.589.678 2.993 1.714 3.837.26.256.966.772 1.715.791 2.363.395 4.571-1.817 4.571-4.628V11c0-1.164-.177-1.705-.31-2.113a5.678 5.678 0 0 1-.075-.236c-1.047-2.576-3.915-3.453-5.9-1.834-.377.406-1.17 1.343-1.336 1.85a5.323 5.323 0 0 0-.379 1.988Z" clipRule="evenodd" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.929 20.606C3.856 19.198 2.5 16.858 2.5 14.21V9.758c0-1.185.271-2.308.757-3.314m6.1 15.48A7.968 7.968 0 0 0 12 21.849m5.73-15.431C15.636 2.124 9.9.664 5.93 3.362m12.57 6.971V11.5m-8-5.5c2.21 0 4 1.88 4 4.2M6.885 8.4a4.359 4.359 0 0 0-.385 1.8v3.6c0 2.32 1.79 4.2 4 4.2.17 0 .336-.011.5-.032m-.5-7.468v3"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M18.833 18h-2.666m5.333 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/> </svg>
  );
};

export default Fingerprintminus1;
