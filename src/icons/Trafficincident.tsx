import React from 'react';
import type { IconProps } from '../types';

const Trafficincident: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 1.998h18M10.707 21.46l.057-1.104m0 0c.297.077.816.214 1.084.355 2.337 1.24 2.876 1.685 3.812.9l3.948-3.9c.796-.925.356-1.468-.86-3.815a5.855 5.855 0 0 1-.38-1.051m-7.604 7.511c-1.129-.292-2.152-.202-2.845-.734-.114-.087-1.211-1.222-2.018-2.036-.606-.611.005-1.178.535-1.795.337-.393.638-.822 1.003-1.189a321.309 321.309 0 0 1 5.403-5.339c.394-.38.86-.696 1.28-1.047.477-.397.984-.8 1.56-.291.86.76 1.932 1.922 2.018 2.036.524.698.388 1.753.669 2.884m-7.605 7.511 7.605-7.511m0 0 1.116-.137m-11.46 6.99.963-1.232m2.006-3.963 1.725-1.613m3.787-1.923 1.413-.61m-5.225-.992-.839-.879a.997.997 0 0 1 .036-1.413l.801-.76a1.001 1.001 0 0 1 1.394.016l1.443 1.433M7.404 14.72l-.87-.849a1.001 1.001 0 0 0-1.415.017l-.771.79a.997.997 0 0 0-.002 1.392l1.417 1.46"/> </svg>
  );
};

export default Trafficincident;
