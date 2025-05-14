import { useEffect, useState } from 'react';
import { getPersistency, setPersistency } from '../utils/usePersistency';
import { product } from '../db/productData';

export const usePage = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].hex);

  useEffect(() => {
    const storedColor = getPersistency('selectedColor');

    if (storedColor) return setSelectedColor(storedColor);
  }, []);

  const handleColorChange = (hex: string) => {
    setSelectedColor(hex);
    setPersistency({
      expirationTime: 15,
      key: 'selectedColor',
      value: hex,
    });
  };

  const selectedColorImages =
    product.colors.find((color) => color.hex === selectedColor)?.images || [];

  return {
    selectedColorImages,
    product,
    selectedColor,
    handleColorChange,
  };
};
