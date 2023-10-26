import React,{useEffect, useState} from 'react'
import Products from "./Products";
import { getProducts } from "../../Service/products";

export default function Index() {
  const [products, setProducts] = useState([]);

  async function getProductsApi() {
    try {
      setProducts(await getProducts());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return (
    <Products products={products} />
  );
}
