import SideBar from '../components/SideBar';
import useWindowSize from './useWindowSize';

function WindowSizeComponent() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <SideBar />
      {width} x {height}
    </div>
  );
}

export default WindowSizeComponent;
