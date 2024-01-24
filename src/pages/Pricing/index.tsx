import PageContainer from "../../components/PageContainer";
import PlanBlock from "./components/planBlock";
import { Grid } from "@chakra-ui/layout";
import Support from "../../components/Support";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const Pricing = () => {
  return (
    <PageContainer
      header="Pricing"
      title="Choose Suitable Plan"
      subTitle="You can change your plan any time by upgrade your plan"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={7}
        bg="background"
        color="#8094ae"
        mt={7}
        overflow="hidden"
      >
        <PlanBlock
          img="https://dashlite.net/demo4/images/icons/plan-s1.svg"
          level="Starter"
          subTitle="If you are a small business amn please select this plan"
          amount="$99 /yr"
          userText="1 User, Billed Yearly"
          buttonText="Select Plan"
        />
        <PlanBlock
          img="https://dashlite.net/demo4/images/icons/plan-s2.svg"
          level="Pro"
          subTitle="If you are a small business amn please select this plan"
          amount="$299 /yr"
          userText="5 User, Billed Yearly"
          buttonText="Select Plan"
        />
        <PlanBlock
          img="https://dashlite.net/demo4/images/icons/plan-s3.svg"
          level="Enterprise"
          subTitle="If you are a small business amn please select this plan"
          amount="$599 /yr"
          userText="20 User, Billed Yearly"
          buttonText="Select Plan"
        />
      </Grid>
      <Grid
        templateColumns={{ base: "1fr"}}
        color="#8094ae"
        overflow="hidden"
      >
      <TableContainer border= "1px solid #203247" borderRadius={5} mt={10}>
        <Table size="sm">
          <Thead backgroundColor={'header'} borderBottom={"1px solid #203247"}>
            <Tr border={'none'} height={39}>
              <Th  border={'none'} color={'heading'} width={'56%'}>FEATURES</Th>
              <Th  border={'none'} color={'heading'}>STARTER</Th>
              <Th  border={'none'} color={'heading'}>PRO</Th>
              <Th  border={'none'} color={'heading'}>ENTERPRISE</Th>
            </Tr>
          </Thead>
          <Tbody  border={'none'} py={6}>
            <Tr  border={'none'} height={37}>
              <Td  border={'none'} color={'#526484'} fontSize={14} fontWeight={600} width={'60%'}>Alias record</Td>
              <Td  border={'none'} color='active'><CloseIcon/></Td>
              <Td  border={'none'} color='active'><CheckIcon/></Td>
              <Td  border={'none'} color='active'><CloseIcon/></Td>
            </Tr>
    
            <Tr  border={'none'} height={37}>
              <Td  border={'none'} color={'#526484'} fontSize={14} fontWeight={600}>Anycast DNS</Td>
              <Td  border={'none'} color='active'><CheckIcon/></Td>
              <Td  border={'none'} color='active'><CloseIcon/></Td>
              <Td  border={'none'} color='active'><CheckIcon/></Td>
            </Tr>
      
            <Tr  border={'none'} height={37}>
              <Td  border={'none'} color={'#526484'} fontSize={14} fontWeight={600} >Full API access</Td>
              <Td  border={'none'} color='active'><CloseIcon/></Td>
              <Td  border={'none'} color='active'><CheckIcon/></Td>
              <Td  border={'none'} color='active'><CloseIcon/></Td>
            </Tr>
            <Tr  border={'none'} height={37}>
              <Td border={'none'} color={'#526484'} fontSize={14} fontWeight={600}>Multiple-layered DoS defense</Td>
              <Td  border={'none'} color='active'><CheckIcon/></Td>
              <Td  border={'none'} color='active'><CloseIcon/></Td>
              <Td  border={'none'} color='active'><CheckIcon/></Td>
            </Tr>

          </Tbody>
        </Table>
      </TableContainer>
      </Grid>
      <Support />
    </PageContainer>
  );
};

export default Pricing;
