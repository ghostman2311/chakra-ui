import { Box, Heading, Text } from "@chakra-ui/layout";
import CommonModal from "../../../../../components/modal";
import { Button } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";

interface IData {
  for: string;
  title: string;
  subtitle: string;
  footerInstruction: string;
}

interface IChangePlanModal {
  open: boolean;
  onClose: () => void;
  onBackModalClose: () => void;
  data: IData;
}
const ChangePlanModal = ({
  open,
  onClose,
  onBackModalClose,
  data,
}: IChangePlanModal) => {
  //   useEffect(() => {
  //     onBackModalClose();
  //   }, [open]);
  return (
    <CommonModal
      open={open}
      paddingTop={1}
      onClose={onClose}
      footer={
        <Box textAlign={"center"} w={"100%"}>
          <Text fontSize={14} mb={1} color="#B6C6E3">
            {data?.footerInstruction}
            {data?.for === "change Plan" ? (
              <span style={{ color: "#798BFF" }}>Invite friends</span>
            ) : null}
          </Text>
        </Box>
      }
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        borderBottom={"1px"}
        borderColor={"borderColor"}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "64%",
            backgroundColor: "#1EE0AC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <CheckIcon fontSize={40} />
        </div>
        <Heading as="h4" fontSize={20} color="heading" mb={1}>
          {data?.title}
        </Heading>
        <Text fontSize={14} mb={4} color="#B6C6E3" mt={5} px={6}>
          {data?.subtitle}
        </Text>
        <Text fontSize={12} color="#8094AE" pb={16}>
          <span style={{ color: "#798BFF" }}> Click here </span>to learn more
          about subscription plan.
        </Text>

        <Button
          color={"#E5E9F2"}
          bgColor={"#344357"}
          fontSize={13}
          width={"25%"}
          mb={10}
          onClick={onClose}
        >
          {" "}
          Return
        </Button>
      </Box>
    </CommonModal>
  );
};

export default ChangePlanModal;
