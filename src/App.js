import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Summary from './Summary';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Summary />
    </div>
    </Router>
  );
}

export default App;
