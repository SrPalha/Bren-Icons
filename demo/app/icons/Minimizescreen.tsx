import React from 'react';
import type { IconProps } from '../types';

const Minimizescreen: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="minimize-screen"> <path id="Vector" d="M2 10.0021C2.02895 6.58807 2.21848 4.70599 3.45963 3.46485C4.92448 2 7.28212 2 11.9974 2C16.7127 2 19.0703 2 20.5352 3.46485C22 4.9297 22 7.28733 22 12.0026C22 16.7179 22 19.0755 20.5352 20.5404C19.294 21.7815 17.4119 21.9711 13.9979 22" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M4.99871 13C3.82845 13.0351 3.13074 13.1652 2.64796 13.648C2.16519 14.1307 2.03507 14.8285 2 15.9987M8.00129 13C9.17155 13.0351 9.86926 13.1652 10.352 13.648C10.8348 14.1307 10.9649 14.8285 11 15.9987M11 19.0013C10.9649 20.1715 10.8348 20.8693 10.352 21.352C9.86926 21.8348 9.17155 21.9649 8.00129 22M4.99872 22C3.82846 21.9649 3.13074 21.8348 2.64796 21.352C2.16519 20.8693 2.03507 20.1715 2 19.0013" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M16.4127 11.0066L13.5096 10.9397C13.0781 10.9298 12.7326 10.5954 12.7277 10.183L12.6965 7.53898M20.0282 3.7666L13.2808 10.3676" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Minimizescreen;
