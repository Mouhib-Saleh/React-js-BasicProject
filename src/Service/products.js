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
