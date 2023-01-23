import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name:'Programação', 
      color: '#57C271'
    },
    {  
      id: uuidv4(),
      name:'Front-End', 
      color: '#82CFFA'
    },
    {  
      id: uuidv4(),
      name:'Data Science', 
      color: '#A6D157'
    },
    {  
      id: uuidv4(),
      name:'Devops', 
      color: '#E06B69'
    },
    {  
      id: uuidv4(),
      name:'UX e Design', 
      color: '#DB6EBF'
    },
    {  
      id: uuidv4(),
      name:'Mobile', 
      color: '#FFBA05'
    },
    {  
      id: uuidv4(),
      name:'Inovação e Gestão',
      color: '#FF8A29'
    }
  ]);

  const initialData = [
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [members, setMembers] = useState(initialData);

  const onNewMemberAdded = (member) => {
    // console.log(member);
    // update the array with its original content, plus the new member's data at the end of the array
    setMembers([...members, member]);
  }

  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id))
  }

  const changeTeamColor = (id, color) => {
    setTeams(teams.map(team => {
      if (team.id === id){
        team.color = color;
      }
      return team;
    }))
  }

  const addNewTeam = (team) => {
    setTeams([...teams, {...team, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)} 
        onRegisteredMember={member => onNewMemberAdded(member)} 
        onRegisteredTeam={addNewTeam}
      />
      <section className="times">
        <h1>Minha Organização</h1>
        {teams.map(team => (
          <Team 
            key={team.id} 
            team={team}             
            members={members.filter(member => member.team === team.name)}
            onDelete={deleteMember}
            onColorChange={changeTeamColor}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
