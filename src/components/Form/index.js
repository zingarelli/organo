import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import InputField from '../InputField';
import './Form.css';

const Form = ({ teams, onRegisteredMember, onRegisteredTeam }) => {
    
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        onRegisteredMember({id: uuidv4(), name, role, image, team});
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    const onSaveTeam = (e) => {
        e.preventDefault();
        onRegisteredTeam({ name: teamName, color: teamColor })
        setTeamName('');
        setTeamColor('');
    }
    
    return (
        <section className='form-container'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    text={name}
                    onChange={ value => setName(value)}  
                />
                <InputField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    text={role}
                    onChange={ value => setRole(value)}  
                />
                <InputField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    text={image}
                    onChange={ value => setImage(value)}  
                />
                <Dropdown 
                    required={true} 
                    label="Time" 
                    itens={teams} 
                    option={team} 
                    onChange={ value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>

            <form onSubmit={onSaveTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <InputField 
                    required
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    text={teamName}
                    onChange={ value => setTeamName(value)}  
                />
                <InputField 
                    required
                    type="color"
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    text={teamColor}
                    onChange={ value => setTeamColor(value)}  
                />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    );
}

export default Form;