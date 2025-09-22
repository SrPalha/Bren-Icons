import React from 'react';
import type { IconProps } from '../types';

const Workoutsquats: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeWidth="1.5" d="M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.948 21 1.13-3.41c.404-1.215.606-1.823.304-2.244-.301-.42-.94-.42-2.215-.42H8.933m0 0H7.925c-.948 0-1.423 0-1.725-.373-.302-.374-.216-.793-.043-1.633.29-1.406.872-3.153 1.935-4.341.294-.328.44-.492.763-.56.323-.068.581.05 1.097.286l1.862.85m-2.881 5.77c.241-1.315 1.155-4.312 2.88-5.77M18 8.345l-1.736.997c-.878.504-1.317.756-1.802.779-.485.022-.945-.188-1.865-.608l-.783-.358"/> </svg>
  );
};

export default Workoutsquats;
