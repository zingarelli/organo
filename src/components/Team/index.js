import './Team.css';

const Team = ({ name, primaryColor, secondaryColor }) => {
    return (
        <section className='teamContainer' style={{ backgroundColor: secondaryColor }} >
            <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        </section>
    );
}

export default Team;