import React from "react";

function User(){
  return (
    <div className="user">
      <div className="user-ava"><img src="https://images.kinorium.com/movie/shot/372833/w1500_360422.jpg" alt="" /></div>
      <div className="user-info">
        <h3>Leonid Ivanov</h3>
        <p>Date of Birth: <span>2 january</span></p>
        <p>City: <span>Minsk</span></p>
        <p>Education: <span>BSU`s23</span></p>
        <p>Web site: <span>google.com</span></p>               
      </div>
    </div>
  )
}

export default User;