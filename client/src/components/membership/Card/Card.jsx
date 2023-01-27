import './card.css';


export const Card = (props) => {

  return (
    <div className='card'>
      <div className='card__body'>
      <img className="photo" src={props.dummyimage}class="card__image" />
        <h2 className='card__title'>Warlock Aethereal and Strange</h2>
        <p className='card__description'>This is the filler text for what will be warlock information and bullet points.</p>
      </div>
      <button className='card__btn'>Join</button>
    </div>
  )
}

export default Card;
