import { Box, Text } from "@chakra-ui/react";
import Support from "../../components/Support";
import CommonBlock from "./components/CommonBlock";
import PageContainer from "../../components/PageContainer";

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
    <PageContainer header='Download' title='Product Downloads' subTitle="You can download all the application that available in your plan.">
  
      {downloadsData.map((item, i) => {
        return <CommonBlock item={item} key={i} />;
      })}

      <Support />
    
    </PageContainer>
  );
};

export default Downloads;
