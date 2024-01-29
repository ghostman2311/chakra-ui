import { Badge, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import CommonModal from "../../../../../components/modal";
import { Radio } from "@chakra-ui/radio";
import { ReactNode } from "react";


interface Idata {
  title: string;
  subTitle: string;
  active: boolean;
  amount: string;
  amountFor: string;
}

interface ISubscription {
  modalState: string;
  data: Array<Idata>;
  onClose: () => void;
  footerData: () => ReactNode;
}

const SubscriptionModal = ({
  modalState,
  data,
  footerData,
  onClose,
}: ISubscription) => {
  return (
    <>
      <CommonModal
        open={modalState === "change"}
        paddingTop={1}
        onClose={onClose}
        footer={footerData()}
      >
        <Box textAlign={"center"}>
          <Heading as="h4" fontSize={20} color="heading" mb={1}>
            Change Subscription
          </Heading>
          <Text fontSize={14} mb={1} color="#8094AE">
            This change will become effective on Jan 14, 2020 on your account.
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={14}
        >
          <Box
            w={{ base: "73%", sm: "40%", md: "30%" }}
            sx={{
              border: "1px",
              borderColor: "borderColor",
              borderRadius: "20",
              display: "flex",
            }}
            h={"40px"}
            p={1}
          >
            <Box
              h="full"
              w="50%"
              borderRadius={20}
              backgroundColor={"active"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={12}
              color="title"
              fontWeight={700}
            >
              YEARLY
            </Box>
            <Box
              h="full"
              w="50%"
              borderRadius={20}
              // backgroundColor={"active"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={12}
              color="title"
              fontWeight={700}
            >
              MONTHLY
            </Box>
          </Box>
        </Box>
        {data?.map((item, i) => {
          return (
            <Grid
              key={i}
              templateColumns={{ base: "1fr", md: "3.5fr 1.5fr" }}
              bg="specificBackground"
              color="#8094ae"
              mt={6}
              borderRadius={4}
              overflow="hidden"
              sx={{
                border: "1px",
                borderColor: item?.active ? "active" : "borderColor",
              }}
            >
              <GridItem
                py={{ base: 4, md: 6 }}
                px={{ base: 4 }}
                bgColor={"specificBackground"}
              >
                <Box
                  display={"flex"}
                  gap={4}
                  justifyContent={{ base: "space-between", md: "start" }}
                  flexDirection={{ base: "row-reverse", md: "row" }}
                >
                  <Box display={"flex"}>
                    <Radio size="lg" color="active" isChecked={item?.active} />
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", gap: 3 }}>
                      <Text fontSize={18} color="title" fontWeight={700}>
                        {item?.title}
                      </Text>
                      {item?.active && (
                        <Badge
                          bgColor="active"
                          color="white"
                          borderRadius={13}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          textTransform={"capitalize"}
                        >
                          Current
                        </Badge>
                      )}
                    </Box>
                    <Text color="#8094ae" fontSize="14" fontWeight="400" mt={1}>
                      {item?.subTitle}
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
                py={{ base: 4, md: 6 }}
                px={{ base: 4 }}
                // borderLeft={{ md: "1px " }}
                // borderTop={{ base: "1px ", md: "none" }}
                // borderColor={'borderColor'}
              >
                <Text
                  color="#8094ae"
                  fontSize="1.7rem"
                  fontWeight="600"
                  textAlign={"center"}
                >
                  {item?.amount}
                </Text>

                <Text
                  color="#8094ae"
                  fontSize="13"
                  fontWeight="700"
                  textAlign={"center"}
                >
                  {item?.amountFor}
                </Text>
              </GridItem>
            </Grid>
          );
        })}
      </CommonModal>
    </>
  );
};

export default SubscriptionModal;
