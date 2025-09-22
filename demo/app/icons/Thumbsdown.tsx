import React from 'react';
import type { IconProps } from '../types';

const Thumbsdown: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 11.5a2 2 0 0 0 2 2 3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3 2 2 0 0 0-2 2v6Zm13.479 4.694-.267-.86c-.218-.705-.327-1.057-.243-1.336a.983.983 0 0 1 .42-.547c.251-.158.63-.158 1.39-.158h.404c2.57 0 3.855 0 4.462-.76.07-.087.131-.18.185-.277.467-.848-.064-1.991-1.126-4.277-.974-2.098-1.462-3.147-2.366-3.764a4.037 4.037 0 0 0-.27-.17c-.952-.545-2.132-.545-4.492-.545h-.511c-2.86 0-4.289 0-5.177.86C7 5.222 7 6.607 7 9.377v.974c0 1.455 0 2.183.258 2.85.259.666.753 1.213 1.743 2.309l4.091 4.53c.103.114.154.17.2.21a1.033 1.033 0 0 0 1.442-.091c.04-.045.083-.108.17-.234a8.52 8.52 0 0 0 .261-.392 3.812 3.812 0 0 0 .446-2.89 8.252 8.252 0 0 0-.132-.448Z"/> </svg>
  );
};

export default Thumbsdown;
