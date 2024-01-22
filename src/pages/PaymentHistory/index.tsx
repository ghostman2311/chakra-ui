
import PageContainer from "../../components/PageContainer";
import { FaFileInvoice } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Box, Grid } from "@chakra-ui/layout";
import PaymentHistoryTable from "./component";

const PaymentHistory = () => {
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
    {
      id: 4947,
      billFor: "Enterprize Year Subscrition",
      issueDate: "10-05-2019",
      dueDate: "10-13-2019",
      amount: "$599.00",
      status: "Cancel",
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
      header="Account Billing"
      title="Payment History"
      subTitle="Here is your payment history of account."
      buttonText="Get Invoice"
      buttonIcon={<FaFileInvoice style={{ marginRight: "10" }} />
    }
    >
       <Grid
        templateColumns={{ base: "1fr"}}
   
        bg="#101924"
        color="#8094ae"
        overflow="hidden"
      >
    <PaymentHistoryTable data={paymentHistoryColumnData}/>
      </Grid>
    </PageContainer>
  );
};

export default PaymentHistory;
