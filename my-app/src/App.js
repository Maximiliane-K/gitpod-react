import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreetings";
import FunctionalGreetingsWithProps from "./components/FunctionalGreetingsWithProps";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingsWithProps greeting="nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;
