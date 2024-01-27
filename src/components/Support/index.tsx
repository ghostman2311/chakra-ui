import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import OutlineButton from "../Button/Outlined";
import Desktop from "../../assets/dashboard/desktop.svg";

const Support = () => {
  return (
    <Grid
      templateColumns={"1fr"}
      mt={7}
      overflow="hidden"
      bgColor={"specificBackground"}
      borderRadius={10}
      sx={{ border: "1px solid #203247" }}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "none", md: "space-between" }}
        p={7}
        w={"100%"}
      >
        <Box
          w={{ base: "100%", md: "10%" }}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <img src={Desktop} height={"100"} width={"100"} />
        </Box>

        <Box w={{ base: "100%", md: "60%" }} my={{ base: 4, md: 0 }}>
          <Heading as='h5' fontSize="20" fontWeight="600" color="title">
            We’re here to help you!
          </Heading>

          <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
            Ask a question or file a support ticketn or report an issues. Our
            team support team will get back to you by email.
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ base: "start", md: "end" }}
          my={{ base: 4, md: 0 }}
          alignItems={"center"}
          w={{ base: "100%", md: "25%" }}
        >
          <OutlineButton title="Get Support Now" />
        </Box>
      </Box>
    </Grid>
  );
};

export default Support;
