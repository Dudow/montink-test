import { useEffect, useState } from 'react';
import { api } from '../api';
import { Product, variantProduct } from '../interfaces/product';

export const usePage = () => {
  const [product, setProduct] = useState({} as Product);
  const [variantsArray, setVariantsArray] = useState<string[]>([]);
  const [filteredProduct, setFilteredProduct] = useState({} as variantProduct);

  const buyProduct = () => {
    api.post(
      'https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c',
      [
        {
          values: variantsArray,
          quantity: 1,
          product_id: product.id,
          variant_id: filteredProduct.id,
        },
      ],
    );
  };

  const getProduct = () =>
    api
      .get(
        'https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-1.json',
      )
      .then((response) => {
        const data: Product = response.data;

        setProduct(data);

        const tempArray: string[] = data.options.map((option, index) => {
          return data.values[index][0];
        });
        setVariantsArray(tempArray);
      });

  useEffect(() => {
    if (!product || !product.variants) return;

    const tempProduct = product.variants.find((variant) => {
      return variant.values.toString() === variantsArray.toString();
    });

    if (!tempProduct) return;

    const { id, image_url, inventory_quantity, price, values } = tempProduct;

    setFilteredProduct({
      id,
      image_url,
      inventory_quantity,
      price,
      values,
    } as variantProduct);
  }, [product, variantsArray]);

  return {
    product,
    variantsArray,
    getProduct,
    setVariantsArray,
    filteredProduct,
    buyProduct,
  };
};
