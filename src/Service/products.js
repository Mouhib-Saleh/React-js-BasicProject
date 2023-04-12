import axios from "axios"

 const API_URL = "http://localhost:3001/products"

    export const getProducts = async () => {
        try {
            let response = await axios.get(API_URL)
            return response.data
          } catch (error) {
            console.log(error)
          }
        
    }

    export const updatedProducts = async (product) => {  
        try {
          const id = product.id;
          const pro = {
            count: product.count,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price

          }
          console.log("from service ",id);
            let response = await axios.put(`http://localhost:3001/products/${id}`,pro)
            return response.data
          } catch (error) {
            console.log(error)
          }
        
    }
