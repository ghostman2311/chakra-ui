import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";

const Contact = () => {
  return (
    <Box w="100%" bg="#101924" px={{ base: 4, md: 14 }} py={12} mt={50} display={'flex'} >
      <Box textAlign={'center'}>
      <Text color="#8094ae" fontSize="1.4rem" fontWeight="400">
        Contact
      </Text>
      <Text
        fontSize={{ base: "20", sm: "40" }}
        fontWeight="400"
        color={"white"}
      >
        How can we help?
      </Text>
      <Text
        color="#8094ae"
        fontSize={{ md: 14, lg: "16" }}
        fontWeight="400"
        pr={1}
        sx={{ textWrap: "no-wrap" }}
      >
        You can find all of the questions and answers abour secure your account
      </Text>
      </Box>
      {/* <Grid
        templateColumns={{
          base: "1fr",
        }}
        mt={8}
      > */}
      <Box 
      bgColor={"#18212d"}
      borderRadius={10}
      sx={{ border: "1px solid #203247" }}
      w={'60%'}     
    >
      <Box
        display={"flex"}
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={7}
      >
      </Box>
    </Box>
      {/* </Grid> */}
    </Box>
  );
};

export default Contact;
