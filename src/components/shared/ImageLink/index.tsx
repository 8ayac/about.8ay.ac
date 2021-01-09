import React from 'react';

export const ImageLink: React.FC<{
  url: string;
  imagePath: string;
  alt: string;
}> = (props) => {
  const { url, alt, imagePath } = props;
  return (
    <a href={url}>
      <img
        src={imagePath.startsWith('/') ? imagePath : `/${imagePath}`}
        alt={alt}
        width="300px"
      />
    </a>
  );
};
