import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Member.css';

const Member = ({ member, bg, onDelete, onFavorite }) => {  
    
    const changeFavorite = () => {
        onFavorite(member.id)
    }
    const favoriteProps = {
        size: 25, 
        onClick: changeFavorite
    }
    
    return (
        <div className='memberContainer'>
            <AiFillCloseCircle 
                size={25} 
                className="delete" 
                onClick={() => onDelete(member.id)} 
            />
            <div className='header' style={{ backgroundColor: bg }}>
                <img src={member.image} alt={member.name} />
            </div>
            <div className='footer'>
                <h4>{member.name}</h4>
                <h5>{member.role}</h5>
                <div className="favorite">
                    {member.favorite 
                        ? <AiFillHeart {...favoriteProps} color='#FF0000' /> 
                        : <AiOutlineHeart {...favoriteProps} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Member;