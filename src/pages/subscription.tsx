import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Switch,
  Text,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';
const Subscription = () => {
  return (
    <Box w="100vw" h={{base:'auto',md:'100vh'}}bg="#101924" px={{ base: 4, md: 14 }} py={12}>
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
              <Icon as={InfoOutlineIcon} boxSize={4} mr={2} color={'#798BFF'}/>
            </Text>
          </Box>
        </GridItem>

        <GridItem   
          display="flex"
          alignItems="center"
          justifyContent={{ base: "flex-start", md: "flex-end" }}
        >
          <Box
          // sx={{ border: "2px solid white" }}
          >
            <Button
              colorScheme="blue"
              bgColor={"#18212d"}
              color={"#6576ff"}
              borderColor={"#333f77"}
              variant="outline"
              fontSize={17}
              sx={{
                '&:hover': {
                    bgColor:"#6576ff",
                    color:'white'
                }}}
            >
              View Pricing
            </Button>
          </Box>
        </GridItem>
      </Grid>
      {/* seond box */}
      <Grid
        templateColumns={{ base: "1fr", md: "3.5fr 1.5fr" }}
        bg="#101924"
        color="#8094ae"
        mt={16}
        borderRadius={4}
        overflow="hidden"
        sx={{ border: "1px solid #203247" }}
      >
        <GridItem py={{ base: 5, md: 10 }} bgColor={'#18212d'}>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            borderBottom={{ base: "2px solid white", md: "none" }}
            px={{ base: 7, md: 8 }}
          >
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Text fontSize="1rem" fontWeight="600" color={"#798BFF"}>
                  Enterprise Plan
                </Text>
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
              <Switch sx={{ color: "#6576ff" }} size="lg" />
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
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Started On
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                Oct 12, 2018
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Recuring
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                Yes
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Price
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                $599.00
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Access
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                Unlimited
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          bgColor={"#1b2633"}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          flexDirection={{ md: "column" }}
          gap={2}
          p={{ base: 5, md: 16 }}
          borderLeft={{ md: "1px solid #203247" }}
          borderTop={{ base: "1px solid #203247", md: "none" }}
        >
          <Button
            bgColor={"#6576ff"}
            color={"white"}
            borderColor={"#333f77"}
            variant="outline"
            fontSize={15}
            sx={{
                '&:hover': {
                    bgColor:"#6576ff"
                }}}
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
        </GridItem>
      </Grid>
      {/* Third box */}
      <Grid
        templateColumns={{ base: "1fr", md: "3.5fr 1.5fr" }}
        bg="#101924"
        color="#8094ae"
        borderRadius={4}
        overflow="hidden"
        sx={{ border: "1px solid #203247" }}
      >
        <GridItem py={{ base: 5, md: 10 }} bgColor={'#18212d'} >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            borderBottom={{ base: "2px solid white", md: "none" }}
            px={{ base: 7, md: 8 }}
          >
            <Box>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Text fontSize="1rem" fontWeight="600" color={"#798BFF"}>
                  Pro Plan
                </Text>
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
              <Switch sx={{ color: "#6576ff" }} size="lg" />
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
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Started On
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                Oct 12, 2018
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Recuring
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                Yes
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Price
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                $599.00
              </Text>
            </Box>
            <Box w={{ base: "50%", md: "25%" }} pb={{ base: 5, md: 0 }}>
              <Text fontSize="1rem" fontWeight="600" color={"#8094ae"}>
                Access
              </Text>
              <Text color="#526484" fontSize="1rem" fontWeight="600" mt={1}>
                Unlimited
              </Text>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          bgColor={"#1b2633"}
          display="flex"
          alignItems="center"
          justifyContent={{ base: "space-between", md: "center" }}
          flexDirection={{ md: "column" }}
          gap={2}
          p={{ base: 5, md: 16 }}
          borderLeft={{ md: "1px solid #203247" }}
          borderTop={{ base: "1px solid #203247", md: "none" }}
        >
          <Button
            bgColor={"#18212d"}
            color={"#6576ff"}
            borderColor={"#333f77"}
            variant="outline"
            fontSize={15}
            sx={{
                '&:hover': {
                    bgColor:"#6576ff",
                    color:"white"
                }}}
          >
            Renew Plan
          </Button>
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
    </Box>
  );
};

export default Subscription;
