import { MoreIcon } from "../../../../Icons";
const NotificationCard = () => {
  return (
    <div className="notification-card">
      <div className="notification-card-header">
        <h3>Notification</h3>
        <MoreIcon classes="icon-small" />
      </div>
      <p className="notification-card-subtitle">You have 3 visits today</p>
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

export default NotificationCard;
