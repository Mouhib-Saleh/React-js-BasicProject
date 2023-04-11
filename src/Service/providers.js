import axios from "axios"

 const API_URL = "http://localhost:3001/providers"

    export const addProviderJson = async (provider) => {
        try {
            let response = await axios.post(API_URL, provider)
           console.log(response)
          } catch (error) {
            console.log(error)
          }
        
    }