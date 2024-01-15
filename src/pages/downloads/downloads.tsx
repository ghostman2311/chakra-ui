import { Box, Text } from "@chakra-ui/react";
import { Support } from "../../components";
import CommonBlock from "./commonBlock";

const Downloads = () => {
  return (
    <Box
      w="100vw"
      h={{ base: "auto", md: "100vh" }}
      bg="#101924"
      px={{ base: 4, md: 14 }}
      py={12}
    >
      <Text color="#8094ae" fontSize="16" fontWeight="400">
        Download
      </Text>

      <Text fontSize={{base:'20',sm:"40"}} fontWeight="400" color={"white"}>
        Product Downloads
      </Text>
      <Text color="#8094ae" fontSize="14" fontWeight="400" pr={1}>
        You can download all the application that available in your plan.
      </Text>
<CommonBlock/>
      <Support />
    </Box>
  );
};

export default Downloads;
