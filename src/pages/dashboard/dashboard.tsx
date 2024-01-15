import { Box, Grid, Text } from "@chakra-ui/react";
import { ContainedButton, DashboardBox, Support } from "../../components";
import Icon from "../../assets/dashboard/icon.svg";
import Account from "../../assets/dashboard/account.svg";
import Billing from "../../assets/dashboard/billing.svg";
import Info from "../../assets/dashboard/info.svg";


const Dashboard = () => {
  return (
    <Box w="100vw" bg="#101924" px={{ base: 4, md: 14 }} py={12}>
      <Box bg="#101924" color="#8094ae">
        <Text fontSize={{base:'20',sm:"40"}} fontWeight="400" color={"white"}>
          Welcome, Abu Bin Ishtiyak
        </Text>
        <Text color="#8094ae" fontSize="1.4rem" fontWeight="400">
          Welcome to our dashboard. Manage your account and your subscriptions.
        </Text>
      </Box>

      {/* boxes UI-start */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={7}
        bg="#101924"
        color="#8094ae"
        mt={7}
        overflow="hidden"
      >
        <DashboardBox
          icon={Info}
          title={"Personal Info"}
          subTitle={
            "See your profile data and manage your Account to choose what is saved in our system."
          }
          linkText="Manage Your Account"
        />
        <DashboardBox
          icon={Icon}
          title={"Security Setting"}
          subTitle={
            "You have full control to manage your own account and keep account fully secure."
          }
          linkText="Account Setting"
        />
        <DashboardBox
          icon={Billing}
          title={"Billing History"}
          subTitle={
            "Check out all your payment history. You can also download or print your invoice."
          }
          linkText="Payment History"
        />
        <DashboardBox
          icon={Account}
          title={"Account Reports"}
          subTitle={
            "Check your reports of uses and manage your packages or subscriptions that you have."
          }
          linkText="Manage Subscription"
        />
        {/* <GridItem
          bgColor={"#1b2633"}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          flexDirection={{ md: "column" }}
          gap={2}
          p={{ base: 5, md: 16 }}
        >
          <Button
            bgColor={"#6576ff"}
            color={"white"}
            borderColor={"#333f77"}
            variant="outline"
            fontSize={15}
            sx={{
              "&:hover": {
                bgColor: "#6576ff",
              },
            }}
          >
            Change Plan
          </Button>
          <Text
            color="#8094ae"
            fontSize="13"
            fontWeight="400"
            textAlign={"center"}
          >
            Next Billing on{" "}
            <span style={{ color: "#526484" }}>Oct 11, 2020</span>
          </Text>
        </GridItem> */}
      </Grid>
      {/* Enterprise plan*/}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr " }}
        mt={7}
        overflow="hidden"
        bgColor={"#18212d"}
        borderRadius={10}
        sx={{ border: "1px solid #203247" }}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          borderBottom="1px solid #203247"
          p={7}
        >
          <Box>
            <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
              <span style={{ color: "white" }}>Enterpise Plan - </span>$599.00 /
              Yearly
            </Text>

            <Text color="#8094ae" fontSize="14" fontWeight="400" mt={2}>
              Unlimited access with priority support, 99.95% uptime, powerfull
              features and more...
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={{ base: "none", md: "center" }}
            my={{ base: 4, md: 0 }}
            alignContent={"center"}
          >
            <ContainedButton title="View Plan" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          p={7}
        >
          <Text color="main" fontSize="14" fontWeight="400" mt={2}>
            <span style={{ color: "#8094ae" }}> Learn more about our</span>{" "}
            subscription options.
          </Text>
        </Box>
      </Grid>
     <Support/>
    </Box>
  );
};

export default Dashboard;
