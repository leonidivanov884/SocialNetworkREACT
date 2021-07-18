import React from "react";
import { connect } from 'react-redux';
import { onSetUsers } from '../../../redux/users-reducer';
import axios from 'axios';
import Users from './users';

class UsersApi extends React.Component {
  componentDidMount() {
    axios.get("https://leonidivanov884.github.io/SocialNetworkREACT/src/api/users.json").then(response => {
      this.props.setUsers(response.data)
    })
  }

  render() {    
    return <Users users={this.props.users.users}/>
  }
}


let mapStateToProps = (state) => {    
  return {
    users: state.users
  }  
}
let mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {      
      dispatch(onSetUsers(users))
    }    
  }
}
const UsersContainer = connect(mapStateToProps , mapDispatchToProps)(UsersApi)

export default UsersContainer;



 
