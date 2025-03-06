import { useEffect, useState  } from "react";
import { Simmer} from "./simmer";
import { RESLIST_API } from "../utils/imageurl";
import { useParams } from "react-router";
import useRestroMenu from "../utils/useRestroMenu";


const RestaurantMenu = () => {
//  const [listofFood, setlistofFood] =  useState(null);
 const {resid} =  useParams();
 
 const listofFood =  useRestroMenu(RESLIST_API , resid)

    if (listofFood === null ) return (<Simmer/>);


    const {name, cuisines , costForTwoMessage, id} = listofFood?.data?.cards[2]?.card?.card?.info;    
    // console.log(listofFood?.data?.cards[2]?.card?.card?.info)

    const {itemCards} = listofFood?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    // console.log(listofFood?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)

    return (
        <div> 
            <h1>{name + id}</h1>
            <h3>{cuisines.join(", ") + " " + " " + costForTwoMessage }</h3>
            <ul> 
               {itemCards.map(itmes => <li key = {itmes.card.info.id }>{itmes.card.info.name} - {"₹ " +itmes.card.info.price/100}</li>)}
            </ul>
        </div>
    )
   
}
export default RestaurantMenu;