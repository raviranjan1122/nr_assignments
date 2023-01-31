import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


/**What is State?
 * What is React Hooks? - its a normal js functions
 * what is useStae?
 * */

// here using normal js function to write filter algorithm...
function filterData(searchText, restaurants){
 const filterData = restaurants.filter((restaurant)=>
 restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
 return filterData;
 
}

//console.log("filterData",filterData);

const Body = () => {

//declearing  normal variable in javascript like that...
 // const searchText = "KFC";


//delclearing variables in ReactJS(by using Hooks)
const [allRestaurants, setAllRestaurants]=useState([]);
const [filterRestaurants, setFilterRestaurants]= useState([]);
const [searchText, setSearchText] = useState(""); //returns = [variable name, function to update the variable]

//const [searchClicked, setSearchClicked] = useState("False");
//console.log("resturant",restaurants);
//console.log("search text", searchText);


//useEffect....when it is dependent  then it will call on every dependency...[once after render + everytime after render(my search text insert or delete)]
// useEffect(()=>{
//   console.log("call this when dependency changed...")
// },[searchText]);


//useEffect....when we remove dependency(empty dependency array) then it will call one time, after render
// useEffect(()=>{
//   console.log("call this when dependency changed...")
// },[]);


useEffect(()=>{
//make a API call 
getRestaurants();

},[]);
async function getRestaurants(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.467125140550735&lng=78.36250495165586&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  // i can use this way also but here is a risk some time we will missed or getting broke flow...
  //setRestaurants(json.data.card[2].data.data.cards);
  //or i can use by using  optional chaining 
  setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);

}

console.log("render...");
/**
 * 1. 1st use shimmer ui
 * 2. after filter if you are not finding any restaurant the use "No Restaurants Found"
 */
// not render component ( this is know as Early return)
if(!allRestaurants) return null;
//if(!allRestaurants) return null; If i dont have any restaurents then show no restaurannts ....

if(filterRestaurants?.length===0)
return <h1> No Restaurant match your filter...</h1>

//Conditional Rendering......
    return  allRestaurants.length === 0 ?(<Shimmer/>):(
      <> 
      <div className="search-container">
        <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        // how to write onChange() in reactjs.
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />
        {/* <h3>{searchText}</h3> */}
        {/* <h3>{searchClicked}</h3> */}
        {/* <button className="search-btn" onClick={() =>{
          // writing toggling condition here to check reconciliation(diff-algorithm) concepts...
          if(searchClicked === "true"){
            setSearchClicked("false");
          }else{
            setSearchClicked("true");
          }
        }}>Search</button> */}
        <button className="search-btn" onClick={()=>{
          //need to filter the data
          const data = filterData(searchText, allRestaurants);
          //update the state -- resturants
          setFilterRestaurants(data);
        }}>
        search
        </button>
      </div>
      <div className="restaurantList">
        {/* you have to write logic for NO Restaurants found here  */}
          {filterRestaurants.map((restaurant)=>{
              return (<RestaurantCard {...restaurant.data} key={restaurant.data.id}/>);
          })}
      </div>
      </> 
    );
  };
export default Body;