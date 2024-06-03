'use client';

import { useEffect, useState } from 'react';
import { handler } from '@/api/products';

interface Product {
  id: number;
  title: string;
  image: { src: string };
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await handler();
      setProducts(data.products);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ul>
              <li><img src={product.image.src} alt="" width="30" /></li>
              <li>{product.title}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
