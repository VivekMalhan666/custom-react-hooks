import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToggleComponent from './useToggle/ToggleComponent';
import TimeoutComponent from './useTimeOut/TimeoutComponent';
import DebounceComponent from './useDebounce/DebounceComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ToggleComponent />
        </Route>
        <Route path="/timeout">
          <TimeoutComponent />
        </Route>
        <Route path="/debounce">
          <DebounceComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
