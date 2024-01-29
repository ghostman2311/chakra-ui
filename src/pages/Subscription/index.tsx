import {
  Badge,
  Box,
  Grid,
  GridItem,
  Switch,
  Text,
} from "@chakra-ui/react";
import Support from "../../components/Support";
import ContainedButton from "../../components/Button/Contained";
import OutlineButton from "../../components/Button/Outlined";
import PageContainer from "../../components/PageContainer";
import { PlanHeader } from "./components/PlanHeader";
import { useState } from "react";
import SubscriptionModal from "./components/Modal/subscriptionsModal";

const Subscription = () => {
  const [changePlan, setChangePlan] = useState(false);
  const changeSubscriptionOption = [
    {
      title: "Enterprise Plan ",
      subTitle: "Unlimited Access / $599.00 USD / Year",
      active: true,
      amount: "$599.00",
      amountFor: "Yearly",
    },
    {
      title: "NioPro Plan",
      subTitle: "Unlimited Access / $249.00 USD / Year",
      active: false,
      amount: "$299.00",
      amountFor: "Yearly",
    },
    {
      title: "Free Plan",
      subTitle: "Free Access / $0.00 USD / Year",
      active: false,
      amount: "$0.00",
      amountFor: "Yearly",
    },
  ];

  return (
    <PageContainer
      header="Manage Subscription"
      title="My Subscriptions"
      subTitle="Here is list of package/product that you have subscribed."
      icon={true}
      buttonText="View Pricing"
    >
      {/* seond box */}
      <Grid
        templateColumns={{ base: "1fr", md: "3.5fr 1.5fr" }}
        bg="specificBackground"
        color="#8094ae"
        mt={16}
        borderRadius={4}
        overflow="hidden"
        sx={{ border: "1px", borderColor: "borderColor" }}
      >
        <GridItem py={{ base: 5, md: 10 }} bgColor={"specificBackground"}>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            borderBottom={{ base: "1px ", md: "none" }}
            borderColor="borderColor"
            px={{ base: 7, md: 8 }}
          >
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                <PlanHeader title="Enterprise Plan" />
                <Badge
                  bgColor="#1ee0ac"
                  color="white"
                  borderRadius={13}
                  display={"flex"}
                  px={2}
                  fontSize={10}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  Active
                </Badge>
              </Box>
              <Text color="#8094ae" fontSize="0.8rem" fontWeight="600" mt={2}>
                Subscription ID:<span color="white">100394949</span>
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={{ base: "none", md: "center" }}
              my={{ base: 4, md: 0 }}
              alignContent={"center"}
              gap={2}
            >
              <Switch sx={{ color: "active" }} size="lg" />
              <Text color="#8094ae" fontSize="0.8rem" fontWeight="600">
                Auto renew
              </Text>
            </Box>
          </Box>
          <Box
            px={{ base: 7, md: 8 }}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            pt={5}
          >
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Started On
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                Oct 12, 2018
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Recuring
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                Yes
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Price
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                $599.00
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="600" color={"#8094ae"}>
                Access
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="600" mt={1}>
                Unlimited
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          bgColor={"changePlanBackground"}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          flexDirection={{ md: "column" }}
          gap={2}
          p={{ base: 5, md: 16 }}
        >
          <ContainedButton
            title="Change Plan"
            fontSize={13}
            onClick={() => setChangePlan(true)}
          />
          <Text
            color="#8094ae"
            fontSize="13"
            fontWeight="400"
            textAlign={"center"}
          >
            Next Billing on{" "}
            <span style={{ color: "#526484" }}>Oct 11, 2020</span>
          </Text>
        </GridItem>
      </Grid>
      {/* Third box */}
      <Grid
        templateColumns={{ base: "1fr", md: "3.5fr 1.5fr" }}
        bg="specificBackground"
        color="#8094ae"
        borderRadius={4}
        overflow="hidden"
        sx={{ border: "1px", borderColor: "borderColor" }}
      >
        <GridItem py={{ base: 5, md: 10 }} bgColor={"specificBackground"}>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            borderBottom={{ base: "1px", md: "none" }}
            borderColor="borderColor"
            px={{ base: 7, md: 8 }}
          >
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                <PlanHeader title="Pro Plan" />
                <Badge
                  bgColor="black"
                  color="white"
                  borderRadius={13}
                  display={"flex"}
                  px={2}
                  fontSize={10}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ border: "2px solid #203247" }}
                >
                  Expired
                </Badge>
              </Box>
              <Text color="#8094ae" fontSize="0.8rem" fontWeight="600" mt={1}>
                Subscription ID:<span color="white">100394949</span>
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={{ base: "none", md: "center" }}
              my={{ base: 4, md: 0 }}
              alignContent={"center"}
              gap={2}
            >
              <Switch sx={{ color: "active" }} size="lg" />
              <Text color="#8094ae" fontSize="0.8rem" fontWeight="600" mt={1}>
                Auto renew
              </Text>
            </Box>
          </Box>
          <Box
            px={{ base: 7, md: 8 }}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            pt={5}
          >
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="400" color={"#8094ae"}>
                Started On
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="400" mt={1}>
                Oct 12, 2018
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="400" color={"#8094ae"}>
                Recuring
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="400" mt={1}>
                Yes
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="400" color={"#8094ae"}>
                Price
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="400" mt={1}>
                $599.00
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="14" fontWeight="400" color={"#8094ae"}>
                Access
              </Text>
              <Text color="#526484" fontSize="14" fontWeight="400" mt={1}>
                Unlimited
              </Text>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          bgColor={"changePlanBackground"}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          flexDirection={{ md: "column" }}
          gap={2}
          p={{ base: 5, md: 16 }}
          // borderLeft={{ md: "1px" }}
          borderTop={{ base: "1px ", md: "none" }}
          // borderColor="borderColor"
        >
          <OutlineButton title=" Renew Plan" fontSize={13} />

          <Text
            color="#8094ae"
            fontSize="13"
            fontWeight="400"
            textAlign={"center"}
          >
            You can renew the plan anytime.
          </Text>
        </GridItem>
      </Grid>
      <Support />

      {changePlan ?(
      <SubscriptionModal 
       open={changePlan} 
      onClose={() => setChangePlan(false)}
      data={changeSubscriptionOption}
      />
      ):null}
    </PageContainer>
  );
};

export default Subscription;
