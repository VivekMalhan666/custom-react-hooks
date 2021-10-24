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
import WindowSizeComponent from './useWindowSize/WindowSizeComponent';
import MediaQueryComponent from './useMediaQuery/MediaQueryComponent';
import GeoLocationComponent from './useGeoLocation/GeoLocationComponent';
import StateWithValidationComponent from './useStateWithValidation/StateWithValidationComponent';
import SizeComponent from './useSize/SizeComponent';
import ClickOutsideComponent from './useClickOutside/ClickOutsideComponent';
import DarkModeComponent from './useDarkMode/DarkModeComponent';
import CopyToClipboardComponent from './useCopyToClipboard/CopyToClipboardComponent';
import CookieComponent from './useCookies/CookieComponent';
import TranslationComponent from './useTranslations/TranslationComponent';
import OnlineStatus from './useOnline/OnlineStatus';
import RenderCountComponent from './useRenderCount/RenderCountComponent';

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
        <Route path="/windowsize">
          <WindowSizeComponent />
        </Route>
        <Route path="/mediaquery">
          <MediaQueryComponent />
        </Route>
        <Route path="/geolocation">
          <GeoLocationComponent />
        </Route>
        <Route path="/statewithvalidation">
          <StateWithValidationComponent />
        </Route>
        <Route path="/usesize">
          <SizeComponent />
        </Route>
        <Route path="/useoutside">
          <ClickOutsideComponent />
        </Route>
        <Route path="/usedarkmode">
          <DarkModeComponent />
        </Route>
        <Route path="/copytoclipboard">
          <CopyToClipboardComponent />
        </Route>
        <Route path="/usecookies">
          <CookieComponent />
        </Route>
        <Route path="/translations">
          <TranslationComponent />
        </Route>
        <Route path="/online">
          <OnlineStatus />
        </Route>
        <Route path="/rendercount">
          <RenderCountComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
