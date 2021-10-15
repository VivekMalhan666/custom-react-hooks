import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToggleComponent from './useToggle/ToggleComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ToggleComponent />
        </Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
