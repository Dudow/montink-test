import { useEffect, useState } from 'react';
import { ImageCollectionProps } from '.';

export const useImageCollection = ({ images }: ImageCollectionProps) => {
  const [selected, setSelected] = useState(images[0]);

  useEffect(() => {
    if (images.length === 0) return;

    setSelected(images[0]);
  }, [images]);

  return { selected, setSelected };
};
