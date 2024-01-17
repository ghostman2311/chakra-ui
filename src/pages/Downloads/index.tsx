import { Box, Text } from "@chakra-ui/react";
import Support from "../../components/Support";
import CommonBlock from "./components/CommonBlock";

const Downloads = () => {
  const downloadsData = [
    {
      icon: "https://dashlite.net/demo4/images/icons/product-pp.svg",
      title: "Payment plugin ",
      version: "1.6.4",
      date: "26 Jan 2020",
    },
    {
      icon: "https://dashlite.net/demo4/images/icons/product-ee.svg",
      title: "Email Exporter",
      version: "1.3.1",
      date: "15 Dec 2019",
    },
    {
      icon: "	https://dashlite.net/demo4/images/icons/product-cc.svg",
      title: "Cash Cleaner",
      version: "1.7.2",
      date: "05 Feb 2020",
    },
    {
      icon: "		https://dashlite.net/demo4/images/icons/product-sc.svg",
      title: "Spam Checker",
      version: "1.0.3",
      date: " 26 Jan 2020",
    },
    {
      icon: "https://dashlite.net/demo4/images/icons/product-ig.svg",
      title: "Image Gallery",
      version: "1.4.2",
      date: "12 Jan 2020",
    },
  ];
  return (
    <Box w="100%" bg="#101924" px={{ base: 4, md: 14 }} mt={50} py={12}>
      <Text color="#8094ae" fontSize="16" fontWeight="400">
        Download
      </Text>

      <Text
        fontSize={{ base: "20", sm: "40" }}
        fontWeight="400"
        color={"white"}
      >
        Product Downloads
      </Text>
      <Text color="#8094ae" fontSize="14" fontWeight="400" pr={1}>
        You can download all the application that available in your plan.
      </Text>
      {downloadsData.map((item, i) => {
        return <CommonBlock item={item} key={i} />;
      })}

      <Support />
    </Box>
  );
};

export default Downloads;
