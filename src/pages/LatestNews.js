import React from "react";
import "../css/style.css"
import BanarHead from "../components/Utility/BanarHead";
import AllNews from "../components/LatestNews/AllNews";
function LatestNews(){
    return(
        <div>
            <BanarHead title="Latest news"/>
            <AllNews/>
        </div>
    )
} 
export default LatestNews 