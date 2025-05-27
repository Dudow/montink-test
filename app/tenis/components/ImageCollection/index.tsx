import Image from 'next/image';

export type ImageCollectionProps = {
  image: string;
};

export const ImageCollection = ({ image }: ImageCollectionProps) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow">
        {image && (
          <Image
            src={image}
            alt="Imagem principal"
            fill
            className="object-cover rounded-xl"
            unoptimized
          />
        )}
      </div>
    </div>
  );
};
