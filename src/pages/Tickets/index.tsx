import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import PageContainer from "../../components/PageContainer";
import { Badge, Box, Grid, Text } from "@chakra-ui/layout";
import { FaRegUser } from "react-icons/fa6";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { FaRegMessage } from "react-icons/fa6";
import ContainedButton from "../../components/Button/Contained";

const Tickets = () => {
  const invoicesData = [
    {
      id: "C506223",
      subject: "Request for approve payment",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Close",
    },
    {
      id: "C506223",
      subject: "Payment was rejected",
      submittedDate: "02 Dec 2019",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Open",
    },
    {
      id: "C506223",
      subject: "We cannot install on our server",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$200.00",
      status: "Close",
    },
    {
      id: "C506223",
      subject: "Support for website",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Open",
    },
    {
      id: "C506223",
      subject: "Request for approve payment",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$120.00",
      status: "Open",
    },
    {
      id: "C506223",
      subject: "We cannot install on our server",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Open",
    },
    {
      id: "C506224",
      subject: "Request for approve payment",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Open",
    },
    {
      id: "C506225",
      subject: "Request for approve payment",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$120.00",
      status: "Open",
    },
    {
      id: "C506227",
      subject: "Request for approve payment",
      submittedDate: "26 Jan 2020",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Open",
    },
  ];

  return (
    <PageContainer
      header="My Tickets"
      title="Support Ticket"
      subTitle="Here are all of your support request that you already sent."
      buttonText="Submit Ticket"
    >
      <Grid
        templateColumns={{ base: "1fr" }}
        bg="background"
        color="#8094ae"
        overflow="hidden"
      >
        <TableContainer border="1px solid #203247" borderRadius={5} mt={10}>
          <Table variant="simple" backgroundColor={"specificBackground"}>
            <Thead borderBottom={"1px solid #203247"}>
              <Tr height={"40px"} border={"none"} display={"flex"}>
                <Th
                  border={"none"}
                  width={"40%"}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box
                    display={"flex"}
                    w={{ base: "100%" }}
                    justifyContent={"space-between"}
                  >
                    <Box w={{ base: "30%" }}>TICKET</Box>
                    <Box
                      w={{ base: "70%" }}
                      display={{ base: "none", md: "inline-block" }}
                    >
                      SUBJECT
                    </Box>
                  </Box>
                </Th>
                <Th
                  border={"none"}
                  width={"15%"}
                  display={{ base: "none", md: "inline-block" }}
                >
                  SUBMITED
                </Th>
                <Th
                  border={"none"}
                  width={"25%"}
                  display={{ base: "none", md: "inline-block" }}
                >
                  LAST SEEN
                </Th>
                <Th
                  width={{ base: "55%", md: "20%" }}
                  border={"none"}
                  display={"flex"}
                  justifyContent={{ base: "end", md: "start" }}
                >
                  STATUS
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoicesData?.map((item, i) => {
                return (
                  <Tr borderBottom={"1px solid #203247"} display={"flex"} key={i}>
                    <Td
                      border={"none"}
                      width={"40%"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      <Box
                        display={"flex"}
                        w={{ base: "100%" }}
                        justifyContent={"space-between"}
                        flexDirection={{ base: "column", md: "row" }}
                      >
                        <Box
                          w={{ base: "30%" }}
                          fontSize={"13"}
                          fontWeight={600}
                        >
                          {item?.id}
                        </Box>
                        <Box
                          w={{ base: "70%" }}
                          fontSize={"13"}
                          color="#8094AE"
                        >
                          {item?.subject}
                        </Box>
                      </Box>
                    </Td>
                    <Td
                      border={"none"}
                      color="#526484"
                      width={"15%"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                      flexDirection={{ base: "column", md: "row" }}
                      display={{ base: "none", md: "inline-block" }}
                    >
                      <Box
                        color={"#B6C6E3"}
                        w={{ base: "40%" }}
                        mt={{ base: 2, md: 0 }}
                        fontSize={13}
                        display={{ base: "none", md: "inline-block" }}
                      >
                        {item?.submittedDate}
                      </Box>
                    </Td>
                    <Td
                      border={"none"}
                      color="#526484"
                      width={"25%"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                      flexDirection={{ base: "column", md: "row" }}
                      display={{ base: "none", md: "inline-block" }}
                    >
                      <Box
                        color={"#B6C6E3"}
                        w={{ base: "40%" }}
                        mt={{ base: 2, md: 0 }}
                        fontSize={13}
                        display={{ base: "none", md: "inline-block" }}
                      >
                        <Box display={"flex"} alignItems={"center"} gap={2}>
                          <Avatar
                            size="xs"
                            icon={<FaRegUser fontSize="0.6rem" />}
                          />
                          {item?.dateTime}
                        </Box>
                      </Box>
                    </Td>
                    <Td
                      border={"none"}
                      color={"#8094AE"}
                      width={"20%"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      <Badge
                        variant="solid"
                        backgroundColor={
                          item?.status === "Open" ? "green" : "#344357"
                        }
                      >
                        {item?.status}
                      </Badge>
                      <ChevronRightIcon />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        templateColumns={{ base: "1fr" }}
        mt={6}
        backgroundColor={"specificBackground"}
        color="#8094ae"
        overflow="hidden"
        border="1px solid #798BFF"
        borderRadius={5}
        p={5}
      >
        <Box display={"flex"}>
          <Box w={{ base:'20%',md: "7%" }} >
            <Box
              w={"40px"}
              h={"40px"}
              borderRadius={"30px"}
              bgColor={"#798BFF"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              {" "}
              <FaRegMessage color="white" />
            </Box>
          </Box>
          <Box w={{ base: "80%",md:'93%'}} display='flex' flexDirection={{base:'column',md:'row'}} justifyContent={{base:'start',md:'space-between'}} alignItems={{md:'center'}}>
            <Text color="#526484" fontSize={15} fontWeight={700}>
              If you don’t find your question please contact our support team.
            </Text>
           
         
            <ContainedButton title="Contact Us" sx={{width:'150px'}} />
  
          </Box>
          
        </Box>
      </Grid>
    </PageContainer>
  );
};

export default Tickets;
