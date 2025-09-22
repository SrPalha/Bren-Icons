import React from 'react';
import type { IconProps } from '../types';

const Messagetranslate: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinejoin="round" strokeWidth="1.5" d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9.053-.83.053-1.69 0-2.52-.274-4.242-3.606-7.62-7.79-7.899a33.182 33.182 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9a19.99 19.99 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184.467.845.159 1.9-.328 2.823-.35.665-.526.997-.385 1.237.14.24.455.248 1.084.263 1.245.03 2.084-.322 2.75-.813.377-.279.566-.418.696-.434.13-.016.387.09.899.3.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0Z"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9.241h4m0 0h2.571m-2.571 0V8m4 1.241h-1.429m0 0c-.469 1.698-1.45 3.303-2.571 4.713m0 0c-.928 1.168-1.951 2.203-2.857 3.046M12 13.954c-.571-.678-1.371-1.776-1.6-2.272m1.6 2.272 1.714 1.805"/> </svg>
  );
};

export default Messagetranslate;
