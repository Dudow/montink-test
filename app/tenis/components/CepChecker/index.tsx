import { useCepChecker } from './use';

export const CepChecker = () => {
  const { address, cep, error, handleCepSearch, handleChange } =
    useCepChecker();

  return (
    <div className="mb-6">
      <h2 className="font-bold text-lg mb-1">Calcular frete e entrega</h2>
      <div className="flex">
        <input
          type="text"
          value={cep}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="00000-000"
          className="border rounded-l-xl px-3 py-2 w-60 "
        />
        <button
          onClick={handleCepSearch}
          className="bg-black text-white px-4 py-2 rounded-r-xl cursor-pointer"
        >
          Consultar
        </button>
      </div>

      <div className={`mt-2 ${error || address ? 'pb-0' : 'pb-5'}`}>
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}

        {address ? (
          <p className="text-sm text-gray-700 mt-1">
            Endereço de Entrega: <strong>{address}</strong>
          </p>
        ) : (
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            className="text-sm text-gray-700 mt-1 underline cursor-pointer"
            target="_blank"
          >
            Não sei meu CEP
          </a>
        )}
      </div>
    </div>
  );
};
