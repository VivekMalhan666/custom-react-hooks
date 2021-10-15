import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToggleComponent from './useToggle/ToggleComponent';
import TimeoutComponent from './useTimeOut/TimeoutComponent';
import DebounceComponent from './useDebounce/DebounceComponent';
import UpdateEffectComponent from './useUpdateEffect/UpdateEffectComponent';
import ArrayComponent from './useArray/ArrayComponent';

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
        <Route path="/updateeffect">
          <UpdateEffectComponent />
        </Route>
        <Route path="/usearray">
          <ArrayComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
