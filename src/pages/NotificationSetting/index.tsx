import { Fragment } from "react";
import NotificationBlock from "./components/NotificationBlock";

const Notifications = () => {
  return (
    <Fragment>
      <NotificationBlock
        title="Notification Settings"
        subTitle="You will get only notification what have enabled."
      />
    </Fragment>
  );
};

export default Notifications;
