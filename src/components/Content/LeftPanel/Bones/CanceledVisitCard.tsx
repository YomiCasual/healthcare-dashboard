import { CalendarIcon } from "../../../../Icons";
const CanceledVisitCard = () => {
  return (
    <div className="notification-card canceled-visit">
      <div className="notification-card-header">
        <h3>Canceled Visits</h3>
        <CalendarIcon classes="icon-small" />
      </div>
      <p className="notification-card-subtitle">You have 1 canceled visit</p>
      <div className="notification-card-body">
        <div className="notification-card-list">
          <div className="tag"></div>
          <p className="title">Dr Veronica Hopps</p>
          <p className="subtitle">padiatrician</p>
        </div>
        <div className="notification-card-list">
          <div className="tag"></div>
          <p className="title">Dr Veronica Hopps</p>
          <p className="subtitle">padiatrician</p>
        </div>
        <div className="notification-card-list">
          <div className="tag"></div>
          <p className="title">Dr Veronica Hopps</p>
          <p className="subtitle">padiatrician</p>
        </div>
      </div>
    </div>
  );
};

export default CanceledVisitCard;
