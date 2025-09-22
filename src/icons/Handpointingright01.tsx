import React from 'react';
import type { IconProps } from '../types';

const Handpointingright01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="hand-pointing-right-01"> <path id="Vector" d="M2 8.83397H2.94868C3.59418 8.83397 4.22251 8.62522 4.74055 8.23867L9.64341 4.58023C10.2089 4.1583 10.9104 3.8213 11.5581 4.09986C12.6065 4.55081 13.2876 5.82305 11.7157 7.38027L10.0063 8.97785H20.4294C22.4726 9.03408 22.5739 12.3229 20.4294 12.4636H14.4894C14.6805 13.9439 13.6371 20.9175 9.21687 19.901C9.00686 19.8528 8.79375 19.8046 8.58346 19.7575C7.6647 19.5518 6.02726 18.9438 5.06998 18.2733C4.07344 17.5754 3.08083 17.8217 2 17.8217" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Handpointingright01;
