import React from 'react';
import HomeSocials from './homesocials';

import s from './homeinfo.module.css'

function HomeInfo () {
  return (
    <div className={s.homeinfo}> 
      <div className={s.ava}><img src="http://lorempixel.com/250/200" alt="" /></div>
      <div className={s.info}>
        <p className={s.name}>Leonid Ivanov</p>
        <p className={s.link}>@leonidivanovweb</p>
      </div>
      <div className={s.block}>
        <HomeSocials />
        <a className={s.btn_edit} href="#">Edit profile</a>
      </div>

    </div>
  )
}


export default HomeInfo;