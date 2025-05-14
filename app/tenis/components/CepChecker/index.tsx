import { useCepChecker } from './use';

export function CepChecker() {
  const { address, cep, error, handleCepSearch, handleChange } =
    useCepChecker();

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-1">Calcular frete e entrega</h2>
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

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}

      {address && (
        <p className="text-sm text-gray-700 mt-1">
          Endereço de Entrega: <strong>{address}</strong>
        </p>
      )}
    </div>
  );
}
