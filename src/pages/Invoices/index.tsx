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
import { GoDotFill } from "react-icons/go";
import { Box, Grid } from "@chakra-ui/layout";
import { FiDownloadCloud } from "react-icons/fi";
import { FaPrint } from "react-icons/fa6";
import OutlineButton from "../../components/Button/Outlined";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';

const Invoices = () => {
  const navigate = useNavigate();
  const invoicesData = [
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Complete",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Pending",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$200.00",
      status: "Complete",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Complete",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$120.00",
      status: "Cancelled",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Complete",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Complete",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$120.00",
      status: "Cancelled",
    },
    {
      id: "746F5K2",
      dateTime: "23 Jan 2019, 10:45pm",
      amount: "$2300.00",
      status: "Complete",
    },
  ];

  return (
    <PageContainer
      header="Order History"
      title="Invoices"
      subTitle="You can find all of your order"
      buttonText="Get Statement"
      buttonIcon={<FiDownloadCloud style={{ marginRight: "10" }} />}
    >
      <Grid
        templateColumns={{ base: "1fr" }}
        bg="background"
        color="#8094ae"
        overflow="hidden"
      >
        <TableContainer
          sx={{ border: "1px", borderColor: "borderColor" }}
          borderRadius={5}
          mt={10}
        >
          <Table variant="simple" backgroundColor={"specificBackground"}>
            <Thead>
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
                    <Box w={{ base: "30%" }}>ORDER ID</Box>
                    <Box
                      w={{ base: "70%" }}
                      display={{ base: "none", md: "inline-block" }}
                    >
                      DATE
                    </Box>
                  </Box>
                </Th>
                <Th
                  border={"none"}
                  width={"40%"}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "40%" }}>Amount</Box>
                  <Box
                    w={{ base: "60%" }}
                    display={{ base: "none", md: "inline-block" }}
                  >
                    STATUS
                  </Box>
                </Th>
                <Th width={"20%"} border={"none"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoicesData?.map((item, i) => {
                return (
                  <Tr
                    sx={{ borderTop: "1px", borderColor: "borderColor" }}
                    display={"flex"}
                    key={i}
                  >
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
                        <Box w={{ base: "30%" }} color="active" fontSize={"13"}>
                          #{item?.id}
                        </Box>
                        <Box
                          w={{ base: "70%" }}
                          fontSize={"13"}
                          color="#8094AE"
                        >
                          {item?.dateTime}
                        </Box>
                      </Box>
                    </Td>
                    <Td
                      border={"none"}
                      color="#526484"
                      width={"40%"}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      <Box
                        color={"#B6C6E3"}
                        w={{ base: "40%" }}
                        mt={{ base: 2, md: 0 }}
                        fontSize={13}
                      >
                        {item?.amount}
                      </Box>
                      <Box
                        color={
                          item.status === "Pending"
                            ? "#f4bd0e"
                            : item?.status === "Cancelled"
                            ? "red"
                            : "#1EE0AC"
                        }
                        w={{ base: "60%" }}
                        fontSize={13}
                        alignItems={"center"}
                        display={"flex"}
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
                    <Td
                      border={"none"}
                      color={"#8094AE"}
                      width={"20%"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Box display={{ base: "none", md: "inline-block" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            gap: 2,
                          }}
                        >
                          <FaPrint />

                          <OutlineButton
                            title="View"
                            fontSize={10}
                            sx={{ height: "27px" }}
                            onClick={()=>  navigate('/invoice-details')}
                          />
                        </Box>
                      </Box>
                      <ChevronRightIcon
                        display={{ base: "inline-block", md: "none" }}
                      />
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

export default Invoices;
