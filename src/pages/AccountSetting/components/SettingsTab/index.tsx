import { ReactNode, useState } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

interface ItabsObject {
  key: string;
  value: string;
  component: ReactNode;
}

interface Itabs {
  tabs: Array<ItabsObject>;
}

const SettingTabs = ({ tabs }: Itabs) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Tabs
      index={activeTab}
      color="#b6c6e3"
      variant="line"
      borderColor={"#203247"}
    >
      <TabList>
        {tabs?.map((tab, i) => (
          <Tab
            key={i}
            textAlign={"start"}
            _focus={{
              outline: "none",
              border: "none",
              borderRadius: 0,
              borderBottom: "3px solid #798BFF",
              bgColor: "transparent",
              color: "main",
            }}
            _hover={{ outline: "none", color: "white", border: "none" }}
            _selected={{
              outline: "none",
              border: "none",
              borderRadius: 0,
              borderBottom: "3px solid #798BFF",
              bgColor: "transparent",
              color: "main",
            }}
            onClick={() => handleTabChange(i)}
          >
            {tab?.value}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs?.map((item, i) => (
          <TabPanel key={i} sx={{ px: 0 }} hidden={activeTab !== i}>
            {item?.component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default SettingTabs;