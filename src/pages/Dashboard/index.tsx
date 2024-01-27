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
import EnterprisePlan from "./components/EnterprisePlan";

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
  const enterprisePlanData = {
    plan: "Enterpise Plan",
    amount: "$599.00 / Yearly",
    buttonText: "View Plan",
    subTitle:
      "Unlimited access with priority support, 99.95% uptime, powerfull features and more...",
    switch: true,
  };
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
    
        <EnterprisePlan data={enterprisePlanData} />
       <PaymentHistoryTable data={paymentHistoryColumnData} title={'Payment History'} link={
      <Box>
      See All <ChevronRightIcon/>
      </Box>} />
   
      <Support />
    </PageContainer>
  );
};

export default Dashboard;
