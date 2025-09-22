import React from 'react';
import type { IconProps } from '../types';

const Pointingright01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="pointing-right-01"> <path id="Vector" d="M22.0027 4.50098H16.0063M22.0027 4.50098C22.0027 3.80075 20.0096 2.49251 19.5042 2.00098M22.0027 4.50098C22.0027 5.20121 20.0096 6.50945 19.5042 7.00098" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_2" d="M1.99815 10.8264H2.94624C3.59135 10.8264 4.21929 10.6176 4.73701 10.2309L9.63685 6.57074C10.202 6.14861 10.9031 5.81146 11.5503 6.09015C12.5981 6.54131 13.2788 7.81412 11.7079 9.37203L9.99954 10.9704H20.4162C22.4581 11.0266 22.5593 14.3169 20.4162 14.4576H14.4799C14.6709 15.9386 13.6281 22.9154 9.21057 21.8984C9.00069 21.8501 8.78771 21.8019 8.57756 21.7548C7.65936 21.549 6.02292 20.9408 5.06624 20.27C4.07031 19.5717 3.07831 19.8181 1.99815 19.8181" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Pointingright01;
