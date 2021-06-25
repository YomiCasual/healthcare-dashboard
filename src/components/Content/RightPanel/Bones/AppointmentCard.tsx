import {
  ClockIcon,
  CloseIcon,
  MarkIcon,
  LocationIcon,
  CalendarIcon,
} from "../../../../Icons";

const AppointmentCard = () => {
  return (
    <div className="appointment-card">
      <div className="appointment-card-header">
        <img
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="avatar"
          className="image-avatar secondary"
        />
        <div>
          <h3>Dr Alisa Fox</h3>
          <p>psychologist</p>
        </div>
      </div>
      <div className="appointment-card-body">
        <div className="flex location">
          <div className="location-icon">
            <LocationIcon classes="location-icon active" />
          </div>
          <p>Main medical center, 22, Satsen paris</p>
        </div>
        <div className="flex mt-2 gap-2">
          <div className="flex location">
            <div className="location-icon">
              <CalendarIcon classes="location-icon" />
            </div>
            <p>31/08/2018</p>
          </div>
          <div className="flex location">
            <div className="location-icon">
              <ClockIcon classes="location-icon" />
            </div>
            <p>3:35</p>
          </div>
        </div>
      </div>

      <div className="appointment-card-footer">
        <button className="secondary-button">
          <span className="button-icon">
            <MarkIcon classes="button-icon-small " />
          </span>
          <span>Confirm</span>
        </button>
        <button className="secondary-button danger">
          <span className="button-icon">
            <CloseIcon classes="button-icon-small " />
          </span>
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
