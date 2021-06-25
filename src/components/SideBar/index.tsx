import {
  CalendarIcon,
  DashboardIcon,
  FolderIcon,
  HeartIcon,
  MailIcon,
  MoneyIcon,
  ShieldIcon,
} from "../../Icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      {SideBarListItem.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${item.active && "active"}`}
        >
          <item.Icon />
        </div>
      ))}
    </div>
  );
};

export default SideBar;

const SideBarListItem = [
  {
    id: 1,
    name: "Dashboard",
    Icon: DashboardIcon,
  },
  {
    id: 2,
    name: "Folder",
    Icon: FolderIcon,
    active: true,
  },
  {
    id: 3,
    name: "Health",
    Icon: HeartIcon,
  },
  {
    id: 4,
    name: "Safety",
    Icon: ShieldIcon,
  },
  {
    id: 5,
    name: "Calendar",
    Icon: CalendarIcon,
  },
  {
    id: 6,
    name: "Money",
    Icon: MoneyIcon,
  },
  {
    id: 7,
    name: "Mail",
    Icon: MailIcon,
  },
];
