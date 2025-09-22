import React from 'react';
import type { IconProps } from '../types';

const Coupon02: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="m7.832 21.348-.519-.69c-.455-.607-1.423-.558-1.807.09-.54.912-2.006.549-2.006-.496V3.748c0-1.045 1.466-1.408 2.006-.497.384.649 1.352.698 1.807.091l.519-.69c.653-.87 2.017-.87 2.67 0l.081.109c.693.922 2.14.922 2.834 0l.081-.109c.653-.87 2.017-.87 2.67 0l.519.69c.455.607 1.423.558 1.807-.09.54-.911 2.006-.549 2.006.496v16.504c0 1.045-1.466 1.408-2.006.497-.384-.649-1.352-.698-1.807-.091l-.518.69c-.654.87-2.018.87-2.67 0l-.082-.109c-.693-.922-2.14-.922-2.834 0l-.081.109c-.653.87-2.017.87-2.67 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 9-6 6"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15h-.009M9.009 9H9"/> </svg>
  );
};

export default Coupon02;
