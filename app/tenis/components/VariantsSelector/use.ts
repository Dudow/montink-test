import { getPersistency, setPersistency } from '@/app/utils/usePersistency';
import { useEffect, useState } from 'react';

export const useVariantsSelector = ({ sizes }: { sizes: string[] }) => {
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const storedSize = getPersistency('selectedSize');

    if (storedSize) return setSelectedSize(storedSize);

    setSelectedSize(sizes[0]);
  }, []);

  const onSizeChange = (size: string) => {
    setSelectedSize(size);
    setPersistency({
      expirationTime: 15,
      key: 'selectedSize',
      value: size,
    });
  };

  return { selectedSize, onSizeChange };
};
