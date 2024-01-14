import React from "react";
import { Grid, GridItem, Box, Text, Icon, Button } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export const SubscriptionHeader = () => (
  <React.Fragment>
    <Text color="#8094ae" fontSize="1.4rem" fontWeight="400">
      Manage Subscription
    </Text>
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={7}
      bg="#101924"
      color="#8094ae"
    >
      <GridItem>
        <Box>
          <Text fontSize="3.5rem" fontWeight="400" color={"white"}>
            My Subscriptions
          </Text>
          <Text color="#8094ae" fontSize="1.4rem" fontWeight="400" pr={1}>
            Here is list of package/product that you have subscribed.
            <Icon as={InfoOutlineIcon} boxSize={4} mr={2} color={"#798BFF"} />
          </Text>
        </Box>
      </GridItem>

      <GridItem
        display="flex"
        alignItems="center"
        justifyContent={{ base: "flex-start", md: "flex-end" }}
      >
        <Box>
          <Button
            colorScheme="blue"
            bgColor={"#18212d"}
            color={"#6576ff"}
            borderColor={"#333f77"}
            variant="outline"
            fontSize={17}
            sx={{
              "&:hover": {
                bgColor: "#6576ff",
                color: "white",
              },
            }}
          >
            View Pricing
          </Button>
        </Box>
      </GridItem>
    </Grid>
  </React.Fragment>
);
