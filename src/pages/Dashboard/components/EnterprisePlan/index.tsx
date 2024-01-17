import { Box, Grid, Text } from "@chakra-ui/react";
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
      bgColor={"#18212d"}
      borderRadius={10}
      sx={{ border: "1px solid #203247" }}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        borderBottom="1px solid #203247"
        p={7}
      >
        <Box>
          <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
            <span style={{ color: "white" }}>{data.plan} - </span>
            {data?.amount}
          </Text>

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
          <ContainedButton title={data?.buttonText} />
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
            Learn more about our subscription options.
          </span>
        </Text>
      </Box>
    </Grid>
  );
};

export default EnterprisePlan;
