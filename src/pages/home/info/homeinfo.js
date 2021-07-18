import React from 'react';
import HomeSocials from './homesocials';

import s from './homeinfo.module.css'


function HomeInfo (props) {
  
  let onFollow = () => {
    // props.follow(props.homeInfo.id)
    props.togglefollow()
      
  }
  
  let btn;
  let textBtn = props.homeInfo.friends === false ? 'Follow' : 'Unfollow'
  
  btn = props.home == true 
    ? <a className={s.btn_edit} href="#">Edit profile</a>
    : <a className={s.btn_edit} onClick={onFollow} href="#">{textBtn}</a> 
 

  return (

    <div className={s.homeinfo}> 
      
      <div className={s.ava}><img src={props.homeInfo.avatar} alt="" /></div>
      <div className={s.info}>
        <p className={s.name}>{props.homeInfo.name}</p>
        <p className={s.link}>{props.homeInfo.login}</p>
      </div>
      <div className={s.block}>
        <HomeSocials socials={props.homeInfo.socials}/>
        {btn}        
      </div>

    </div>
  )
}


export default HomeInfo;