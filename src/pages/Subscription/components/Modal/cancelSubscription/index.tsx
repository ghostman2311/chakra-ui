import CommonModal from "../../../../../components/modal";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import ContainedButton from "../../../../../components/Button/Contained";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useState } from "react";
import ChangePlanModal from "../changePlanModal";
interface ICancelSubscription {
  open: boolean;
  onClose: () => void;
}

const CancelSubscription = ({ open, onClose }: ICancelSubscription) => {
  const [saveCancelSubscription, setSaveCancelSubscription] = useState(false);
  const ChangePlanModalData = {
    for: "cancel Plan",
    title: "Successfully Cancelled",
    subtitle:
      "It will effect at the end of your current billing cycle on 01 Feb 2020. We sent you a confirmation email (this may take up to 3 hours to receive).",
    footerInstruction: "You can easily re-subscription your favourite plan any time.",
  };
  return (
    <>
      <CommonModal
        open={open}
        paddingTop={1}
        onClose={onClose}
        footer={
          <Box
            display={"flex"}
            flexDirection={{ base: "column", sm: "row" }}
            gap={{ base: 4, sm: 0 }}
            justifyContent={{ base: "center", sm: "start" }}
            alignItems={{ base: "center", sm: "start" }}
            w="100%"
          >
            <ContainedButton
              title="Cancel Subscription"
              fontSize={13}
              onClick={() => setSaveCancelSubscription(true)}
            />
            <Button
              onClick={onClose}
              color="#e85347"
              backgroundColor={"#3d2a32"}
              fontSize={13}
              marginLeft={{ base: 0, sm: 8 }}
            >
              Never mind, don't cancel
            </Button>
          </Box>
        }
      >
        <Box>
          <Heading as="h4" fontSize={20} color="heading" mb={1}>
            Cancel Your Subscription
          </Heading>
          <Text fontSize={14} mb={4} color="#B6C6E3" mt={5}>
            Are you sure you want to cancel your subscription?
          </Text>
          <Text fontSize={14} mb={4} color="#B6C6E3" mt={5}>
            If you cancel, you'll lose your all demand. But you can
            re-subscription your favourite plan any time.
          </Text>
          <FormControl>
            <FormLabel fontSize={14} fontWeight={600}>
              Enter your password to confirm cancellation
            </FormLabel>
            <Input
              type="password"
              placeholder="*******"
              sx={{ border: "1px", borderColor: "borderColor" }}
            />
            <Text
              fontSize={12}
              mb={4}
              color="#8094AE"
              mt={2}
              fontStyle={"italic"}
            >
              You'll receieve confirmation email once successfully cancel your
              plan.
            </Text>
          </FormControl>
        </Box>
      </CommonModal>
      {saveCancelSubscription && (
        <ChangePlanModal
          open={saveCancelSubscription}
          onClose={() => setSaveCancelSubscription(false)}
          onBackModalClose={onClose}
          data={ChangePlanModalData}
        />
      )}
    </>
  );
};

export default CancelSubscription;
