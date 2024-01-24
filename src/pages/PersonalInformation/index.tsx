import { useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { formatPropertyName } from "../../helpers";
import WrapperBlock from "./components";
import CommonModal from "../../components/modal";
import ContainedButton from "../../components/Button/Contained";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Switch } from "@chakra-ui/switch";

const PersonalInformation = () => {
  const [openModal, setOpenModal] = useState(false);
  const personalInformation = {
    name: "Abu Bin Ishtiyak",
    email: "info@softnio.com",
    phoneNumber: null,
    dateOfBirth: "29 Feb, 1986",
    address: "2337 Kildeer Drive,Kentucky Canada",
  };

  const personalPreference = {
    language: "English (United State)",
    dateFormat: "M d, YYYY",
    timezone: "Bangladesh (GMT +6)",
  };

  const handleModel = () => {
    setOpenModal(true);
    console.log("iambdbdb");
  };
  return (
    <>
      <WrapperBlock
        title="Personal Information"
        subTitle="Basic info, like your name and address, that you use on Nio Platform."
      >
        <Grid mt={5} bgColor={"specificBackground"} borderRadius={10} border='1px solid #203247'>
          {Object.entries(personalInformation).map(
            ([key, value], index, array) => (
              <Box
                key={key}
                display={"flex"}
                justifyContent={"space-between"}
                p={7}
                sx={{
                  borderBottom:
                    index === array.length - 1 ? "none" : "1px solid #203247",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent={{ base: "none", sm: "space-between" }}
                  sx={{ width: "80%" }}
                >
                  <Box sx={{ width: "50%" }}>
                    <Text fontSize={14} fontWeight="600" color={"#8094AE"}>
                      {formatPropertyName(key)}
                    </Text>
                  </Box>
                  <Box sx={{ width: "50%" }}>
                    <Text fontSize={14} fontWeight="600" color={"#8094AE"}>
                      {value ? value : "Not Add yet"}
                    </Text>
                  </Box>
                </Box>
                <Box sx={{ width: "20%", textAlign: "end" }}>
                  <ChevronRightIcon
                    fontSize={20}
                    color={"#8094AE"}
                    onClick={() => handleModel()}
                  />
                </Box>
              </Box>
            )
          )}
        </Grid>
        {openModal ? (
          <CommonModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            footer={
              <>
                <ContainedButton onClick={() => {}} title="Update Profile" />

                <Text fontSize={13} color="#8094AE" fontWeight={600} ml={5}>
                  Cancel
                </Text>
              </>
            }
          >
            <Text fontSize={20}  color='heading' mb={4}>
              Update Profile
            </Text>
            <Tabs color="#b6c6e3" variant="line" borderColor={"#203247"}>
              <TabList>
                <Tab
                  textAlign={"start"}
                  _focus={{
                    outline: "none",
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "3px solid #798BFF",
                    bgColor: "transparent",
                    color: "main",
                  }}
                  _hover={{ outline: "none", color: "white", border: "none" }}
                  _selected={{
                    outline: "none",
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "3px solid #798BFF",
                    bgColor: "transparent",
                    color: "active",
                  }}
                  fontSize={14}
                >
                  Personal
                </Tab>
                <Tab
                  textAlign={"start"}
                  _focus={{
                    outline: "none",
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "3px solid #798BFF",
                    bgColor: "transparent",
                    color: "main",
                  }}
                  _hover={{ outline: "none", color: "white", border: "none" }}
                  _selected={{
                    outline: "none",
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "3px solid #798BFF",
                    bgColor: "transparent",
                    color: "active",
                  }}
                  fontSize={14}
                >
                  Address
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box display={"flex"} gap={4} mt={4}>
                    <FormControl>
                      <FormLabel fontSize={14}>Full Name</FormLabel>
                      <Input
                        type="text"
                        value="Abu Bin Ishtiyak"
                        sx={{ border: "1px solid #dbdfea" }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={14}>Display Name</FormLabel>
                      <Input
                        type="text"
                        value="Ishtiyak"
                        sx={{ border: "1px solid #dbdfea" }}
                      />
                    </FormControl>
                  </Box>
                  <Box display={"flex"} gap={4} mt={4}>
                    <FormControl>
                      <FormLabel fontSize={14}>Phone Number</FormLabel>
                      <Input
                        type="tel"
                        value="+880"
                        sx={{ border: "1px solid #dbdfea" }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={14}>Date of Birth</FormLabel>
                      <Input type="text" sx={{ border: "1px solid #dbdfea" }} />
                    </FormControl>
                  </Box>
                  <Box mt={4} display={"flex"} gap={2}>
                    <Switch size={"md"} isChecked={true} />

                    <Text fontSize={14} color="#B6C6E3">
                      Use full name to display
                    </Text>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box display={"flex"} gap={4} mt={4}>
                    <FormControl>
                      <FormLabel fontSize={14}>Address Line 1</FormLabel>
                      <Input type="text" value="" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={14}>Address Line 2</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box display={"flex"} gap={4} mt={4}>
                    <FormControl>
                      <FormLabel fontSize={14}>State</FormLabel>
                      <Input type="tel" />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={14}>Country</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CommonModal>
        ) : null}
      </WrapperBlock>
      <WrapperBlock
        title="Personal Preferences"
        subTitle="Your personalized preference allows you best use."
      >
        <Grid mt={5} bgColor={"specificBackground"} borderRadius={10} border='1px solid #203247'>
          {Object.entries(personalPreference).map(
            ([key, value], index, array) => (
              <Box
                key={key}
                display={"flex"}
                justifyContent={"space-between"}
                p={7}
                sx={{
                  borderBottom:
                    index === array.length - 1 ? "none" : "1px solid #203247",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent={{ base: "none", sm: "space-between" }}
                  sx={{ width: "80%" }}
                >
                  <Box sx={{ width: "50%" }}>
                    <Text fontSize={14} fontWeight="600" color={"#8094AE"}>
                      {formatPropertyName(key)}
                    </Text>
                  </Box>
                  <Box sx={{ width: "50%" }}>
                    <Text fontSize={14} fontWeight="600" color={"#8094AE"}>
                      {value ? value : "Not Add yet"}
                    </Text>
                  </Box>
                </Box>
                <Box sx={{ width: "20%", textAlign: "end" }}>
                  <Text fontSize={14} fontWeight="600" color={"active"}>
                    Change
                  </Text>
                </Box>
              </Box>
            )
          )}
        </Grid>
      </WrapperBlock>
    </>
  );
};

export default PersonalInformation;
