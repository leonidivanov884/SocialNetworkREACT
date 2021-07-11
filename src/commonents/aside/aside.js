import React from "react";
import  "./aside.css";


import AsideCompany from "./asidecompany/asidecompany";
import AsideFriend from "./asidefriend/asidefriend";
import AsideGroups from "./asidegroups/asidegroups";
import AsideNews from "./asidenews/asidenews";

function Aside(){
  return ( 
    <aside className="aside">
      <AsideNews />
      <AsideGroups />
      <AsideCompany />
      <AsideFriend />
    </aside> 
  )
}

export default Aside;