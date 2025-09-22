import React from 'react';
import type { IconProps } from '../types';

const Rotateright01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="rotate-right-01"> <path id="Vector" d="M3.97056 14.8124L4.61989 14.4192C5.18084 14.0967 5.62215 13.6021 5.87843 13.0089L8.30395 7.39389C8.39141 7.19143 8.51138 7.02259 8.65645 6.88362C9.29777 6.26925 10.4062 6.52945 10.9446 7.23506C11.9386 8.53788 10.6033 9.77147 10.8855 10.8578L18.6399 6.50335C20.4436 5.53116 22.0014 8.11395 20.2085 9.30708L15.6185 11.8574C16.5024 13.0104 18.744 18.6031 15.8715 20.3087C15.7082 20.4056 15.5272 20.4701 15.3457 20.5262C15.2288 20.5622 15.112 20.5985 14.9961 20.6347C14.0945 20.9157 12.3896 21.2692 11.2214 21.1674C10.0053 21.0614 9.24323 21.7091 8.30398 22.2491" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M14.6475 4.7206C14.2502 5.11704 12.5219 5.00267 11.8844 4.92307M14.6475 4.7206C15.0448 4.32417 15.0562 2.38825 14.9764 1.75209M14.6475 4.7206C13.6255 2.94882 9.56204 0.122616 5.5298 2.94882C3.58127 4.31456 3.30632 5.17524 2.99819 5.75182" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Rotateright01;
