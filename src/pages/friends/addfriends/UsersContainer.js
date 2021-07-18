import React from "react";
import { connect } from 'react-redux';
import { setUsers, toggleLoad } from '../../../redux/users-reducer';
import axios from 'axios';
import Users from './users';

class UsersApi extends React.Component {
  componentDidMount() {
    this.props.toggleLoad()
    axios.get("https://leonidivanov884.github.io/SocialNetworkREACT/src/api/users.json").then(response => {
      this.props.setUsers(response.data)
      
    }).then(this.props.toggleLoad())
  }

  render() {     
    return <Users  users={this.props.users.users} isLoading={this.props.users.isLoading}/>
  }
}

let mapStateToProps = (state) => {    
  return {
    users: state.users
  }  
}

const UsersContainer = connect(mapStateToProps , {setUsers, toggleLoad})(UsersApi)

export default UsersContainer;



 
