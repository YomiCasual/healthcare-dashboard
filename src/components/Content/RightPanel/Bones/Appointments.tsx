import {
  ArrowRightIcon,
  CaretLeft,
  CaretRight,
  MoreIcon,
} from "../../../../Icons";
import AppointmentCard from "./AppointmentCard";

const Appointments = () => {
  return (
    <div className="appointment">
      <div className="appointment-header">
        <h3>Appointments</h3>
        <div className="appointment-header-icon">
          <MoreIcon classes="apppintment-header-icon" />
        </div>
      </div>
      <div className="sub-header">
        <div className="tab-pane">
          <p className="tab-pane-item main">Upcoming</p>
          <p className="tab-pane-item sub">Past</p>
        </div>
        <div className="icon-class">
          <CaretLeft classes="icon-arrow main" />
          <CaretRight classes="icon-arrow sub" />
        </div>
        <div className="sort-by">
          <p>
            Sort By{" "}
            <span>
              Date <span></span>
            </span>
          </p>
          <ArrowRightIcon classes="icon-small" />
        </div>
      </div>
      <div className="appointment-body">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </div>
  );
};

export default Appointments;
