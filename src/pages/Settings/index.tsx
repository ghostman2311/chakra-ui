import { Badge, Box, Grid, Heading, Text } from "@chakra-ui/layout";
import WrapperBlock from "../PersonalInformation/components";
import ContainedButton from "../../components/Button/Contained";
import { Switch } from "@chakra-ui/switch";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { SmallCloseIcon } from "@chakra-ui/icons";

const Setting = () => {
  const recentActivity = [
    {
      browser: "Chrome on Window",
      ip: "192.149.122.128",
      time: "11:34 PM",
    },
    {
      browser: "Mozilla on Window",
      ip: "86.188.154.225",
      time: "Nov 20, 2019 10:34 PM",
    },
    {
      browser: "Chrome on iMac",
      ip: "192.149.122.128",
      time: "Nov 12, 2019 08:56 PM",
    },
  ];
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
          bgColor={"specificBackground"}
          borderRadius={10}
          sx={{ border: "1px", borderColor: "borderColor" }}
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            p={7}
            sx={{ borderBottom: "1px", borderColor: "borderColor" }}
          >
            <Box>
              <Heading as="h6" fontSize="1rem" fontWeight="600" color="title">
                Save my Activity Logs
              </Heading>

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
            sx={{ borderBottom: "1px", borderColor: "borderColor" }}
            p={7}
          >
            <Box>
              <Heading as="h6" fontSize={"16"} fontWeight="600" color="title">
                Change Password
              </Heading>

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
              <ContainedButton title="Change Password" fontSize={13} />
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
                <Heading as="h6" fontSize="16" fontWeight="600" color="title">
                  2FA Authentication
                </Heading>
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
              <ContainedButton title="Disable" fontSize={13} />
            </Box>
          </Box>
        </Grid>
      </WrapperBlock>
      <WrapperBlock
        title="Recent Activity"
        subTitle="This information about the last login activity on your account."
        link="See full log"
      >
        <Grid
          templateColumns={{ base: "1fr" }}
          bg="background"
          color="#8094ae"
          overflow="hidden"
        >
          <TableContainer
            sx={{ border: "1px", borderColor: "borderColor" }}
            borderRadius={5}
            mt={5}
          >
            <Table variant="simple" backgroundColor={"specificBackground"}>
              <Thead sx={{ borderBottom: "1px", borderColor: "borderColor" }}>
                <Tr height={"40px"} border={"none"} display={"flex"}>
                  <Th
                    border={"none"}
                    width={{ base: "50%", md: "70%" }}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Box
                      display={"flex"}
                      w={{ base: "100%" }}
                      justifyContent={"space-between"}
                    >
                      <Box w={{ base: "30%" }}>BROWSER</Box>
                      <Box
                        w={{ base: "70%" }}
                        display={{ base: "none", md: "inline-block" }}
                      >
                        IP
                      </Box>
                    </Box>
                  </Th>
                  <Th
                    border={"none"}
                    width={"20%"}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    TIME
                  </Th>
                  <Th width={{ base: "30%", md: "10%" }} border={"none"}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {recentActivity?.map((item, i) => {
                  return (
                    <Tr
                      sx={{ borderBottom: "1px", borderColor: "borderColor" }}
                      display={"flex"}
                      key={i}
                    >
                      <Td
                        border={"none"}
                        width={{ base: "50%", md: "70%" }}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        flexDirection={{ base: "column", md: "row" }}
                      >
                        <Box
                          display={"flex"}
                          w={{ base: "100%" }}
                          justifyContent={"space-between"}
                          flexDirection={{ base: "column", md: "row" }}
                        >
                          <Box
                            w={{ base: "30%" }}
                            color="active"
                            fontSize={"13"}
                          >
                            {item?.browser}
                          </Box>
                          <Box
                            w={{ base: "70%" }}
                            fontSize={"13"}
                            color="#8094AE"
                          >
                            {item?.ip}
                          </Box>
                        </Box>
                      </Td>
                      <Td
                        border={"none"}
                        color="#526484"
                        width={"20%"}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        flexDirection={{ base: "column", md: "row" }}
                      >
                        <Text fontSize={"13"} color="#8094AE">
                          {" "}
                          {item?.time}
                        </Text>
                      </Td>
                      <Td
                        border={"none"}
                        color={"#8094AE"}
                        width={{ base: "30%", md: "10%" }}
                        sx={{ display: "flex", justifyContent: "end" }}
                      >
                        <SmallCloseIcon />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Grid>
      </WrapperBlock>
    </>
  );
};

export default Setting;
