import Appointments from "./Bones/Appointments";
import MapContainer from "./Bones/MapContainer";
const RightPanel = () => {
  return (
    <div className="right-panel">
      <MapContainer />
      <Appointments />
    </div>
  );
};

export default RightPanel;
