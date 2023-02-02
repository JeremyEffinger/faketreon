import CreatorInfoState from '../../../CreatorInfoState';
import { useRecoilValue } from 'recoil';
import './card.css';


export const Card1 = (props) => {
  const text = useRecoilValue(CreatorInfoState); 
    if(text.campaigns == null){
      return (<div></div>)
    } else { 
    return (
      <div className='card'>
        <div className='card__body'>
        <img className="card__image" src={""} />
          <h2 className='card__title'>{text.subscriptionLevels[0].subscriptions[0].level}</h2>
          <p className='card__description'>{text.subscriptionLevels[0].subscriptions[0].rewards[0]}.</p>
        </div>
        <button className='card__btn'>Join</button>
      </div>
    )
  }
}
export default Card1;
