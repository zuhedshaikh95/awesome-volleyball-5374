import React, { useEffect, useState } from "react";
import AdItem from "./AdItem";

function HomePage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];
      for (let i = 0; i < 12; i++) {
        _list.push(<AdItem placeholder={true} />);
      }
      setList(_list);
    }
  }, list);

  return <div className="home-page">{list}</div>;
}
export default HomePage;
