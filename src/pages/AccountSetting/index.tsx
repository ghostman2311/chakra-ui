import { Box, Icon, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import SettingTabs from "./components/SettingsTab";
import Billing from "./components/Billing";
import Notifications from "../NotificationSetting";
import PersonalInformation from "../PersonalInformation";
import PageContainer from "../../components/PageContainer";

const AccountSetting = () => {
  const tabs = [
    {
      key: "personal",
      value: "Personal",
      component: <PersonalInformation />,
    },
    {
      key: "billing",
      value: "Billing",
      component: <Billing />,
    },
    {
      key: "settings",
      value: "Settings",
      component: <Billing />,
    },
    {
      key: "notifications",
      value: "Notifications",
      component: <Notifications />,
    },
  ];
  return (
    <PageContainer
      header="Account Setting"
      title="My Profile"
      subTitle="You have full control to manage your own account setting."
      icon={true}
    >
      <Box mt={4}>
        <SettingTabs tabs={tabs} />
      </Box>
    </PageContainer>
  );
};

export default AccountSetting;
