import React from "react";
import { connect } from 'react-redux';
import { onSetUsers } from '../../../redux/users-reducer';
import axios from 'axios';
import MyFriends from './myfriends';

class MyFriendsApi extends React.Component {
  componentDidMount(){
    axios.get("https://leonidivanov884.github.io/SocialNetworkREACT/src/api/users.json").then(response => {
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
let mapDispatchToProps = (dispatch) => {
  return {  
    setUsers: (users) => {      
      dispatch(onSetUsers(users))
    }  
  }
}
const MyFriendsContainer = connect(mapStateToProps , mapDispatchToProps)(MyFriendsApi)

export default MyFriendsContainer;



 
