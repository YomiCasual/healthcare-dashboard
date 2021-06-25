import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LeftPanel from "./components/Content/LeftPanel/LeftPanel";
import RightPanel from "./components/Content/RightPanel/index";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex container">
        <SideBar />
        <div className="flex content-class">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
