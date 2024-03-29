import { Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "../Header";
import SideBarMenu from "../SideBarMenu";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SideDrawer from "../SideDrawer";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isScreenBelow991] = useMediaQuery("(max-width: 991px)");
  const [isScreenAbove992] = useMediaQuery("(min-width:992px)");

  const [showDrawer, setShowDrawer] = useState(false);
  const DrawerHandle = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    if (isScreenBelow991 || isScreenAbove992) {
      setShowDrawer(false);
    }
  }, [isScreenBelow991, isScreenAbove992]);
  return (
    <Box w="100vw" bg="background">
      <Header DrawerHandle={DrawerHandle} />
      <Grid
        templateColumns={{
          base: "1fr",
          md: !isScreenBelow991 ? "1fr 4fr" : "1fr",
        }}
        bg="background"
      >
        <GridItem
          bgColor={"background"}
          display={{ base: "none", md: "inline-block" }}
        >
          <Box
            // w={"100%"}
            display={{
              base: "none",
              md: !isScreenBelow991 ? "inline-block" : "none",
            }}
          >
            <SideBarMenu mt={140} />
          </Box>
        </GridItem>
        <GridItem>
          <Outlet />
          <Footer />
        </GridItem>
      </Grid>

      {showDrawer ? (
        <SideDrawer showDrawer={showDrawer} onClose={DrawerHandle} />
      ) : null}
    </Box>
  );
};

export default Layout;
