import React from 'react';
import type { IconProps } from '../types';

const Highheels02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.94 20c-.24-.44-.394-1.227-.165-2.017.297-1.028.442-1.321-.492-1.868l-1.389-.814c-.878-.515-1.062-.363-1.704.414-.783.949-2.18 2.04-4.19 2.513"/>   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 7V5.2C2 4.207 2.173 4 3 4h5c.908 0 1 .555 1 1.5S8.908 7 8 7H2Zm0 0v5"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M2 12h1c2.454 0 3.68 0 4.736.528C8.792 13.056 9.528 14.038 11 16c2.975 3.967 6.473 4 11 4"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="m2 12 1.47 7.837a.2.2 0 0 0 .196.163H4.3c.11 0 .2-.086.203-.196C4.53 18.757 4.77 13.838 7 12.5"/> </svg>
  );
};

export default Highheels02;
