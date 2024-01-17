import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ReactNode } from "react";
interface ItabsObject {
  key: string;
  value: string;
  component: ReactNode;
}
interface Itabs {
  tabs: Array<ItabsObject>;
}

const SettingTabs = ({ tabs }: Itabs) => {
  return (
    <Tabs
      defaultIndex={2}
      color="#b6c6e3"
      variant="line"
      borderColor={"#203247"}
    >
      <TabList>
        {tabs?.map((tab, i) => {
          return (
            <Tab
              key={tab?.key}
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
            >
              {tab?.value}
            </Tab>
          );
        })}
      </TabList>

      <TabPanels>
        {tabs?.map((item, i) => {
          return <TabPanel sx={{ px: 0 }}>{item?.component}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  );
};

export default SettingTabs;
