import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToggleComponent from './useToggle/ToggleComponent';
import TimeoutComponent from './useTimeOut/TimeoutComponent';
import DebounceComponent from './useDebounce/DebounceComponent';
import UpdateEffectComponent from './useUpdateEffect/UpdateEffectComponent';
import ArrayComponent from './useArray/ArrayComponent';
import PreviousComponent from './usePrevious/PreviousComponent';
import StateWithHistory from './useStateWithHistory/StateWithHistory';
import StorageComponent from './useStorage/StorageComponent';

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
        <Route path="/previous">
          <PreviousComponent />
        </Route>
        <Route path="/statewithhistory">
          <StateWithHistory />
        </Route>
        <Route path="/usestorage">
          <StorageComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
