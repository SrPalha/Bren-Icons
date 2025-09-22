import React from 'react';
import type { IconProps } from '../types';

const Billiard01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none"> <g id="billiard-01"> <path id="Vector" d="M8.07089 10C8.02417 9.6734 8 9.33952 8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16C14.7024 16 14.4091 15.9814 14.1212 15.9454" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_2" d="M18.8684 10C19.2035 8.6899 18.8933 7.01849 18 6" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round"/> <path id="Vector_3" d="M2 19.0966L10.2253 11.5568M10.2253 11.5568C11.677 11.3543 12.6046 12.3221 12.6046 13.5987M10.2253 11.5568L12.6046 9.37573C13.1688 8.85858 14.0402 8.87752 14.5813 9.41868C15.1225 9.95985 15.1414 10.8312 14.6243 11.3954L12.6046 13.5987M4.90338 22L12.6046 13.5987" stroke="#1B1C1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g> </svg>
  );
};

export default Billiard01;
