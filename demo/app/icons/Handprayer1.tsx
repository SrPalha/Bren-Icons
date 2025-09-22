import React from 'react';
import type { IconProps } from '../types';

const Handprayer1: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 15 14 10.5c-1.657 0-2 1.343-2 3V15m-3.5 0 1.5-4.5c1.657 0 2 1.343 2 3V15"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.978 22c-1.15-.67-3.086-2.186-5.69-1.992-.659.049-.989.074-1.29.05a3.384 3.384 0 0 1-.327-.029C13.139 19.674 12 18.336 12 16.74V3.196a1.197 1.197 0 0 1 2.304-.453l2.718 6.644c1.066 2.605 1.599 3.907 2.528 4.577.057.042.163.113.223.15.971.606 1.39.606 2.227.606M2.022 22c1.15-.67 3.086-2.186 5.69-1.992.659.049.989.074 1.29.05.302-.023.31-.025.327-.029C10.861 19.675 12 18.336 12 16.74V3.196a1.197 1.197 0 0 0-2.304-.453L6.978 9.388c-1.066 2.605-1.599 3.908-2.528 4.577a5.107 5.107 0 0 1-.223.15c-.971.606-1.39.606-2.227.606"/> </svg>
  );
};

export default Handprayer1;
