import {
  Box,
  Grid,
  GridItem,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import PageContainer from "../../components/PageContainer";
import { FaPrint } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const InvoiceDetail = () => {
  const { colorMode } = useColorMode();
  const invoiceData = [
    {
      itemId: 24108054,
      description: "Dashlite - Conceptual App Dashboard - Regular License",
      price: "	$40.00",
      qty: 5,
      amount: "$200.00",
    },
    {
      itemId: 24108054,
      description: "Dashlite - Conceptual App Dashboard - Regular License",
      price: "	$40.00",
      qty: 5,
      amount: "$200.00",
    },
    {
      itemId: 24108054,
      description: "Dashlite - Conceptual App Dashboard - Regular License",
      price: "	$40.00",
      qty: 5,
      amount: "$200.00",
    },
    {
      itemId: 24108054,
      description: "Dashlite - Conceptual App Dashboard - Regular License",
      price: "	$40.00",
      qty: 5,
      amount: "$200.00",
    },
  ];

  return (
    <PageContainer
      header="Invoices"
      title="Invoice #746F5K2"
      subTitle="Your invoice details are given bellow."
      backIcon={true}
    >
      <Grid
        templateColumns={{ base: "1fr" }}
        bg="specificBackground"
        color="#8094ae"
        mt={12}
        borderRadius={4}
        sx={{ border: "1px", borderColor: "borderColor" }}
      >
        <GridItem py={{ base: 4 }} bgColor={"specificBackground"} px={5}>
          <Box display={"flex"} h={{ base: "auto", md: "80px" }}>
            <Box
              w={{ base: "80%" }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {colorMode === "dark" ? (
                <img
                  src="https://dashlite.net/demo4/images/logo2x.png"
                  height={36}
                  width={117}
                />
              ) : (
                <img
                  src="https://dashlite.net/demo4/images/logo-dark2x.png"
                  height={36}
                  width={117}
                />
              )}
            </Box>
            <Box w={{ base: "20%" }} display={"flex"} justifyContent={"end"}>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid ",
                  borderColor: "borderColor",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaPrint fontSize={24} color="#6576FF" />
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem py={{ base: 4 }} bgColor={"specificBackground"} px={10}>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: 5, md: 0 }}
            justifyContent={"space-between"}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#B6C6E3",
                  fontWeight: "600",
                  letterSpacing:'.2em'
                }}
              >
                INVOICE TO
              </span>
              <Heading as="h4" fontSize={"20px"} color={"title"}>
                Gregory Anderson
              </Heading>
              <Box display={"flex"} gap="2" mt={3}>
                <CiLocationOn color="#6576FF" />
                <Text fontSize={"14"} color="#8094AE">
                  House #65, 4328 Marion Street <br />
                  Newbury, VT 05051
                </Text>
              </Box>
              <Box display={"flex"} gap="2" mt={3}>
                <FaPhoneAlt color="#6576FF" />
                <Text fontSize={"14"} color="#8094AE">
                  +012 8764 556
                </Text>
              </Box>
            </Box>
            <Box>
              <Heading as="h3" fontSize={{ base: 24, md: 32 }} color={"active"}>
                INVOICE
              </Heading>
              <Box mt={3}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#8094ae",
                  }}
                >
                  INVOICE ID &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#526484",
                  }}
                >
                  66K5W3
                </span>
              </Box>
              <Box mt={3}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#8094ae",
                  }}
                >
                  DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#526484",
                  }}
                >
                  26 Jan, 2020
                </span>
              </Box>
            </Box>
          </Box>

          <Grid overflow="hidden">
            <TableContainer mt={6}>
              <Table variant="simple" display={"scroll"}>
                <Thead border={"none"}>
                  <Tr
                    height={"40px"}
                    border={"none"}
                    display={"flex"}
                    sx={{ borderBottom: "1px", borderColor: "borderColor" }}
                  >
                    <Th
                      border={"none"}
                      width={"10%"}
                      color={"active"}
                      fontWeight={600}
                      fontSize={"12"}
                    >
                      ITEM ID
                    </Th>
                    <Th
                      border={"none"}
                      width={"60%"}
                      color={"active"}
                      fontWeight={600}
                      fontSize={"12"}
                    >
                      DESCRIPTION
                    </Th>
                    <Th
                      border={"none"}
                      width={"10%"}
                      color={"active"}
                      fontWeight={600}
                      fontSize={"12"}
                    >
                      PRICE
                    </Th>
                    <Th
                      border={"none"}
                      width={"10%"}
                      color={"active"}
                      fontWeight={600}
                      fontSize={"12"}
                    >
                      QTY
                    </Th>
                    <Th
                      border={"none"}
                      width={"10%"}
                      color={"active"}
                      fontWeight={600}
                      fontSize={"12"}
                    >
                      AMOUNT
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {invoiceData?.map((item, i) => {
                    return (
                      <Tr
                        sx={{ borderBottom: "1px", borderColor: "borderColor" }}
                        display={"flex"}
                        key={i}
                      
                      >
                        <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                          {item?.itemId}
                        </Td>
                        <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"60%"}>
                          {item?.description}
                        </Td>
                        <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                          {item?.price}
                        </Td>
                        <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                          {item?.qty}
                        </Td>
                        <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                          {item?.amount}
                        </Td>
                      </Tr>
                    );
                  })}

                  <Tr display={"flex"}>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={"14"} width={"60%"}></Td>
                    <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                      Subtotal
                    </Td>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                      $435.00
                    </Td>
                  </Tr>
                  <Tr display={"flex"}>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={"14"} width={"60%"}></Td>
                    <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"} pt="0px">
                      Processing fee
                    </Td>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"} pt="0px">
                      $10.00
                    </Td>
                  </Tr>
                  <Tr display={"flex"}>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={"14"} width={"60%"}></Td>
                    <Td
                      sx={{ borderBottom: "1px", borderColor: "borderColor" }}
                      fontSize={{base:'12',md:"14"}}
                      width={"10%"}
                      pt="0px"
                      pb="0px"
                    >
                      TAX
                    </Td>
                    <Td
                      sx={{ borderBottom: "1px", borderColor: "borderColor" }}
                      fontSize={"14"}
                      width={"10%"}
                      pb="0px"
                    ></Td>
                    <Td
                      sx={{ borderBottom: "1px", borderColor: "borderColor" }}
                      fontSize={{base:'12',md:"14"}}
                      width={"10%"}
                      pt="0px"
                      pb="0px"
                    >
                      $43.50
                    </Td>
                  </Tr>
                  <Tr display={"flex"}>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={"14"} width={"60%"}></Td>
                    <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                      Grand Total
                    </Td>
                    <Td border={"none"} fontSize={"14"} width={"10%"}></Td>
                    <Td border={"none"} fontSize={{base:'12',md:"14"}} width={"10%"}>
                      $478.50
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Grid>

          <Text fontSize={12} color={"heading"} fontStyle={"italic"}>
            Invoice was created on a computer and is valid without the signature
            and seal.
          </Text>
        </GridItem>
      </Grid>
    </PageContainer>
  );
};

export default InvoiceDetail;
