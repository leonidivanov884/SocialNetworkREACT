import React from "react";
import { connect } from 'react-redux';
import { setUsers } from '../../../redux/users-reducer';
import axios from 'axios';
import MyFriends from './myfriends';

class MyFriendsApi extends React.Component {
  componentDidMount(){
    axios.get("https://leonid.deviant.group/api/users/users.json").then(response => {   
      debugger    
      this.props.setUsers(response.data)
    })
  }
  render() {
    return <MyFriends users={this.props.users}/>
  }
}


let mapStateToProps = (state) => {  
  return {
    users: state.users.users
  }  
}

const MyFriendsContainer = connect(mapStateToProps , { setUsers })(MyFriendsApi)

export default MyFriendsContainer;



 
