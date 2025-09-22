import React from 'react';
import type { IconProps } from '../types';

const Crane: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M15.254 16.002H5.25a3 3 0 1 0 0 6h10.003a3 3 0 1 0 0-6Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m13.076 6.614-1.67-1.546c-.568-.527-.852-.79-1.205-.928-.352-.138-1.175-.138-1.95-.138h.004c-1.886 0-2.83 0-3.415.586-.586.586-.586 1.528-.586 3.414v1c0 1.886 0 2.828.586 3.414.586.586 1.529.586 3.415.586h2.316c1.581 0 2.372 0 2.914-.422.13-.101.248-.219.35-.35.422-.541.422-1.332.422-2.913 0-.724-.104-1.324-.223-1.653-.161-.312-.427-.558-.958-1.05Zm0 0s3.041-3.372 3.498-3.792c.505-.404.78-.822 2.52-.816.331-.007.72-.006 1.165-.006m0 3.498v.504m-.048 5.496v.444c0 .094.024.048.024.048.122.005.48.096.48.096s1.092.336 1.032 1.536c-.033.66-.556 1.203-1.188 1.344-.698.155-1.525-.204-1.8-.96m1.5-5.502v.498"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.248 19.002h.009m-4.006 0h.009m7.984 0h.01"/> </svg>
  );
};

export default Crane;
