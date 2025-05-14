import { ViaCepReturn } from '../interfaces/viaCepReturn';

export const fetchAddressByCep = async (cep: string): Promise<ViaCepReturn> => {
  const cleanCep = cep.replace(/\D/g, '');
  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);

  const data = await response.json();

  if (data.erro) throw new Error('CEP inválido');

  return {
    logradouro: data.logradouro,
    bairro: data.bairro,
    localidade: data.localidade,
    uf: data.uf,
  };
};
