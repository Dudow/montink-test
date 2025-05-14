import { useState } from 'react';

export const useVariantsSelector = ({ sizes }: { sizes: string[] }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const onSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return { selectedSize, onSizeChange };
};
