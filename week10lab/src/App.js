import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Events and FOrms</h1>
      <Login/>
      <SignUp/>
    </div>

  );
}

export default App;
