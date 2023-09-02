import React from "react";
import "./framework.css"

function Frameworks(props) {
    const {frames}=props
    return (

        <div className="frameBox">
            <h4 className="frameTittle">Frameworks</h4><br/>
    {frames.map((val,i)=>{console.log("hola perras",val);
    let Frames=val;
    return <Frames key={i} className="frame"/>
})}
        </div>
    )
}


export default Frameworks