import './App.css';
import { useState } from 'react';
import ByeGreeting from './ByeGreeting';

const user = {
  fname:'Vajith',
  lname:'Chamuditha'
}


function formatName(user){
  return  user.fname + ' ' + user.lname;
}

function App() { 
  const [name, setName] = useState(user.fname);
  let greeting = "Hello";
  const changeName = () =>{
    setName(user.lname);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting} {formatName(user)} !!</h1>
        <ByeGreeting fname={user.fname} name={name} changeName={changeName} />
      </header>
    </div>
  );
}

export default App;
