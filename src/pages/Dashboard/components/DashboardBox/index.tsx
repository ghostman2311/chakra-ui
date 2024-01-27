import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, GridItem, Heading, Text } from "@chakra-ui/react";

interface IDashboardBox {
  icon: string;
  title: string;
  subTitle: string;
  linkText: string;
}
const DashboardBox = ({ icon, title, subTitle, linkText }: IDashboardBox) => {
  return (
    <GridItem
      // bgColor={"#18212d"}
      bg="specificBackground"
      borderRadius={10}
      sx={{ border: "1px", borderColor: "borderColor" }}
    >
      <Box
        display={"flex"}
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={7}
      >
        <Box>
          <img src={icon} alt="Your SVG" height={100} width={100} />
        </Box>
        <Box>
          <Heading as="h5" fontSize="20" fontWeight="700" color={"title"}>
            {title}
          </Heading>
          <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
            {subTitle}
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "1px",
          borderColor: "borderColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 7,
        }}
      >
        <Text fontSize="13.6" fontWeight="600" color={"#798BFF"}>
          {linkText}
        </Text>
        <ChevronRightIcon w={8} h={5} color="main" />
      </Box>
    </GridItem>
  );
};

export default DashboardBox;
