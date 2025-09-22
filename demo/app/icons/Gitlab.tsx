import React from 'react';
import type { IconProps } from '../types';

const Gitlab: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.798 13.084c.172.632.259.948.161 1.239-.097.29-.356.492-.874.894l-7.838 6.085c-.6.465-.899.698-1.247.698-.348 0-.648-.233-1.247-.698l-7.838-6.085c-.518-.402-.777-.603-.874-.894-.098-.291-.011-.607.161-1.24L5.231 2l2.857 6.654c.256.596.384.894.638 1.062.254.167.579.167 1.228.167h4.091c.65 0 .975 0 1.229-.167.254-.168.382-.466.638-1.062L18.77 2l3.029 11.084Z" clipRule="evenodd"/> </svg>
  );
};

export default Gitlab;
