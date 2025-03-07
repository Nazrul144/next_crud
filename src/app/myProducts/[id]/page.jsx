'use client'
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const DetailsPage = () => {

  const params = useParams();
  const id = params.id;
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getSingleData = async()=>{
      const res = await fetch(`http://localhost:3000/myProducts/api/${id}`)
      const data = await res.json();
      setProducts(data.res);
      setLoading(false);
    }
    getSingleData();
  },[])

  console.log("Full Product Data:", products);
console.log("Product Image:", products?.image);





 
  return (
    <div>
      <div>
        {loading && <span>Loading...</span>}
      </div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
           <Image src={products?.image} alt={products?.name} width={ 500} height={500}/>
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl font-bold leading-none sm:text-3xl">
             {products.name}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              <li>Category:{products?.category}</li>
              <li>Price:{products?.price}</li>
              <li>Guarantee:{products?.guarantee}</li>
              <li className="text-green-500">Features:
                {products?.features?.map((feature, index)=>(
                  <li key={index}>{feature}</li>
                ))}
              </li>
              <li>Rating: <Rate allowHalf value={products.rating} /></li>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                href="/myProducts"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Back 
              </Link>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
