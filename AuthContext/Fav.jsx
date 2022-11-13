import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AddFav = createContext()

function AddFavProvider({children}){
    const [favItem,setFavItem]=useState([])
    
     
   
    const addToFav=(data)=>{
       
       setFavItem([...favItem,data])
       
    }

    

    const deleteFromFav=(id)=>{
        console.log(id)
        const deletedAryy = favItem.filter((item)=> id != item._id )
        
        setFavItem(deletedAryy)
    }
    console.log(favItem)
    return <AddFav.Provider value={{favItem,addToFav,deleteFromFav}}>{children}</AddFav.Provider>
}

export default AddFavProvider