import React from 'react';
import type { IconProps } from '../types';

const Expander: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className, ...rest }) => {
  return (
    <svg color={color} className={className} stroke="currentColor" {...rest} width={size} height={size} fill="none" viewBox="0 0 24 24">   <path stroke="#1B1C1B" strokeLinecap="round" strokeWidth="1.5" d="M11.338 16.496c.258-.216.552-.385.865-.49 2.023-.634.9-2.152 2.736-2.751 1.416-.462.982-1.242 1.534-1.9m-6.418 2.57c.198-.156.434-.268.695-.32 1.073-.205.91-1.846 2.05-2.065.785-.159.697-.954 1.105-1.47m-6.417 2.57c.104-.426.551-.385.864-.49 1.944-.715.82-2.402 2.736-2.751 1.454-.213.892-1.338 1.534-1.9"/>   <path stroke="#1B1C1B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 15.334 8.658 22m-5.82-6.207.678-.636c.414-.388.853-.833 1.419-.873.522-.038 1.229.24 3.171.925.645.227 1.443 2.256 1.562 3.598.058.648-.33 1.2-.78 1.668l-.545.567m6.999-19.038 6.625 6.7m-6.17-5.86-.638.677c-.39.413-.836.85-.88 1.417-.04.522.235 1.232.909 3.18.223.646 2.244 1.455 3.583 1.581.648.062 1.202-.324 1.673-.773l.568-.542"/> </svg>
  );
};

export default Expander;
