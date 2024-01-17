import { SystemStyleObject, Text } from "@chakra-ui/react";

interface IPlanHeader {
  title: string;
  sx?: SystemStyleObject;
}
const PlanHeader = ({ title, sx = {} }: IPlanHeader) => (
  <Text fontSize="1rem" fontWeight="600" color={"#798BFF"} sx={{ ...sx }}>
    {title}
  </Text>
);

export { PlanHeader };
