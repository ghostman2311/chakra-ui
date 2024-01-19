import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import ContainedButton from "../../../components/Button/Contained";

interface IPlanBlock {
  img: string;
  level: string;
  subTitle: string;
  amount: string;
  userText: string;
  buttonText: string;
}
const PlanBlock = ({
  img,
  level,
  subTitle,
  amount,
  userText,
  buttonText,
}: IPlanBlock) => {
  return (
    <GridItem
      bgColor={"#18212d"}
      borderRadius={4}
      sx={{ border: "1px solid #203247" }}
      py={4}
    >
      <Box
        display={"flex"}
        gap={4}
        flexDirection={{ base: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        p={7}
      >
        <img src={img} alt="Your SVG" height={90} width={90} />
        <Text fontSize="20" fontWeight="600" color={"white"}>
          {level}
        </Text>
        <Text
          color="#8094ae"
          fontSize="14"
          fontWeight="600"
          mt={2}
          textAlign={"center"}
          width="75%"
        >
          {subTitle}
        </Text>
        <Text fontSize="24" fontWeight="600" color={"white"}>
          {amount}
        </Text>
        <Text
          color="#8094ae"
          fontSize="14"
          fontWeight="600"
          mt={2}
          textAlign={"center"}
        >
          {userText}
        </Text>
        <ContainedButton title={buttonText} fontSize={13} />
      </Box>
    </GridItem>
  );
};

export default PlanBlock;
