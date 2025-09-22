import React from 'react';
import type { IconProps } from '../types';

const Prayerrug01: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 21h11c1.886 0 2.828 0 3.414-.586C20 19.828 20 18.886 20 17v-6c0-1.886 0-2.828-.586-3.414C18.828 7 17.886 7 16 7H8"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M8 21H4a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2c1.886 0 2.828 0 3.414-.586C8 15.828 8 14.886 8 13V8c0-1.886 0-2.828-.586-3.414C6.828 4 5.886 4 4 4a2 2 0 0 0-2 2v13Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 16.357h.331c.29 0 .435 0 .557.029.122.028.355.145.82.377 1.602.802 2.671-.6 3.596-1.736.464-.57.696-.855.696-1.027 0-.172-.232-.457-.696-1.027-.925-1.136-1.994-2.539-3.596-1.736-.465.232-.698.349-.82.377-.122.03-.267.03-.557.03H11M20 16h2m-2 4h2m-2-8h2m-2-4h2"/> </svg>
  );
};

export default Prayerrug01;
