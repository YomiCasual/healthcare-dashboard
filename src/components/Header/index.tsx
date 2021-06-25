import { ArrowRightIcon, NotificationIcon } from "../../Icons";
import { UserIcon } from "../../Icons/index";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="Logo.png" alt="logo" />
        </div>
      </div>
      <div className="header-between">
        <button className="button button-header">
          Make an appointment
          <span>
            <ArrowRightIcon classes="icon-small" />
          </span>
        </button>
        <div className="flex items-center avatar-section">
          <div className="icon-wrapper">
            <UserIcon classes="icon-large" />
            <span className="icon-badge">18</span>
          </div>
          <div className="icon-wrapper">
            <NotificationIcon classes="icon-large" />
            <span className="icon-badge">18</span>
          </div>
          <div className="image-container">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="avatar"
              className="image-avatar border-image"
            />
            <div className="online-icon"></div>
          </div>

          <p className="avatar-name">Katty Zaytseva</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
