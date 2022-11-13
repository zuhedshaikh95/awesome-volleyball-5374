import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [favItem, setFavItem] = useState([]);
  const isLogin = localStorage.getItem("isLogin");
  const [isAuth, setIsAuth] = useState(isLogin);

  function toggleAuth() {
    setIsAuth(!isAuth);
  }

  const addToFav = (data) => {
    setFavItem([...favItem, data]);
  };

  const deleteFromFav = (id) => {
    const deletedAryy = favItem.filter((item) => id != item._id);

    setFavItem(deletedAryy);
  };

  return (
    <AppContext.Provider value={{ addToFav, deleteFromFav, isAuth, toggleAuth }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
