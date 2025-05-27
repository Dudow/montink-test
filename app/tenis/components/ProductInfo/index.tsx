import { variantProduct } from '@/app/interfaces/product';
import formatPrice from '@/app/utils/formatPrice';

type ProductInfoProps = {
  title?: string;
  price?: string;
  product: variantProduct;
};

export const ProductInfo = ({
  price = '',
  title = '',
  product,
}: ProductInfoProps) => {
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
      {product && (
        <p
          className={
            product.inventory_quantity > 0 ? 'text-green-800' : 'text-red-800'
          }
        >
          {product.inventory_quantity > 0
            ? `Produtos em estoque: ${product.inventory_quantity}`
            : 'Produto indisponível'}
        </p>
      )}
    </div>
  );
};
