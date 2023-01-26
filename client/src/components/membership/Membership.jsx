import React from 'react';
import Card from './Card/Card.jsx'



export const Membership = () => {
  const dummyimage = "static/images/membership-img/asset1.jpeg"
  return (
    <div className='wrapper'>
    <Card dummyimage = {dummyimage}/>
    <Card dummyimage = {dummyimage}/>
    <Card dummyimage = {dummyimage}/>
    </div>
  )
}




export default Membership
