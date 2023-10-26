import React,{useEffect, useState} from 'react'
import Products from "./Products";
import { getProducts } from "../../Service/products";
import { useSelector } from 'react-redux';

export default function Index() {
  const [products, setProducts] = useState([]);
  
  const providers = useSelector(state => state.providers.providers);
  console.log("from store",providers);

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
