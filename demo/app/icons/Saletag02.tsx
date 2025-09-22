import React from 'react';
import type { IconProps } from '../types';

const Saletag02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34.008 34.008 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92.344 92.344 0 0 0 8.516-8.698 1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374-1.405-1.405-6.578-1.066-8.374-.901a1.952 1.952 0 0 0-1.094.47 92.35 92.35 0 0 0-8.698 8.515Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.788 12.367c.022-.402.134-1.135-.476-1.693m0 0a2.289 2.289 0 0 0-.797-.451c-1.257-.443-2.8 1.039-1.708 2.396.587.73 1.04.954.996 1.782-.03.582-.602 1.191-1.356 1.423-.655.202-1.378-.065-1.835-.576-.559-.624-.502-1.212-.507-1.468m5.207-3.106.689-.688m-5.34 5.34-.653.653"/> </svg>
  );
};

export default Saletag02;
