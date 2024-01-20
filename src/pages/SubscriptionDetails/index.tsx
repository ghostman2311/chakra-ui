import { Grid } from "@chakra-ui/layout";
import PageContainer from "../../components/PageContainer";
import PaymentHistoryTable from "../../components/PaymentHistoryTable";
import PaymentBlock from "./components/paymentBlock";

const SubscriptionDetails = () => {
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
      <Grid
        templateColumns={"1fr "}
        mt={7}
        overflow="hidden"
        bgColor={"#18212d"}
        borderRadius={10}
        sx={{ border: "1px solid #203247" }}
      >
        <PaymentHistoryTable />
      </Grid>
    </PageContainer>
  );
};

export default SubscriptionDetails;
