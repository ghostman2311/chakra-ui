import { Box, Grid, Text } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { formatPropertyName } from "../../helpers";
import WrapperBlock from "./components";
import { useState } from "react";
import { Modal } from "@chakra-ui/modal";

const PersonalInformation = () => {
  const [openModal, setOpenModal] = useState(false);
  const personalInformation = {
    name: "Abu Bin Ishtiyak",
    email: "info@softnio.com",
    phoneNumber: null,
    dateOfBirth: "29 Feb, 1986",
    address: "2337 Kildeer Drive,Kentucky Canada",
  };
  return (
    <WrapperBlock
      title="Personal Information"
      subTitle="Basic info, like your name and address, that you use on Nio Platform."
    >
      <Grid mt={5} bgColor={"#18212d"} borderRadius={10}>
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
                  <Text fontSize="1rem" fontWeight="600" color={"#8094AE"}>
                    {formatPropertyName(key)}
                  </Text>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Text fontSize="1rem" fontWeight="600" color={"#8094AE"}>
                    {value ? value : "Not Add yet"}
                  </Text>
                </Box>
              </Box>
              <Box sx={{ width: "20%", textAlign: "end" }}>
                <ChevronRightIcon
                  fontSize={20}
                  color={"#8094AE"}
                  onClick={() => setOpenModal(true)}
                />
              </Box>
            </Box>
          )
        )}
      </Grid>
      {openModal && <Modal open={openModal}/>}
    </WrapperBlock>
  );
};

export default PersonalInformation;
