import React from "react";
import  "./aside.css";


import AsideCompany from "./asidecompany/asidecompany";
import AsideFriend from "./asidefriend/asidefriend";
import AsideGroups from "./asidegroups/asidegroups";

import AsideNewsContainer from "./asidenews/asidenewsContainer";

function Aside(){
  return ( 
    <aside className="aside">
      <AsideNewsContainer />
      <AsideGroups />
      <AsideCompany />
      <AsideFriend />
    </aside> 
  )
}

export default Aside;