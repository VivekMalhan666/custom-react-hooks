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
import AsyncComponent from './useAsync/AsyncComponent';
import FetchComponent from './useFetch/FetchComponent';
import ScriptComponent from './useScript/ScriptComponent';
import DeepCompareEffectComponent from './useDeepCompareEffect/DeepCompareEffectComponent';
import EventListenerComponent from './useEventListener/EventListenerComponent';
import OnScreenComponent from './useOnScreen/OnScreenComponent';

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
        <Route path="/useasync">
          <AsyncComponent />
        </Route>
        <Route path="/usefetch">
          <FetchComponent />
        </Route>
        <Route path="/usescript">
          <ScriptComponent />
        </Route>
        <Route path="/usedeepcompare">
          <DeepCompareEffectComponent />
        </Route>
        <Route path="/eventlistener">
          <EventListenerComponent />
        </Route>
        <Route path="/onscreen">
          <OnScreenComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
