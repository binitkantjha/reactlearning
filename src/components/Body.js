import { Rescards } from "./Rescards";
import { useState, useEffect } from "react";
import { Simmer } from "./simmer";
export const Body = () => {

  const [listOfResrtro, setListOfResrtro] = useState([]);
  const [filteredRestro, setfilterRestro] = useState([]);

  const [serchValues, setserchValues] = useState("")

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.18300&lng=86.31370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const res = await data.json();
    console.log(res);
    setListOfResrtro(res?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestro(res?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // if (filteredRestro.length === 0) {
  //   return <Simmer/>
  //  }
   return (

   
    <div className="body">
      <div className="top-rated-restro">
        <div className="serch-box-main">
          <input className="serch-box" value={serchValues} onChange={(e) => {
           setserchValues(e.target.value);
          }} ></input>
          <button onClick={() => {
          const filteredCard = listOfResrtro.filter(
            (res) => res.info.name.toLowerCase().includes(serchValues.toLowerCase())
           
          )
          setfilterRestro(filteredCard);
          }}>search</button>
        </div>
        <button className="res-btn" onClick={() => {
          const filteredlist = filteredRestro.filter(
            (res) => (res.info.avgRating) > 4.5
          );
         
          setfilterRestro(filteredlist);
        }}>
          Sort top rated Restaurant</button>
      </div>
      <div className="res_cards_container">
        {filteredRestro.map((restro) => {
          return <Rescards key={restro.info.id} resData={restro} />
        })}
      </div>

    </div>
  );
}