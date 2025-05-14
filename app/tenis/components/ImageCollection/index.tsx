import { useImageCollection } from './use';
import Image from 'next/image';

export type ImageCollectionProps = {
  images: string[];
};

export const ImageCollection = ({ images }: ImageCollectionProps) => {
  const { selected, setSelected } = useImageCollection({ images });

  return (
    <div className="w-full md:w-1/2">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow">
        <Image
          src={selected}
          alt="Imagem principal"
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
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
