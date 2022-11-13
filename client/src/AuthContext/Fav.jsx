import { useState } from "react";
import { createContext } from "react";

export const AddFav = createContext();

function AddFavProvider({ children }) {
  const [favItem, setFavItem] = useState([]);

  const addToFav = (data) => {
    setFavItem([...favItem, data]);
  };

  const deleteFromFav = (id) => {
    const deletedAryy = favItem.filter((item) => id != item._id);

    setFavItem(deletedAryy);
  };
  
  return (
    <AddFav.Provider value={{ addToFav, deleteFromFav }}>
      {children}
    </AddFav.Provider>
  );
}

export default AddFavProvider;
