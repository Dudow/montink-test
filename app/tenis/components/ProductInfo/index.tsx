import formatPrice from '@/app/utils/formatPrice';

type ProductInfoProps = {
  title: string;
  price: string;
};

export const ProductInfo = ({ price, title }: ProductInfoProps) => {
  return (
    <div className="space-y-4 mb-4">
      <div>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <span className="font-semibold">Casual</span>
      </div>

      <div>
        <p className="text-lg text-zinc-900">
          <b>{formatPrice(price)}</b> no PIX
        </p>
        <p className="text-sm text-zinc-700">
          {/* MOCKING A TAX FOR CREDIT CARD */}
          ou <b>{formatPrice(String(Number(price) * 1.1))}</b> em até 4x sem
          juros
        </p>
      </div>

      <p className="text-green-800">
        <b>Baixe o Nike App</b> e ganhe <b>5% de desconto</b> com o cupom{' '}
        <b>PRIMEIRACOMPRA</b>, na primeira compra feita no app
      </p>
    </div>
  );
};
