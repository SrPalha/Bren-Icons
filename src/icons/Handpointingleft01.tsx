import React from 'react';
import type { IconProps } from '../types';

const Handpointingleft01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="hand-pointing-left-01"> <path id="Vector" d="M21.9986 8.83397H21.0513C20.4058 8.83397 19.7775 8.62522 19.2595 8.23867L14.3566 4.58023C13.7911 4.1583 13.0896 3.8213 12.4419 4.09986C11.3935 4.55081 10.7124 5.82305 12.2843 7.38027L13.9937 8.97785H3.57057C1.52742 9.03408 1.42614 12.3229 3.57057 12.4636H9.5106C9.31946 13.9439 10.3629 20.9175 14.7831 19.901C14.9931 19.8528 15.2063 19.8046 15.4165 19.7575C16.3353 19.5518 17.9727 18.9438 18.93 18.2733C19.9266 17.5754 21.5155 17.8217 22 17.8217" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Handpointingleft01;
