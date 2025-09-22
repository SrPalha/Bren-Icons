import React from 'react';
import type { IconProps } from '../types';

const Laptopvideo: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 15V7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h1m11 12v-3.5M3.498 16.015 4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989-.548.996-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996-.549-.996-.19-2.327 1.254-4.989Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="m19.5 4.146.063-.045c1.058-.764 1.587-1.146 2.012-.961.425.184.425.795.425 2.018v.684c0 1.223 0 1.834-.425 2.018-.425.185-.954-.197-2.012-.96l-.063-.046M15.5 9h.5c1.65 0 2.475 0 2.987-.448.513-.449.513-1.17.513-2.614v-.875c0-1.444 0-2.166-.513-2.615C18.475 2 17.65 2 16 2h-.5c-1.65 0-2.475 0-2.987.448C12 2.897 12 3.618 12 5.063v.875c0 1.443 0 2.165.513 2.614C13.025 9 13.85 9 15.5 9Z"/> </svg>
  );
};

export default Laptopvideo;
