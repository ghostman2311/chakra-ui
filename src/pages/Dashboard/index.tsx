import { Box, Grid, Text } from "@chakra-ui/react";
import Icon from "../../assets/dashboard/icon.svg";
import Account from "../../assets/dashboard/account.svg";
import Billing from "../../assets/dashboard/billing.svg";
import Info from "../../assets/dashboard/info.svg";
import DashboardBox from "./components/DashboardBox";
import ContainedButton from "../../components/Button/Contained";
import Support from "../../components/Support";
import PageContainer from "../../components/PageContainer";
import PaymentHistoryTable from "../PaymentHistory/component";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const paymentHistoryColumnData = [
    {
      id: 4947,
      billFor: "Enterprize Year Subscrition",
      issueDate: "10-05-2019",
      dueDate: "10-13-2019",
      amount: "$599.00",
      status: "Due",
    },
    {
      id: 4947,
      billFor: "Enterprize Year Subscrition",
      issueDate: "10-05-2019",
      dueDate: "10-13-2019",
      amount: "$599.00",
      status: "Paid",
    },
    {
      id: 4947,
      billFor: "Enterprize Year Subscrition",
      issueDate: "10-05-2019",
      dueDate: "10-13-2019",
      amount: "$599.00",
      status: "Paid",
    },
  ];
  return (
    <PageContainer
      title="Welcome, Abu Bin Ishtiyak"
      subTitle="Welcome to our dashboard. Manage your account and your subscriptions."
    >
 
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={7}
        // bg="#101924"
        bg="background"
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
      </Grid>
      {/* Enterprise plan*/}
      <Grid
        templateColumns={"1fr "}
        mt={7}
        overflow="hidden"
        // bgColor={"#18212d"}
        bg="specificBackground"
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
              <span style={{ color: "heading" }}>Enterpise Plan - </span>$599.00 /
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
      
       <PaymentHistoryTable data={paymentHistoryColumnData} title={'Payment History'} link={
      <Box>
      See All <ChevronRightIcon/>
      </Box>} />
   
      <Support />
    </PageContainer>
  );
};

export default Dashboard;
