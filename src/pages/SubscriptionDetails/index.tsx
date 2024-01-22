import { Box, Grid } from "@chakra-ui/layout";
import PageContainer from "../../components/PageContainer";
import PaymentBlock from "./components/paymentBlock";
import PaymentHistoryTable from "../PaymentHistory/component";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const SubscriptionDetails = () => {
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
      backIcon={true}
      header="Subscription"
      title="Enterprise Plan"
      subTitle="Your subscription renews on Oct 28, 2020 (11 months 16 days remaining) "
      icon={true}
      isSubscription={true}
    >
      <PaymentBlock/>
      <PaymentHistoryTable data={paymentHistoryColumnData} title={'Payment History'} link={
      <Box>
      Download Statement
      </Box>} />
    </PageContainer>
  );
};

export default SubscriptionDetails;
