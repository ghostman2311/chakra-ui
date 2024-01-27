import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import ContainedButton from "../../../../components/Button/Contained";
interface IObject {
  plan: string;
  amount: string;
  buttonText: string;
  subTitle: string;
  switch?: boolean;
}
interface IEnterpriseplan {
  data: IObject;
}
const EnterprisePlan = ({ data }: IEnterpriseplan) => {
  return (
    <Grid
      templateColumns={"1fr "}
      mt={7}
      overflow="hidden"
      // bgColor={"#18212d"}
      bgColor={"specificBackground"}
      borderRadius={4}
      sx={{ border: "1px", borderColor: "borderColor" }}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        sx={{ borderBottom: "1px", borderColor: "borderColor" }}
        p={7}
      >
        <Box>
          <Heading as="h6" fontSize="1rem" fontWeight="600" color={"title"}>
            {data.plan} -
            <span style={{ color: "#B6C6E3" }}> {data?.amount}</span>
          </Heading>

          <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
            {data?.subTitle}
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ base: "none", md: "center" }}
          my={{ base: 4, md: 0 }}
          alignContent={"center"}
        >
          <ContainedButton title={data?.buttonText} fontSize={13} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={7}
      >
        <Text color="main" fontSize="14" fontWeight="400" mt={2}>
          <span style={{ color: "#8094ae" }}>
            Learn more about our
            <span style={{ color: "#798BFF" }}> subscription options.</span>
          </span>
        </Text>
      </Box>
    </Grid>
  );
};

export default EnterprisePlan;
