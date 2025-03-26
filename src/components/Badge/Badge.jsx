import classname from "./Badge.module.css";

export const Badge = (props) => {
  let badgeClass = "";

  switch (props.className) {
    case "success":
      badgeClass = classname.success;
      break;
    case "warning":
      badgeClass = classname.warning;
      break;
    case "alert":
      badgeClass = classname.alert;
      break;
    default:
      badgeClass = classname.primary;
  }

  return (
    <div className={`${classname.badge} ${badgeClass}`}>
    {props.children}
    </div>
  );
};
