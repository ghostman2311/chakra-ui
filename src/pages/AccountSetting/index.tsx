import {
  Box,
  Icon,
  Text,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import SettingTabs from "./components/SettingsTab";
import Billing from "./components/Billing";
import Notifications from "../NotificationSetting";

const AccountSetting = () => {
  const tabs=[{
    key:'personal',
    value:'Personal',
    component:<Billing/>
  },{
    key:'billing',
    value:'Billing',
    component:<Billing/>
  },{
    key:'settings',
    value:'Settings',
    component:<Billing/>
  },{
    key:'notifications',
    value:'Notifications', 
     component:<Notifications/>
  }]
  return (
    <Box w="100%" bg="#101924" px={{ base: 4, md: 14 }} py={12} mt={50}>
      <Text color="#8094ae" fontSize="1.4rem" fontWeight="400">
        Account Setting
      </Text>
      <Box>
        <Text
          fontSize={{ base: "20", sm: "40" }}
          fontWeight="400"
          color={"white"}
        >
          My Profile
        </Text>
        <Text
          color="#8094ae"
          fontSize={{ md: 14, lg: "16" }}
          fontWeight="400"
          pr={1}
          sx={{ textWrap: "no-wrap" }}
        >
          You have full control to manage your own account setting.
          <Icon as={InfoOutlineIcon} boxSize={4} mr={2} color={"#798BFF"} />
        </Text>
      </Box>
      <Box mt={4}>
        <SettingTabs tabs={tabs}/>
      </Box>
    </Box>
  );
};

export default AccountSetting;
