import { Badge, Box, Grid, Text } from "@chakra-ui/react";
import { ContainedButton } from "../../components";

const CommonBlock = () => {
  return (
    <Grid
      templateColumns={"1fr"}
      mt={7}
      overflow="hidden"
      bgColor={"#18212d"}
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
          <img
            src="https://dashlite.net/demo4/images/icons/product-pp.svg"
            height={"40"}
            width={"40"}
          />
        </Box>

        <Box w={{ base: "100%", md: "60%" }} my={{ base: 4, md: 0 }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Text fontSize="1rem" fontWeight="600" color={"white"}>
              Enterprise Plan
            </Text>
            <Badge
              bgColor="#1ee0ac"
              color="white"
              borderRadius={13}
              display={"flex"}
              px={2}
              fontSize={10}
              justifyContent={"center"}
              alignItems={"center"}
            >
              New
            </Badge>
          </Box>

          {/* <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
            Ask a question or file a support ticketn or report an issues. Our
            team support team will get back to you by email.
          </Text> */}
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ base: "start", md: "end" }}
          my={{ base: 4, md: 0 }}
          alignItems={"center"}
          w={{ base: "100%", md: "20%" }}
        >
          <ContainedButton title="Download" />
        </Box>
      </Box>
    </Grid>
  );
};

export default CommonBlock;
