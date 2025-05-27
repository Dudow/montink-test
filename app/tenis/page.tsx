'use client';

import { CepChecker } from './components/CepChecker';
import { VariantsSelector } from './components/VariantsSelector';
import { ProductInfo } from './components/ProductInfo';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { usePage } from './use';
import { useEffect } from 'react';
import { ImageCollection } from './components/ImageCollection';

export default function ProductPage() {
  const {
    getProduct,
    product,
    setVariantsArray,
    variantsArray,
    filteredProduct,
    buyProduct,
  } = usePage();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <Breadcrumbs />
        <div className="mx-auto flex flex-col md:flex-row gap-8">
          <ImageCollection image={filteredProduct.image_url} />

          <div className="w-full md:w-1/3">
            <ProductInfo
              price={filteredProduct.price}
              title={product.title}
              product={filteredProduct}
            />

            <VariantsSelector
              product={product}
              variantsArray={variantsArray}
              setVariantsArray={setVariantsArray}
            />

            <CepChecker />

            <button
              onClick={buyProduct}
              disabled={filteredProduct.inventory_quantity === 0}
              className="bg-black cursor-pointer text-white px-24 py-4 rounded-full hover:bg-gray-700 transition font-bold"
            >
              {filteredProduct.inventory_quantity === 0
                ? 'Produto indisponível'
                : 'Adicionar ao carrinho'}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
