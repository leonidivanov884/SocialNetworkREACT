import React from "react";
import s from "./asidecompany.module.css";


function AsideCompany() {
  return (
    <div className="aside__groups">
      <h3>Company for you</h3>    
      <ul className="aside__list">
        <li>
          <a href="#">
            <i className="aside__img"><img src="http://lorempixel.com/250/200" alt="" /></i>
            <div className="aside__info">
              <h4>EPAM</h4>
              <p>Systems, Inc. is an American company</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="aside__img"><img src="http://lorempixel.com/250/200" alt="" /></i>
            <div className="aside__info">
              <h4>The best books</h4>
              <p>Only the best books tested on tested in</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="aside__img"><img src="http://lorempixel.com/250/200" alt="" /></i>
            <div className="aside__info">
              <h4>The best books</h4>
              <p>Only the best books tested on tested in</p>
            </div>
          </a>
        </li>
      </ul>       
      <a href="#" className="aside__more">Show more</a>
    </div>
  )
}


export default AsideCompany;