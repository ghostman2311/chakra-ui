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
  import { Box, Grid, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Select } from "@chakra-ui/select";
  
  const ManageTeam = () => {
    const manageTeamData = [
      {
       name:'Abu Bin Ishityak',
       email:'info@softnio.com',
       permission:'Owner',
       role:'All',
      },
      {
        name:'Joseph Figueroa',
        email:'joseffig@gmail.com',
        permission:'Member',
        role:'',
      },
      {
        name:'Stephen Barber',
        email:'stephenbarber@gmail.comr',
        permission:'Member',
        role:'',
      },
      {
        name:'Heriberto Patterson',
        email:'heribertopetterson@gmail.com',
        permission:'Member',
        role:'',
      },
      {
        name:'Arturo Blain',
        email:'arturoblain@gmail.com',
        permission:'Member',
        role:'',
      },
      {
        name:'Joseph Figueroa',
        email:'joseffig@gmail.com',
        permission:'Admin',
        role:'',
      },

      {
        name:'Stephen Barber',
        email:'stephenbarber@gmail.com',
        permission:'Member',
        role:'',
      },
      {
        name:'Heriberto Patterson',
        email:'heribertopetterson@gmail.com',
        permission:'Manager',
        role:'',
      },

      {
        name:'Arturo Blain',
        email:'arturoblain@gmail.com',
        permission:'Member',
        role:'',
      },

    ];
  
    return (
      <PageContainer
      header="Team Members"
      title="Team Manage"
      subTitle="You can add and remove team member as you want."
      buttonText="Invite New Member"  
    >
       <Grid
        templateColumns={{ base: "1fr"}}
        bg="background"
        color="#8094ae"
        overflow="hidden"
      >
      <TableContainer border="1px solid #203247" borderRadius={5} mt={10}>
        <Table variant="simple" backgroundColor={"specificBackground"}>
          <Thead borderBottom={"1px solid #203247"} bgColor={'header'} >
            <Tr height={"40px"} border={"none"} display={"flex"}>
              <Th border={"none"} width={{base:'80%',md:"40%"}}  color='#B6C6E3'>
              TEAM MEMBER
              </Th>
              <Th
                border={"none"}
                width={{base:'40%',md:"25%"}} 
                color='#B6C6E3'
                display={{base:'none',md:'inline-block'}}

              >
                	PERMISSION
              </Th>
              <Th
                border={"none"}
                width={"20%"}
                color='#B6C6E3'
                display={{base:'none',md:'inline-block'}}
              >
               	ROLE
              </Th>
              <Th
                border={"none"}
                width={{base:'20%',md:"15%"}} 
              
                color='#B6C6E3'
              >
               ACTION
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {manageTeamData?.map((item, i) => {
              return (
                <Tr borderBottom={"1px solid #203247"} display={"flex"} key={i}>
                  <Td
                   border={"none"}
                   width={{base:'80%',md:"40%"}} 
                   fontSize={'14px'}
                   display={'flex'}
                   gap={4}
                   alignItems={'center'}
                  >
                   <Avatar name={item?.name} src='https://bit.ly/broken-link' />
                   <Box>
                    <Text color='white' fontWeight={600}>{item?.name}</Text>
                    <Text fontSize={12} color='#8094AE'>{item?.email}</Text>
                   </Box>
                  </Td>
                  <Td
                    border={"none"}
                    width={{base:'40%',md:"25%"}} 
                    fontSize={14}
                    color='#526484'
                    display={{base:'none',md:'inline-block'}}
                  >
                   {item?.permission}
                  </Td>
                  <Td
                border={"none"}
                width={"20%"}
                fontSize={14}
                display={{base:'none',md:'inline-block'}}
                  >
                    {item?.role==='All'?item?.role:
                    <Select  bg='none'  borderColor='#203247' fontSize={13}>
                    <option value='option1'>Super Admin</option>
                    <option value='option2'>Admin</option>
                    <option value='option3'>Manager</option>
                  </Select>
                    }
                  </Td>
                  <Td
                border={"none"}
              
                width={{base:'20%',md:"15%"}} 
              
                fontWeight={600}
                display={'flex'}
                gap={5}
                  >
          
              <Text color='#798BFF'  fontSize={12} display={{base:'none',md:'inline-block'}}>Edit</Text>
              <Text  color='#E85347' fontSize={12} display={{base:'none',md:'inline-block'}}>Remove</Text>
             <Box display={{base:'inline-block',md:'none'}}> <BsThreeDotsVertical/></Box>
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
  
  export default ManageTeam;
  