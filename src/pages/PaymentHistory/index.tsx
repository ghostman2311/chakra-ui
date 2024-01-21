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
import { FaFileInvoice } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Box, Grid } from "@chakra-ui/layout";

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
      <TableContainer border="1px solid #203247" borderRadius={5} mt={10}>
        <Table variant="simple" backgroundColor={"#18212d"}>
          <Thead borderBottom={"1px solid #203247"}>
            <Tr height={"40px"} border={"none"} display={"flex"}>
              <Th border={"none"} width={"7%"}>
                #
              </Th>
              <Th
                border={"none"}
                width={"70%"}
                sx={{ display: "flex", justifyContent: "space-between" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box w={{ base: "60%" }}>BILL FOR</Box>
                <Box
                  display={"flex"}
                  w={{ base: "40%" }}
                  justifyContent={"space-between"}
                >
                  <Box
                    w={{ base: "50%" }}
                    display={{ base: "none", md: "inline-block" }}
                  >
                    ISSUE DATE
                  </Box>
                  <Box
                    w={{ base: "50%" }}
                    display={{ base: "none", md: "inline-block" }}
                  >
                    DUE DATE
                  </Box>
                </Box>
              </Th>
              <Th
                border={"none"}
                width={"23%"}
                sx={{ display: "flex", justifyContent: "space-between" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Box w={{ base: "50%" }}>TOTAL</Box>
                <Box
                  w={{ base: "50%" }}
                  display={{ base: "none", md: "inline-block" }}
                >
                  STATUS
                </Box>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {paymentHistoryColumnData?.map((item, i) => {
              return (
                <Tr border={"1px solid #203247"} display={"flex"} key={i}>
                  <Td
                    border={"none"}
                    color={"active"}
                    fontWeight={600}
                    width={"7%"}
                  >
                    {item?.id}
                  </Td>
                  <Td
                    border={"none"}
                    color="#526484"
                    width={"70%"}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Box w={{ base: "60%" }}>{item?.billFor}</Box>
                    <Box
                      display={"flex"}
                      mt={{ base: 2, md: 0 }}
                      w={{ base: "40%" }}
                      gap={{base:4,md:0}}
                      justifyContent={"space-between"}
                    >
                      <Box color={"#8094AE"} w={{ base: "50%" }} fontSize={13}>
                        {item?.issueDate}
                      </Box>
                      <Box color={"#8094AE"} w={{ base: "50%" }} fontSize={13}>
                        {item?.dueDate}
                      </Box>
                    </Box>
                  </Td>
                  <Td
                    border={"none"}
                    color={"#8094AE"}
                    width={"23%"}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Box color={"#B6C6E3"} w={{ base: "50%" }}>
                      {item?.amount}
                    </Box>
                    <Box
                      color={
                        item.status === "Due"
                          ? "#f4bd0e"
                          : item?.status === "Cancel"
                          ? "red"
                          : "#1EE0AC"
                      }
                      display={"flex"}
                      w={{ base: "50%" }}
                      mt={{ base: 2, md: 0 }}
                    >
                      <GoDotFill
                        color={
                          item.status === "Due"
                            ? "#f4bd0e"
                            : item?.status === "Cancel"
                            ? "red"
                            : "#1EE0AC"
                        }
                      />
                      {item?.status}
                    </Box>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      </Grid>
    </PageContainer>
  );
};

export default PaymentHistory;
