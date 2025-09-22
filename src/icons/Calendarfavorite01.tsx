import React from 'react';
import type { IconProps } from '../types';

const Calendarfavorite01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.777 13.65.792 1.597a.978.978 0 0 0 .64.476l1.435.24c.918.155 1.134.826.472 1.489L20 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0ZM18 2v2M6 2v2"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.5 11.5c-.004-3.866-.073-5.872-1.252-7.146C18.996 3 16.98 3 12.95 3h-1.9C7.02 3 5.004 3 3.752 4.354 2.5 5.707 2.5 7.886 2.5 12.244v.513c0 4.357 0 6.536 1.252 7.89 1.194 1.29 3.081 1.35 6.748 1.353M3 8h18"/> </svg>
  );
};

export default Calendarfavorite01;
