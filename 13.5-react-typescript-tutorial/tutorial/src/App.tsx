import './App.css';
import { Button } from './components/props/Button';
import { Container } from './components/props/Container';
import { Greet } from './components/props/Greet';
import { Heading } from './components/props/Heading';
import { Oscar } from './components/props/Oscar';
import { Person } from './components/props/Person';
import { PersonList } from './components/props/PersonList';
import { Status } from './components/props/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const names = [
    {
      first: 'Edward',
      last: 'Snowden',
    },
    {
      first: 'Julian',
      last: 'Assange',
    },
    {
      first: 'Bruce',
      last: 'Wayne',
    },
  ];

  return (
    <div className="App">
      <Heading>Your TypeScript Tutorial</Heading>
      <hr />
      <Greet name="Martin" messageCount={20} isLoggedIn={true} />
      <hr />
      <Person name={personName} />
      <hr />
      <Status status="success" />
      <hr />
      <Oscar>
        <PersonList names={names} />
      </Oscar>
      <Button
        handleClick={(evt, id) => {
          console.log('button clicked', evt, id);
        }}
      />

      <hr />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
