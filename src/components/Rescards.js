
export const Rescards = (props) => {
    const {resData} = props
    return (
      <div className="res_cards">
        <img className="res_cards_image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
        <div>{resData.info.name}</div>
        <div>{(resData.info.cuisines).join(", ")}</div>
        <div>{resData.info.avgRating} Stars Rating</div>
        <div>{resData.info.costForTwo}</div>
  
        </div>
    );
  }