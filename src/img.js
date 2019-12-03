import React from "react";


const Img = (props) => {
    return (<div >
        <img class="rounded mx-auto d-block "style={{width:500,height:300,margin:100}} src={props.src} />
    </div>)
}
export default Img; 