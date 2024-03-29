import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/layout";
import Desktop from "../../../assets/dashboard/desktop.svg";

import ContainedButton from "../../../components/Button/Contained";
import { Select } from "@chakra-ui/select";
import { BsWindowFullscreen } from "react-icons/bs";

const PaymentBlock = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", xl: " 3.5fr 1.5fr" }}
      gap={{ base: 0, xl: 7 }}
      bg="background"
      color="#8094ae"
      mt={7}
      overflow="hidden"
    >
      <GridItem
        bgColor={"specificBackground"}
        borderRadius={4}
        sx={{ border: "1px", borderColor: "borderColor" }}
        py={4}
      >
        <Box
          sx={{ borderBottom: "1px", borderColor: "borderColor" }}
          p={{ base: 5, xl: 4 }}
        >
          <Heading as="h6" fontSize="16.8" fontWeight="600" color="title">
            Plan Details
          </Heading>
          <Box
            w="100%"
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            mt={5}
          >
            <Box
              w={{ base: "100%", sm: "33%" }}
              display={"flex"}
              flexDirection={{ base: "row", sm: "column" }}
              justifyContent={"space-between"}
            >
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Started On
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                Oct 12, 2018
              </Text>
            </Box>

            <Box
              w={{ base: "100%", sm: "33%" }}
              display={"flex"}
              flexDirection={{ base: "row", sm: "column" }}
              justifyContent={"space-between"}
            >
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Price
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                $249.00 /Year
              </Text>
            </Box>
            <Box
              w={{ base: "100%", sm: "33%" }}
              display={"flex"}
              flexDirection={{ base: "row", sm: "column" }}
              justifyContent={"space-between"}
            >
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Access
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                Unlimited
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ borderBottom: "1px", borderColor: "borderColor" }}
          p={{ base: 5, xl: 4 }}
        >
          <Box display={"flex"}>
            <Box w={{ base: "60%", sm: "70%" }}>
              <Heading as="h6" fontSize="16.8" fontWeight="600" color="title">
                Next Payment
              </Heading>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              w={{ base: "40%", sm: "30%" }}
            >
              <Text fontSize={13} color="#F4BD0E" pr="4">
                Due
              </Text>
              <Text fontSize="16" fontWeight="6   00" color="title">
                $599.00
              </Text>
            </Box>
          </Box>
          <Text fontSize="14" fontWeight="600" color={"#8094ae"} mt={2}>
            Pay With
          </Text>
          <Box w={{ base: "100%", md: "60%" }} display={"flex"} gap="4" mt={4}>
            <Stack spacing={3} width={"70%"}>
              <Select size="md" />
            </Stack>
            <ContainedButton
              title="Pay Now"
              fontSize={"13"}
              bgColor="#364a63"
              backIcon={<ArrowForwardIcon marginLeft={10} />}
            />
          </Box>
        </Box>
        <Box
          sx={{ borderBottom: "1px", borderColor: "borderColor" }}
          p={{ base: 5, xl: 4 }}
        >
          <Box display={"flex"}>
            <Box w={{ base: "60%", sm: "70%" }}>
              <Heading as="h6" fontSize="16.8" fontWeight="600" color="title">
                Last Payment
              </Heading>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              w={{ base: "40%", sm: "30%" }}
            >
              <Text fontSize={13} color="#1EE0AC" pr="4">
                Paid
              </Text>
              <Text fontSize="16" fontWeight="600" color="title">
                $599.00
              </Text>
            </Box>
          </Box>
          <Text fontSize="13" fontWeight="600" color={"#8094ae"}>
            Started On
          </Text>
        </Box>
        <Box p={{ base: 5 }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"}>
              <BsWindowFullscreen
                fontSize={20}
                style={{ color: "#6576FF", marginRight: "10px" }}
              />
              <Text fontSize="13.6" fontWeight="600" color="active">
                Change Billing Method
              </Text>
            </Box>
            <ArrowForwardIcon color="active" fontSize={20} />
          </Box>
        </Box>
      </GridItem>

      {/* second block */}
      <GridItem
        bgColor={"specificBackground"}
        borderRadius={4}
        sx={{ border: "1px", borderColor: "borderColor" }}
        py={{ base: 9, sm: 1, xl: 9 }}
        p={{ base: 1, sm: 5, xl: 4 }}
        display={"flex"}
        flexDirection={{ base: "column", sm: "row", xl: "column" }}
        justifyContent={{ base: "none", xl: "center" }}
        alignItems={"center"}
      >
        <Box
          w={{ base: "10%", sm: "20%", xl: "100%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ base: "center", sm: "start", xl: "center" }}
        >
          <img src={Desktop} height={"100"} width={"100"} />
        </Box>

        <Box
          textAlign={{ base: "center", sm: "start", xl: "center" }}
          mb={{ base: 50, sm: 0, xl: 105 }}
          mt={{ base: 7, sm: 0, xl: 7 }}
          w={{ base: "90%", sm: "40%", md: "50%", xl: "80%" }}
        >
          <Text fontSize="1.2rem" fontWeight="600" color="title">
            Maintainance Support
          </Text>

          <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
            You can get additionally weekly maintainance with premium support,
            only $99.00 per year.
          </Text>
        </Box>
        <Box
          w={{ base: "100%", sm: "40%", xl: "100%" }}
          display={"flex"}
          justifyContent={{ base: "center", sm: "end", xl: "center" }}
        >
          <ContainedButton title="Get Support Now" />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default PaymentBlock;
