import Member from '../Member';
import './Team.css';

const Team = ({ name, primaryColor, secondaryColor, members }) => {
    return (
        members.length > 0 && <section className='teamContainer' style={{ backgroundColor: secondaryColor }} >
            <h3 style={{ borderColor: primaryColor }}>{name}</h3>
            <div className="memberList">
                {members.map(member => <Member key={member.name} name={member.name} role={member.role} image={member.image} />)}
            </div>
        </section>
    );
}

export default Team;