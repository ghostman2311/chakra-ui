import { Box, Heading, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";

interface ICheckData {
  checked?: boolean;
  label?: string;
}
interface INotificationBlock {
  title: string;
  subTitle: string;
  checkedData?: Array<ICheckData>;
}

interface IData {
  data: Array<INotificationBlock>;
}

const NotificationBlock = ({ data }: IData) => {
  return (
    <>
      {data?.map((item, i) => {
        return (
          <Box key={i} mt={9} color={"title"}>
            <Heading as="h4" size="md" sx={{ color: "title" }}>
              {item?.title}
            </Heading>
            <Text
              color="#8094ae"
              fontSize={{ md: 14 }}
              fontWeight="400"
              pr={1}
              sx={{ textWrap: "no-wrap" }}
              mt={1}
              mb={2}
            >
              {item?.subTitle}
            </Text>
            {item?.checkedData?.map((check,i) => {
              return (
                <Box mt={2} key={i} display={'flex'} gap={2}>
                  <Switch sx={{ color: "active" }} size="lg" isChecked={check.checked} />
                  <Text
                    color="#B6C6E3"
                    fontSize="14"
                    fontWeight="400"
                    mt={1}
                  >
                    {check?.label}
                  </Text>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </>
  );
};

export default NotificationBlock;
