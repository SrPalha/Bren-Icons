import React from 'react';
import type { IconProps } from '../types';

const Touchpad4: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 13.579v.163m0 0c0-.823-.6-1.525-1.418-1.66l-1.128-.187v.842M22 13.742v2.083c0 1.83 0 2.745-.28 3.473a4.22 4.22 0 0 1-2.433 2.422c-.732.28-1.651.28-3.49.28-.964 0-1.446 0-1.894-.098a4.236 4.236 0 0 1-1.852-.922c-.348-.298-.637-.682-1.216-1.45l-2.549-3.384a1.42 1.42 0 0 1 .028-1.745 1.435 1.435 0 0 1 2.13-.117l1.29 1.368v-8.24c0-.78.626-1.412 1.4-1.412.772 0 1.4.632 1.4 1.412v2.798m4.92 2.527c0-.93-.76-1.684-1.696-1.684h-.849v.842m2.546.842v.842m-4.922-3.369h.68a1.69 1.69 0 0 1 1.696 1.685m-2.376-1.684v2.526m2.376-.842v.842"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M22 8.01c-.036-2.484-.22-3.892-1.163-4.836C19.665 2 17.778 2 14.005 2h-4.002c-3.772 0-5.659 0-6.83 1.174C2 4.347 2 6.236 2 10.014v2.003c0 1.867 0 2.8.305 3.537a4.005 4.005 0 0 0 2.165 2.168c.408.17.876.244 1.53.278"/> </svg>
  );
};

export default Touchpad4;
