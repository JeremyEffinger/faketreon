import './card2.css';




export const Card = (props) => {

  return (
    <div className='card2'>
      <div className='card2__body'>
      <img className="card2__image" src={props.dummyimage} />
        <h2 className='card2__title'>Warlock Lair 79: Shadow of Runkelstad</h2>
        <p className='card2__description'>Zebeck's neighbor city down the river Argent is Runkelstad--and we see it in 34 glorious pages of adventure by none other than Richard Pett.</p>
      </div>
      <button className='card2__btn'>
        <a className='comment'>
          Comments
        </a>
        <a className='like'>
          Likes
        </a>
       </button>
     
    </div>



  )
}

export default Card;
