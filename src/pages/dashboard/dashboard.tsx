import { Box, Grid, Text } from "@chakra-ui/react";
import { DashboardBox, Support } from "../../components";
import Icon from "../../assets/dashboard/icon.svg";
import Account from "../../assets/dashboard/account.svg";
import Billing from "../../assets/dashboard/billing.svg";
import Info from "../../assets/dashboard/info.svg";
import EnterprisePlan from "./enterprisePlan";

const Dashboard = () => {
  const enterprisePlanData = {
    plan: "Enterpise Plan",
    amount: "$599.00 / Yearly",
    buttonText: "View Plan",
    subTitle:
      "Unlimited access with priority support, 99.95% uptime, powerfull features and more...",
  };
  return (
    <Box w="100%" bg="#101924" px={{ base: 4, md: 14 }} py={12} mt={50}>
      <Box bg="#101924" color="#8094ae">
        <Text
          fontSize={{ base: "20", sm: "40" }}
          fontWeight="400"
          color={"white"}
        >
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
      <EnterprisePlan data={enterprisePlanData} />
      <Support />
    </Box>
  );
};

export default Dashboard;
