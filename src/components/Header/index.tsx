import {
  ArrowForwardIcon,
  BellIcon,
  ChevronDownIcon,
  HamburgerIcon,
  Icon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { MdSettings } from "react-icons/md";
import { IoIosPulse } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";

const Header = ({ DrawerHandle }: { DrawerHandle: () => void }) => {
  const [isScreenBelow991] = useMediaQuery("(max-width: 991px)");
  const { colorMode, toggleColorMode } = useColorMode();
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
    <Box
      w="100vw"
      bg="#101924"
      px={{ base: 4, md: 14 }}
      py={2}
      sx={{ borderBottom: "1px solid #203247" }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position="fixed"
      top={0}
      zIndex={10}
    >
    
      <Box>
        <img
          src="https://dashlite.net/demo4/images/logo2x.png"
          height={36}
          width={117}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box onClick={toggleColorMode} mr={4}>
       {colorMode === "light" ? <SunIcon color='white' fontSize={20}/>: <MoonIcon color='white'/>}
      </Box>
        <Menu>
          <MenuButton
            display={{ base: "none", sm: "inline-block" }}
            _focus={{ outline: "none", border: "none" }}
            _active={{ outline: "none", border: "none" }}
          >
            <Image
              src="https://dashlite.net/demo4/images/flags/english-sq.png"
              height={25}
              width={25}
              borderRadius="full"
            />
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

        {/* //second Menu */}
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            border="none"
            color="white"
            fontSize={12}
            _focus={{ outline: "none" }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <div
                style={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#798bff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CiUser fontSize={20} />
              </div>
              <Text
                display={{ base: "none", sm: "inline-block" }}
                sx={{ fontWeight: 900 }}
              >
                {" "}
                Abu Bin Ishityak <ChevronDownIcon />
              </Text>
            </Box>
          </MenuButton>
          <MenuList
            bg="#101924"
            color={"#8094AE"}
            fontSize={13}
            sx={{
              border: "1px solid #203247",
              borderTop: "4px solid #798BFF",
              py: 0,
            }}
          >
            <MenuItem
              bg="#101924"
              fontWeight={900}
              _focus={{ outline: "none", border: "none", color: "main" }}
              _hover={{ outline: "none", border: "none", color: "main" }}
              display={"flex"}
              gap={2}
            >
              <CiUser fontSize={17} /> <span>View Profile</span>
            </MenuItem>
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              _hover={{ outline: "none", border: "none", color: "main" }}
              _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <Icon as={MdSettings} /> <span>Account Setting</span>
            </MenuItem>
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              _hover={{ outline: "none", border: "none", color: "main" }}
              _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <IoIosPulse /> <span>Login Activity</span>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              _hover={{ outline: "none", border: "none", color: "main" }}
              _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <PiSignOutBold /> <span>Sign out</span>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* //notification */}

        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            border="none"
            color="white"
            fontSize={12}
            _focus={{ outline: "none" }}
          >
            <BellIcon fontSize={"20"} />
          </MenuButton>
          <MenuList
            bg="#101924"
            color={"#8094AE"}
            fontSize={13}
            width={{ base: "40vh", md: "50vh" }}
            sx={{
              border: "1px solid #203247",
              borderTop: "4px solid #798BFF",
              py: 0,
            }}
          >
            <MenuItem
              bg="#101924"
              fontWeight={900}
              // _focus={{ outline: "none", border: "none", color: "main" }}
              // _hover={{ outline: "none", border: "none", color: "main" }}
              display={"flex"}
              // borderBottom={'1px solid #e5e9f2'}
              justifyContent={"space-between"}
              gap={2}
            >
              <Text color={"#B6C6E3"}>Notifications</Text>
              <Text color={"active"} fontSize={13}>
                Mark All as Read
              </Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              // borderBottom={'1px solid #e5e9f2'}
              py={2}
              // _hover={{ outline: "none", border: "none", color: "main" }}
              // _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <Box>
                <Box
                  w={"35px"}
                  h={"35px"}
                  borderRadius={"40px"}
                  bgColor={"#393828"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <ArrowForwardIcon color="#f4bd0e" />
                </Box>
              </Box>
              <Box>
                <Text color={"#B6C6E3"} fontSize={13}>
                  Your Deposit Order is placed
                </Text>
                <Text color={"white"} fontSize={11}>
                  2 hrs ago
                </Text>
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              // borderBottom={'1px solid #e5e9f2'}
              py={2}
              // _hover={{ outline: "none", border: "none", color: "main" }}
              // _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <Box>
                <Box
                  w={"35px"}
                  h={"35px"}
                  borderRadius={"40px"}
                  bgColor={"#393828"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <ArrowForwardIcon color="#f4bd0e" />
                </Box>
              </Box>
              <Box>
                <Text color={"#B6C6E3"} fontSize={13}>
                  You have requested to Widthdrawl
                </Text>
                <Text color={"white"} fontSize={11}>
                  2 hrs ago
                </Text>
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              // borderBottom={'1px solid #e5e9f2'}
              py={2}
              // _hover={{ outline: "none", border: "none", color: "main" }}
              // _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <Box>
                <Box
                  w={"35px"}
                  h={"35px"}
                  borderRadius={"40px"}
                  bgColor={"#393828"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <ArrowForwardIcon color="#f4bd0e" />
                </Box>
              </Box>
              <Box>
                <Text color={"#B6C6E3"} fontSize={13}>
                  You have requested to Widthdrawl
                </Text>
                <Text color={"white"} fontSize={11}>
                  2 hrs ago
                </Text>
              </Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              bg="#101924"
              fontWeight={900}
              display={"flex"}
              gap={2}
              // borderBottom={'1px solid #e5e9f2'}
              py={4}
              justifyContent={"center"}
              // _hover={{ outline: "none", border: "none", color: "main" }}
              // _focus={{ outline: "none", border: "none", color: "main" }}
            >
              <Text color="active"> View All</Text>
            </MenuItem>
          </MenuList>
        </Menu>
        <HamburgerIcon
          color={"white"}
          fontSize={25}
          display={{
            base: "inline-block",
            md: isScreenBelow991 ? "inline-block" : "none",
          }}
          onClick={DrawerHandle}
        />
      </Box>
    </Box>
  );
};

export default Header;
