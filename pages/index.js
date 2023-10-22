//Rohan Tankala, rtankala1, 122836166, Professor Blessing Ajiboye
//Assignment Three
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';

export default function Home({ products }) {
  return (
    <div className="container mx-auto px-4 py-8">
<Navbar />
<div className="flex flex-col items-center justify-center mb-6 text-center h-auto">
    <Image src="https://fakestoreapi.com/icons/logo.png" alt="Organization Logo" width={200} height={200} />
    <h1 className="mt-4">Welcome to the Fake Store's fake store!!!!</h1>
    <p className="mt-2">It is our mission to show our ecommerce table to you!!!</p>
</div>


      {/* Display Product Images */}
      <div className="grid grid-cols-3 gap-4">
        <h2>Best sellers!!!</h2>
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="border p-4">
            <Image src={product.image} alt={product.title} width={200} height={200} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
