import { Badge, Box, Grid, Text } from "@chakra-ui/layout";
import WrapperBlock from "../PersonalInformation/components";
import ContainedButton from "../../components/Button/Contained";
import { Switch } from "@chakra-ui/switch";

const Setting = () => {
  return (
    <>
      <WrapperBlock
        title="Security Settings"
        subTitle="These settings are helps you keep your account secure."
      >
        <Grid
          templateColumns={"1fr "}
          mt={7}
          overflow="hidden"
          bgColor={"#18212d"}
          borderRadius={10}
          sx={{ border: "1px solid #203247" }}
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            p={7}
            borderBottom="1px solid #203247"
          >
            <Box>
              <Text fontSize="1rem" fontWeight="600" color="white">
                Save my Activity Logs
              </Text>

              <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
                You can save your all activity logs including unusual activity
                detected.
              </Text>
            </Box>
            <Switch size="lg" isChecked={true} my={{ base: 4, md: 0 }} />
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            borderBottom="1px solid #203247"
            p={7}
          >
            <Box>
              <Text fontSize="1rem" fontWeight="600" color="white">
                Change Password
              </Text>

              <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
                Set a unique password to protect your account.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={{ base: "none", md: "center" }}
              my={{ base: 4, md: 0 }}
              alignContent={"center"}
              gap={4}
            >
              <Text color="#8094ae" fontSize="12" fontWeight="400" mt={2}>
                Last changed: Oct 2, 2019
              </Text>{" "}
              <ContainedButton title="Change Password" />
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            p={7}
          >
            <Box width={{ base: "100%", md: "80%" }}>
            <Box sx={{ display: "flex", gap: 3 }}>
            <Text fontSize="1rem" fontWeight="600" color="white">
            2FA Authentication
              </Text>
                <Badge
                  bgColor="#1ee0ac"
                  color="white"
                  borderRadius={4}
                  display={"flex"}
                  px={2}
                  fontSize={10}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                 Enabled
                </Badge>
                </Box>
              <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
                Secure your account with 2FA security. When it is activated you
                will need to enter not only your password, but also a special
                code using app. You can receive this code by in mobile app.{" "}
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={{ base: "none", md: "center" }}
              my={{ base: 4, md: 0 }}
              alignItems={"center"}
              gap={4}
            >
              <ContainedButton title="Disable" />
            </Box>
          </Box>
        </Grid>
      </WrapperBlock>
      <WrapperBlock
        title="Recent Activity"
        subTitle="This information about the last login activity on your account."
        link='See full log'
      >
        {/* Table comes here */}
      </WrapperBlock>
    </>
  );
};

export default Setting;
