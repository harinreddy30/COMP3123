import logo from './logo.svg';
import './App.css';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - 1</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <Text studentID="101425325" name="Harin Reddy"/>
    </div>
  );
}

export default App;
