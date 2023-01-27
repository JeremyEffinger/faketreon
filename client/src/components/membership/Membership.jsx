import React from 'react';
import Card from './Card/Card.jsx'
import './membership.css'



export const Membership = () => {
  const dummyimage = "static/images/membership-img/asset1.jpeg"
  return (
    <div>
    <div className='wrapper'>
    <Card dummyimage = {dummyimage}/>
    <Card dummyimage = {dummyimage}/>
    <Card dummyimage = {dummyimage}/>
    </div>
    
    
    <div className='patrons'>
  <h2>1,000</h2>
  <p>Patrons</p>
  <div>
    <button className='member__btn'>Share</button>
    <button className='member__btn'>Follow</button>
  </div>
</div>
</div>
  )
}




export default Membership
