import { Product } from '@/app/interfaces/product';

type VariantsSelectorProps = {
  product: Product | undefined;
  variantsArray: string[];
  setVariantsArray: (value: string[]) => void;
};

export const VariantsSelector = ({
  product,
  setVariantsArray,
  variantsArray,
}: VariantsSelectorProps) => {
  if (!product || !product.options) return;

  const { options, values } = product;

  const handleSelectVariant = (data: string, index: number) => {
    let tempArray = [...variantsArray];
    tempArray[index] = data;

    setVariantsArray(tempArray);
  };

  return (
    <div className="space-y-6">
      {options.map((option, index) => {
        return (
          <div className="my-10" key={option}>
            <h3 className="font-bold text-lg mb-2">Selecione {option}</h3>
            <div className="grid gap-2 grid-cols-5">
              {values[index].map((value) => (
                <button
                  key={value}
                  onClick={() => handleSelectVariant(value, index)}
                  className={`cursor-pointer px-4 py-4 rounded-md border text-sm font-medium transition ${
                    variantsArray[index] === value
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
