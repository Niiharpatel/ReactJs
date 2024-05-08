import { Outlet } from 'react-router-dom';
import Counter from './01_Count/Counter';
import Count from './02_Css_Module/Count';
import HeaderCom from './03_Project/Components/HeaderCom/HeaderCom';
import AppleCount from './Components/AppleCount';
import Router from './03_Project/Router/Router';
import Shimmer from './04_ShimmerEffect/Shimmer';

function App() {
  return (
    <>
      {/* <AppleCount />

      <Count /> */}

      {/* <Counter /> */}

      {/* ========= PROJECT ====== */}

      <Router />

      {/* ===== */}
      {/* <Shimmer /> */}
    </>
  );
}

export default App;
