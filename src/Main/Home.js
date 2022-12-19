import React from 'react'

import './Home.css'

export const Home = () => {
  return(
    <>
    <center>Home</center>
    <div className="card">
    <div className="card-body">
      <h1>FSD-Internship</h1>
          <p>Third-Project</p>
      </div>
    </div>
  <br></br>
  <center><div className="card" style={{width: "30rem",height:"20rem"}}>

    <div className="card-body">
      <h5 className="card-title">Vippa Uttej</h5>
      <p className="card-text">Full stack devevoper trainee at Innomatics.</p>
      <h3>Number of API fetching Projects </h3>
      <ol>
      <li>Crypto Currency API</li>    
      <li>Covid API</li>
      <li>NASA API</li>
      </ol>  
    </div>
  </div>
  </center>
    
 
  </>
  )
}
export default Home