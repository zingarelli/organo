import hexToRgba from 'hex-to-rgba';
import Member from '../Member';
import './Team.css';

const Team = ({ team, members, onDelete, onColorChange, onFavorite }) => {
    return (
        members.length > 0 && <section className='teamContainer' style={{ backgroundColor: hexToRgba(team.color, '0.3')}} >
            <input 
                type="color" 
                className="input-color" 
                value={team.color} 
                onChange={e => onColorChange(team.id, e.target.value)} 
            />
            <h3>{team.name}</h3>
            <span style={{ borderColor: team.color }} ></span>
            <div className="memberList">
                {members.map(member => {                    
                    return (
                        <Member 
                            key={member.id} 
                            member={member}
                            bg={team.color}
                            onDelete={onDelete}
                            onFavorite={onFavorite}
                        />
                    )
                })}
            </div>
        </section>
    );
}

export default Team;