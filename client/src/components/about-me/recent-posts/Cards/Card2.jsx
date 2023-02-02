import CreatorInfoState from '../../../../CreatorInfoState';
import { useRecoilValue } from 'recoil';
import './card2.css';




export const Card2 = (props) => {
  const text = useRecoilValue(CreatorInfoState);
  if(text.campaigns == null){
      return (<div></div>)
        } else { 


    return (
      <div className='card2'>
        <div className='card2__body'>
        <img className="card2__image" src={text.subscriptionLevels[0].subscriptions[1].art} />
          <h2 className='card2__title'>{text.posts[1].title}</h2>
          <p className='card2__description'>{text.posts[1].content}</p>
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
}
export default Card2;
