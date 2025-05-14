import { fetchAddressByCep } from '@/app/services/viaCep';
import { useState } from 'react';

export const useCepChecker = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  // Cep mask
  const handleChange = (value: string) => {
    let finalValue = value.replace(/\D/g, '');

    if (finalValue.length > 5) {
      finalValue = finalValue.slice(0, 5) + '-' + finalValue.slice(5);
    }

    if (finalValue.length > 9) {
      finalValue = finalValue.slice(0, 9);
    }

    setCep(finalValue);
  };

  const handleCepSearch = async () => {
    setError('');

    try {
      const address = await fetchAddressByCep(cep);
      setAddress(
        `${address.logradouro}, ${address.bairro}, ${address.localidade} - ${address.uf}`,
      );
    } catch (err) {
      setAddress('');
      setError('CEP inválido ou não encontrado');
    }
  };

  return {
    address,
    cep,
    error,
    handleCepSearch,
    handleChange,
  };
};
