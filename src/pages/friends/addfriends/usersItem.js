import React from 'react';
import s from './users.module.css'
import { Link } from 'react-router-dom';

class UsersItem extends React.Component {
   render = () => {
    if (this.props.friend === false) {
      return (
        <li>
          <div className={s.ava}><img src={this.props.img}/></div>
          <p className={s.name}>{this.props.name}</p>
          <p className={s.status}>{this.props.desc}</p>        
          <Link to="/userPage" className={s.add_in_friends}>Profile</Link>
        </li>
      )
    }
    return null; 
  }
}

export default UsersItem;