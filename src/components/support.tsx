import { Box, Grid, Text } from "@chakra-ui/react";
import  OutlineButton from "./outlineButton";
import Desktop from "../assets/dashboard/desktop.svg";
const Support=()=> {
  return (
    <Grid
        templateColumns={"1fr"}
        mt={7}
        overflow="hidden"
        bgColor={"#18212d"}
        borderRadius={10}
        sx={{ border: "1px solid #203247" }}
      >
        <Box display={"flex"} flexDirection={{base:'column',md:'row'}} justifyContent={{base:'none',md:"space-between"}} p={7} w={"100%"}>
          <Box w={{ base: "100%", md: "10%" }} display={'flex'} justifyContent={'start'} alignItems={'center'}>
            <img src={Desktop} height={"100"} width={"100"} />
          </Box>

          <Box w={{ base: "100%", md: "60%" }} my={{ base: 4, md: 0 }}>
            <Text fontSize="1.2rem" fontWeight="600" color="white">
              We’re here to help you!
            </Text>

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
            w={{ base: "100%", md: "20%" }}
          >
            <OutlineButton title="Get Support Now" />
          </Box>
        </Box>
      </Grid>
  )
}

export default Support;