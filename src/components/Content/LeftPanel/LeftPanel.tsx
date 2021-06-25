import NotificationCard from "./Bones/NotificationCard";
import CanceledVisitCard from "./Bones/CanceledVisitCard";
import CalendarCard from './CalendarCard';
const LeftPanel = () => {
  return (
    <div className="left-panel">
      {/* Calendar */}
      {/* Notification */}
      <CalendarCard />
      <NotificationCard />
      {/* Canceled Visitits */}
      <CanceledVisitCard />
    </div>
  );
};

export default LeftPanel;
