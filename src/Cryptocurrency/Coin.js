import React from 'react'
import './Cryptocurrency.css'

const imageStyle ={
  height:'7rem',
  width:'5rem'
}
export default function Coin(props) {
  return (
         <div className="col-3 my-2">
             <a href="">
                     <div className="card-flyer">
                         <div className="text-box">
                             <div className="image-box">
                                 <img style={imageStyle} src={props.image} alt="" />
                             </div>
                             <div className="text-container">
                                 <h6>{props.name}</h6>
                                 <p>Current price : {props.current_price}</p>
                             </div>
                         </div>
                     </div>
             </a>
          </div>
  )
}