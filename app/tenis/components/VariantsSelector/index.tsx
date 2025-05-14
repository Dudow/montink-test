import { useVariantsSelector } from './use';

type VariantsSelectorProps = {
  sizes: string[];
  colors: { hex: string; images: string[] }[];
  selectedColor: string;
  onColorChange: (hex: string) => void;
};

export const VariantsSelector = (props: VariantsSelectorProps) => {
  const { sizes, colors, selectedColor, onColorChange } = props;

  const { selectedSize, onSizeChange } = useVariantsSelector({ sizes });

  return (
    <div className="space-y-6">
      <div>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.hex}
              onClick={() => onColorChange(color.hex)}
              className={`w-20 h-20 rounded-md border-2 overflow-hidden transition-all ${
                selectedColor === color.hex
                  ? 'border-black'
                  : 'border-transparent'
              }`}
            >
              <img
                src={color.images[0]}
                alt={`Cor ${color.hex}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h3 className="font-bold text-lg mb-2">Selecione um tamanho</h3>
        <div className="grid gap-2 grid-cols-5">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`cursor-pointer px-4 py-4 rounded-md border text-sm font-medium transition ${
                selectedSize === size
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
