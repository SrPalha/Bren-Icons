import React from 'react';
import type { IconProps } from '../types';

const Dragright01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="drag-right-01"> <path id="Vector" d="M8.66774 8.48795C7.64819 7.87673 6.96631 6.76457 6.96631 5.49397C6.96631 3.56484 8.53813 2.00098 10.4771 2.00098C12.416 2.00098 13.9878 3.56484 13.9878 5.49397C13.9878 6.76457 13.306 7.87673 12.2864 8.48795" stroke="#1B1C1B" strokeWidth="1.5"/> <path id="Vector_2" d="M18.0127 2.99023L19.7598 4.43095C20.0154 4.70291 20.0581 4.90799 19.932 5.20934C19.8864 5.31849 19.8088 5.41067 19.7201 5.48911L18.0127 6.99909M14.415 4.97515H18.8312" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path id="Vector_3" d="M8.56028 21.9331L8.58577 21.3034C8.61069 20.6879 8.44841 20.0756 8.10476 19.5609C6.75272 17.536 5.71955 16.3829 4.30356 14.4078C4.1914 14.2514 4.08651 14.0857 4.04231 13.8989C3.70086 12.4556 5.46518 10.5772 7.09939 12.7405L8.69475 14.3711V6.33905C8.9063 4.69321 11.5057 4.36674 11.944 6.33903V10.077C13.5654 9.92995 20.1188 11.0541 18.882 15.5361C18.824 15.7461 18.7686 15.9606 18.7114 16.1708C18.5031 16.9367 17.9936 18.0548 17.5029 19.0078C16.9574 20.0676 17.101 21.5647 17.0086 21.9993" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Dragright01;
