import { ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { CiGlobe } from 'react-icons/ci';

const Footer=()=> {
    const flagMenuData = [
        {
          key: "english",
          icon: "https://dashlite.net/demo4/images/flags/english.png",
          name: "English",
        },
        {
          key: "espanol",
          icon: "https://dashlite.net/demo4/images/flags/spanish.png",
          name: "Espanol",
        },
        {
          key: "francais",
          icon: "	https://dashlite.net/demo4/images/flags/french.png",
          name: "Francais",
        },
        {
          key: "turkce",
          icon: "https://dashlite.net/demo4/images/flags/turkey.png",
          name: "Turkce",
        },
      ];
  return (
    <Box display={"flex"} justifyContent={"space-between"} px={{ base: 4, md: 14 }}>
    <Box mb={4}>
      <Text fontSize={14} color={"#8094AE"}>
        © 2023 DashLite. Template by Softnio
      </Text>
    </Box>
    <Box mb={4} display={'flex'} gap={10}>
      <Menu>
        <MenuButton color={"#8094AE"} fontSize={14} _focus={{ outline: "none",border: "none", }} _active={{ outline: "none",border: "none", }}>
          <Text sx={{ fontWeight: 400 }}>
            English
            <ChevronUpIcon />
          </Text>
        </MenuButton>
        <MenuList
          bg="#101924"
          sx={{
            border: "1px solid #203247",
            borderTop: "4px solid #798BFF",
            py: 0,
          }}
        >
          {flagMenuData.map((item, i) => {
            return (
              <MenuItem
                key={i}
                minWidth={"1rem"}
                minH="30px"
                bg="#101924"
                borderTop={"1px solid #ecf2ff"}
                borderRadius={0}
                sx={{
                  "&:hover": {
                    _focus: { outline: "none" },
                  },
                }}
                _focus={{ outline: "none" }}
              >
                <img
                  height={16}
                  width={30}
                  src={item?.icon}
                  alt="english"
                  style={{ marginRight: "10px" }}
                />
                <span style={{ fontSize: 12, color: "#8094AE" }}>
                  {item?.name}
                </span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color='#6576ff' gap={1}>
      <CiGlobe />
      <Text fontSize={14} sx={{color:'#6576ff'}}>
       Select Region
      </Text>
      </Box>
    </Box>
  </Box>
  )
}

export default Footer