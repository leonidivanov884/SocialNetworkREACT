import React from "react";
import s from "./myfriends.module.css";
import { Link } from 'react-router-dom';


function Friend(props){
  
  if (props.friend) {
      return (
        <li>
          <Link to="userPage" className={s.info}>
            <div className={s.ava}><img src={props.img}/></div>
            <div className={s.box}>
              <p className={s.name}>{props.name}</p>
              <p className={s.status}>{props.desc}</p>
            </div>
          </Link>
          <Link className={s.send_message}>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <path d="M6.72872 18.5427L7.51837 18.9649C8.74211 19.6191 10.1087 19.9604 11.4964 19.9583L11.5 19.9583C16.1716 19.9583 19.9583 16.1716 19.9583 11.5C19.9583 6.82842 16.1716 3.04167 11.5 3.04167C6.82844 3.04167 3.04168 6.82842 3.04168 11.5V11.5036C3.03959 12.8913 3.38088 14.2579 4.03512 15.4816L4.45729 16.2713L3.80815 19.1918L6.72872 18.5427ZM0.625012 22.375L1.90391 16.621C1.06168 15.0457 0.622323 13.2864 0.625012 11.5C0.625012 5.49374 5.49375 0.625 11.5 0.625C17.5063 0.625 22.375 5.49374 22.375 11.5C22.375 17.5063 17.5063 22.375 11.5 22.375C9.71363 22.3777 7.95434 21.9383 6.37897 21.0961L0.625012 22.375Z" fill="#EEF1F7"/>
            </svg>
          </Link>
        </li>
      )
    }
    return null;
}

export default Friend;