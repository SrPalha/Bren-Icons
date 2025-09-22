import React from 'react';
import type { IconProps } from '../types';

const Asteroid01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.177 12.98 1.318-4.4a4.088 4.088 0 0 1 2.037-2.47l1.595-.82c1.248-.641 2.766-.187 3.484 1.042l1.493 2.558c.369.63.553.946.79 1.109.332.228.75.281 1.126.143.268-.098.52-.358 1.026-.878a2.627 2.627 0 0 1 4.11.418l1.171 1.805a4.211 4.211 0 0 1 .519 3.414l-.342 1.23a4.09 4.09 0 0 1-2.06 2.55l-5.613 2.884a3.915 3.915 0 0 1-4.12-.332L3.679 17.54c-1.403-1.03-2.008-2.867-1.5-4.56Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 14h.009"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11 15.5 9.5 17M9 10.753c-.943-.588-1.414-.882-1.854-.7-.439.183-.675.771-1.146 1.947M19.956 2h-1.722c-.271 0-.407 0-.533.02a1.51 1.51 0 0 0-.788.37c-.09.08-.164.18-.315.377-.323.424-.485.637-.546.834-.15.476.03.985.462 1.303.178.132.449.226.99.416l1.014.356c.647.226.97.34 1.294.322.137-.007.272-.031.4-.072.306-.096.552-.311 1.044-.743l.145-.127a2.78 2.78 0 0 0 .328-.31c.13-.158.216-.34.252-.533C22 4.11 22 4.004 22 3.79c0-.488 0-.732-.076-.929-.144-.374-.48-.668-.907-.795C20.792 2 20.513 2 19.956 2Z"/> </svg>
  );
};

export default Asteroid01;
