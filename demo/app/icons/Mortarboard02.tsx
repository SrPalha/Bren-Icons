import React from 'react';
import type { IconProps } from '../types';

const Mortarboard02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 8c0 1.342 8.095 5 9.986 5s9.986-3.658 9.986-5-8.095-5-9.986-5S2 6.658 2 8Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5.994 11 .245 5.63c.005.113.017.226.05.334.101.333.287.637.571.84 2.221 1.595 8.03 1.595 10.252 0 .284-.203.47-.507.57-.84a1.36 1.36 0 0 0 .05-.334l.245-5.63m2.496-1.5v7m0 0c-.792 1.446-1.142 2.221-1.497 3.5-.078.455-.016.684.297.888.128.083.28.112.433.112h1.52a.8.8 0 0 0 .458-.125c.291-.201.366-.422.287-.875-.311-1.187-.709-2-1.498-3.5Z"/> </svg>
  );
};

export default Mortarboard02;
