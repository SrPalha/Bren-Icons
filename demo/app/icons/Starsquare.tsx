import React from 'react';
import type { IconProps } from '../types';

const Starsquare: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M2 12c0-4.478 0-6.718 1.391-8.109S7.021 2.5 11.5 2.5c4.478 0 6.718 0 8.109 1.391S21 7.521 21 12c0 4.478 0 6.718-1.391 8.109C18.217 21.5 15.979 21.5 11.5 21.5c-4.478 0-6.718 0-8.109-1.391C2 18.717 2 16.479 2 12Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.364 7.722.88 1.774c.12.247.44.484.71.53l1.595.267c1.02.171 1.26.917.524 1.653l-1.24 1.25c-.21.212-.324.62-.26.913l.355 1.547c.28 1.225-.364 1.699-1.44 1.059l-1.494-.892c-.27-.162-.715-.162-.99 0l-1.495.892c-1.07.64-1.72.161-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.73-.736-.495-1.482.525-1.653l1.595-.267a1.09 1.09 0 0 0 .705-.53l.88-1.774c.48-.963 1.26-.963 1.735 0Z"/> </svg>
  );
};

export default Starsquare;
