import React from 'react';
import s from './homedesc.module.css'

function HomeDesc (props) {
  return (
    <p className={s.desc}>{props.desc}</p>
  )
}

export default HomeDesc;