import { AiFillCloseCircle } from 'react-icons/ai'
import './Member.css';

const Member = ({ member, bg, onDelete }) => {
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
            </div>
        </div>
    );
}

export default Member;