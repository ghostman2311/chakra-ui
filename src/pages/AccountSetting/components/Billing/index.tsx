import CommonBillingBlock from "../CommonBillingBlock";
import EnterprisePlan from "../../../Dashboard/components/EnterprisePlan";
import BillingBox from "../BillingBox";
import { Fragment } from "react";

const Billing = () => {
  const enterprisePlanData = {
    plan: "Enterpise Plan",
    amount: "$599.00 / Yearly",
    buttonText: "Change Plan",
    subTitle:
      "Unlimited access with priority support, 99.95% uptime, powerfull features and more...",
    switch: true,
  };
  return (
    <Fragment>
      <CommonBillingBlock
        title="Current Subscription"
        subTitle="Details about your current subscription and billing information."
      >
        <EnterprisePlan data={enterprisePlanData} />
      </CommonBillingBlock>
      <CommonBillingBlock
        title="Billing Cycle"
        subTitle="Your subscription renews on Jan 28, 2020 (2 months 17 days remaining)."
      >
        <BillingBox
          heading="Yearly Subscription"
          title1=" Next payment "
          subTitle1="  $599.00 USD on Jan 28, 2020"
          title2="Last payment made"
          subTitle2="Jan 28, 2019"
          linkText='  Switch Billing Cycle'
        />
      </CommonBillingBlock>
      <CommonBillingBlock
        title="Manage Liceneses"
       
      >
        <BillingBox
          heading="20 Licenses"
          title1=" Licenssed members have full access to all NioAccount Features."
          linkText='Manage License'
        />
      </CommonBillingBlock>
    </Fragment>
  );
};

export default Billing;
