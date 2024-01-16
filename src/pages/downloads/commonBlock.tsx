import { Badge, Box, Grid, Text } from "@chakra-ui/react";
import { ContainedButton } from "../../components";
interface IItem {
  icon: string;
  title: string;
  version: string;
  date: string;
}
interface ICommonBlock {
  item: IItem;
  key: number;
}
const CommonBlock = ({ item, key }: ICommonBlock) => {
  return (
    <Grid
      key={key}
      templateColumns={"1fr"}
      mt={7}
      overflow="hidden"
      bgColor={"#18212d"}
      borderRadius={10}
      sx={{ border: "1px solid #203247" }}
    >
      <Box
        display={"flex"}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={{ base: "none", md: "space-between" }}
        p={7}
        w={"100%"}
      >
        <Box w={{ base: "100%", sm: "60%" }} display={"flex"} gap={4}>
          <Box
            w={{ base: "15%", md: "7%" }}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"flex-start"}
            pt={{ base: 3, md: 0 }}
          >
            <img src={item?.icon} height={"20"} width={"40"} />
          </Box>

          <Box w={{ base: "100%", sm: "93%" }} my={{ base: 4, md: 0 }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Text fontSize="1rem" fontWeight="600" color={"white"}>
                {item?.title}
              </Text>
              <Badge
                bgColor="#242E4D"
                color="main"
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

            <Box
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 1, md: 4 }}
              sx={{ display: "flex", mt: 2 }}
            >
              <Text fontSize={14} color={"#8094AE"}>
                Latest Version:
                <span style={{ color: "#B6C6E3" }}> {item?.version}</span>{" "}
              </Text>

              <Text fontSize={14} color={"#8094AE"}>
                Release Date:
                <span style={{ color: "#B6C6E3" }}> {item?.date}</span>{" "}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ base: "start", sm: "end" }}
          my={{ base: 4, md: 0 }}
          alignItems={"center"}
          w={{ base: "100%", sm: "40%" }}
          pl={{ base: 10, sm: 0 }}
        >
          <ContainedButton title="Download" />
        </Box>
      </Box>
    </Grid>
  );
};

export default CommonBlock;
