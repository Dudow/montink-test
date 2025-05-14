import { useState, useEffect } from 'react';
import { useImageCollection } from './use';

export type ImageCollectionProps = {
  images: string[];
};

export const ImageCollection = ({ images }: ImageCollectionProps) => {
  const { selected, setSelected } = useImageCollection({ images });

  return (
    <div className="w-full md:w-1/2">
      <img
        src={selected}
        alt="Imagem principal"
        className="w-full rounded-xl border shadow object-cover"
      />
      <div className="flex gap-4 mt-4">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Imagem Nº ${index + 1}`}
            onClick={() => setSelected(image)}
            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
              image === selected ? 'border-black' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
