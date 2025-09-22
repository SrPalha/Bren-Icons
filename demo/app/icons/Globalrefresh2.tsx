import React from 'react';
import type { IconProps } from '../types';

const Globalrefresh2: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path fill="#1B1C1B" d="M19.783 5.72A9.958 9.958 0 0 1 22 12c0 1.163-.198 2.28-.563 3.318a4.5 4.5 0 1 0-6.119 6.119A9.985 9.985 0 0 1 12 22a9.973 9.973 0 0 1-3.749-.726l.26-.274c.674-.832.556-1.801.218-2.77-.231-.663-.36-1.03-.431-1.41-.09-.473-.09-.963-.09-2.068 0-1.987-.52-2.483-3.119-2.483-1.233 0-2.284-.583-3.043-1.23.43-4.506 3.85-8.14 8.253-8.894-.551 1.165-.36 2.583.742 3.118.92.447 1.014 1.09 1.11 1.74.086.594.174 1.193.889 1.656 1 .647 2.499.485 3.998-1.456.767-.993 1.848-1.377 2.745-1.483Z" opacity=".4"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.742 17.491.85.45c.595.316.893.474 1.17.292.277-.182.255-.467.213-1.037-.245-3.276-4.302-5.523-7.108-3.312m.389 3.607-.85-.45c-.595-.315-.893-.473-1.17-.29-.277.183-.254.468-.209 1.036.26 3.249 4.293 5.526 7.03 3.364"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.01 22C5.952 21.497 2 17.223 2 12.025 2 6.488 6.482 2 12.012 2c5.296 0 9.632 4.118 9.988 9.33"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.175 11.113c.762.662 1.656 1.123 2.914 1.123 2.6 0 3.12.496 3.12 2.483s0 1.987.52 3.477c.338.97.456 1.939-.218 2.771"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M19.998 5.699c-.935.067-2.132.43-2.962 1.504-1.5 1.94-2.999 2.103-3.999 1.456-1.5-.97-.239-2.543-1.999-3.397C9.891 4.705 9.731 3.19 10.37 2"/> </svg>
  );
};

export default Globalrefresh2;
