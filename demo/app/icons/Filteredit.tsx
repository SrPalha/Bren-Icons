import React from 'react';
import type { IconProps } from '../types';

const Filteredit: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.242 17.5c-.047.303-.09.549-.126.744-.229 1.222-1.96 1.957-2.888 2.612-.552.39-1.222-.074-1.293-.678a196.402 196.402 0 0 1-.674-6.917 1.049 1.049 0 0 0-.402-.755C5.371 10.646 3.598 8.6 2.63 7.45c-.3-.356-.398-.617-.457-1.076C1.97 4.8 1.87 4.015 2.33 3.507 2.79 3 3.606 3 5.236 3h11.532c1.63 0 2.445 0 2.906.507.224.246.315.558.327.993"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m20.862 7.44.695.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2.007 2.007 0 0 1-1.05.552l-2.254.488a.5.5 0 0 1-.597-.594l.48-2.235c.074-.397.267-.762.554-1.047l3.683-3.674a1.507 1.507 0 0 1 2.127 0Z"/> </svg>
  );
};

export default Filteredit;
