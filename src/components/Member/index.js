import './Member.css';

const Member = ({ name, role, image }) => {
    return (
        <div className='memberContainer'>
            <div className='header'>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}

export default Member;