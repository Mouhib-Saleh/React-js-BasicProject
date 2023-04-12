import React,{useState , useEffect} from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {updatedProducts} from '../../Service/products';
import { useDispatch ,useSelector} from 'react-redux';
import { Increment } from '../../redux/slices/ProductSlice';


export default function Store(props) {
  
  const dispatch = useDispatch();
  const productsRedux = useSelector(state => state.products.products[0]);
  console.log("from store redux p ",productsRedux[0]);
  props.setFather(props.products);
// function that updates a product
  const [products, setProduct] = useState([]);
 
  useEffect(() => {
    setProduct(props.products);
    console.log("from store ",props.products);

  }, [props.products,products]);
  return (
    <>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      //add space between cards
      gap: '1rem',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: '5vh',
     
      
    }}>
    {productsRedux.map(product => (
     
        <Card  key={product.id} style={{ width: '16rem', boxShadow: '0 0 10px rgba(0,0,0,0.5)', }} >
      <Card.Img variant="top" src={product.image} style={{
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Card.Text>
        ${product.price}
        </Card.Text>
        <Card.Text>
        Count: {product.count}
        </Card.Text>
        <div style={{
          display: 'flex',
                  
        }}>
        <Button variant="primary">Buy</Button>
        <div style={{
         
          right: '0',
          alignContent: 'right',
          alignItems: 'right',
          justifyContent: 'right',
          marginLeft: 'auto',

        }}>
       {/*  <Button variant="primary" onClick={
          //arrow function to increent a product count
          () => {
            product.count++;
            updatedProducts(product);
            const productIndex = products.findIndex(product => product.id === product.id);

            // If the product was found, update the `props.products` array
            if (productIndex !== -1) {
              const updatedProducts = [products]; // Make a copy of the array
              updatedProducts[productIndex] = product; // Update the specific product
              console.log("from store dds ",updatedProducts[productIndex]);
              setProduct(updatedProducts); // Update the state of the `products` prop
            }
          }

        
        }>Add</Button> */}
         <Button variant="primary" onClick={
          //arrow function to increent a product count
          () => {
            dispatch(Increment(product.id))
          }

        
        }>Add</Button>
        </div></div>
      </Card.Body>
    </Card>
    
        
    ))}
    </div>
    </>
     
  )
}
