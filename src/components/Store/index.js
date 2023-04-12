import React,{useEffect, useState} from 'react'
import Products from "./Products";
import { getProducts } from "../../Service/products";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProdcut } from '../../redux/slices/ProductSlice';
export default function Index() {
  const [products, setProducts] = useState([]);
  const [childProducts , setChildProducts] = useState([]);
  const dispatch = useDispatch();
  // function that is passed as props to child component
  const updateProducts = (products) => {
    setChildProducts(products);
   
  }

  const providers = useSelector(state => state.providers.providers);
  

  async function getProductsApi() {
    try {
    // setProducts(await getProducts());
      dispatch(addProdcut(await getProducts()));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return (
    <Products products={products} setFather={updateProducts} />
  );
}
