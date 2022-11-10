
import axios from "axios"
export const  getData=(params={})=>{
    
    return axios.get(`http://localhost:8080/all?_page=1&`,{
        params: {
            
            _limit: params.limit,
            // _catagory: params.catagory
            
          }
    })
}