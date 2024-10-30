import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from './components/SayHello';


function App() {
  return (
    <div className="App">
      <img src={logo} alt='App logo'/>
      <h1> Harin </h1>
      <Welcome/>
      <Welcome></Welcome>
      <Greetings name="HR"/>
      <SayHello fname="Harin" lname="Reddy"/>
      <SayHello fname="Harin"/>

    </div>
  );
}

export default App;
