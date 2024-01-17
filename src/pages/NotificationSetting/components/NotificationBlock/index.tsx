import { Box, Heading, Text } from "@chakra-ui/layout";

interface INotificationBlock {
  title: string;
  subTitle: string;
  checked?: boolean;
  checkedLabel?: string;
}

const NotificationBlock = ({
  title,
  subTitle,
  checked,
  checkedLabel,
}: INotificationBlock) => {
  return (
    <Box mt={9} color={"white"}>
      <Heading as="h4" size="md" sx={{ color: "white" }}>
        {title}
      </Heading>
      <Text
        color="#8094ae"
        fontSize={{ md: 14 }}
        fontWeight="400"
        pr={1}
        sx={{ textWrap: "no-wrap" }}
        mt={1}
      >
        {subTitle}
      </Text>
      {/* <Box>njesfdjne</Box> */}
    </Box>
  );
};

export default NotificationBlock;
