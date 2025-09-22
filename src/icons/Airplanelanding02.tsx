import React from 'react';
import type { IconProps } from '../types';

const Airplanelanding02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.498 20.002h16"/>   <path stroke="#1B1C1B" strokeWidth="1.5" d="M20.048 11.042c1.173-.44 1.35-1.04 1.425-1.44.125-.5-.175-1.775-.45-2.75a95.255 95.255 0 0 0-.555-2.05c-.245-.875-.845-.835-1.27-.775-.175.038-1.4.37-1.6.47-.675.405-.6 1.48-.8 2.18-.225 1.025-.75 1.175-1.35 1.275-2.1.15-6.75.525-6.75.525-3.975.35-5.9 3.525-6.185 5.85-.14.975.76 1.325 1.235 1.2l5.225-1.425c.4-.15.725-.025.95.125l2.325 1.525c.525.275 1 .3 1.425.2l2.175-.595c.45-.05.54-.264.6-.43.088-.243-.102-.466-.325-.675-.125-.175-.525-.603-.675-.768-.2-.257-.69-.682-.65-.857-.3-.125.77-.313 2.55-.8 1.011-.276 2.178-.59 2.7-.785Z"/> </svg>
  );
};

export default Airplanelanding02;
