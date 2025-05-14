'use client';

import { CepChecker } from './components/CepChecker';
import { ImageCollection } from './components/ImageCollection';
import { VariantsSelector } from './components/VariantsSelector';
import { ProductInfo } from './components/ProductInfo';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { usePage } from './use';

export default function ProductPage() {
  const { selectedColorImages, product, handleColorChange, selectedColor } =
    usePage();

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <Breadcrumbs />
        <div className="mx-auto flex flex-col md:flex-row gap-8">
          <ImageCollection images={selectedColorImages} />

          <div className="w-full md:w-1/3">
            <ProductInfo price={product.price} title={product.title} />

            <VariantsSelector
              sizes={product.sizes}
              colors={product.colors}
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />

            <CepChecker />

            <button className="bg-black cursor-pointer text-white px-24 py-4 rounded-full hover:bg-gray-700 transition font-bold">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
