import React from "react";

const Avtarlist = (props) => {
    
    return(
        <div className="avatarstyle bg-light-purple dib pa4 m-5 grow tc">
                <img src={`https://joeschmoe.io/api/v1/${props.image}`} alt="image" />
                <h1 className=""> {props.name} </h1>
                <p className="text-warning text-center"> {props.work}</p>
            </div> 
    )
}
export default Avtarlist;
