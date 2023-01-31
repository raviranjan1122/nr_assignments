import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString,}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4 className="cuisinesNameList">{cuisines.join(",")}</h4>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;