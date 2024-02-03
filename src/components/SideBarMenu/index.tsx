import { Box, Text } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import "@fontsource/nunito-sans";

interface ISideBarMenu {
  mt?: number;
}

const SideBarMenu = ({ mt }: ISideBarMenu) => {
  const menu = [
    {
      icon: "",
      name: "Dashboard",
      navigateTo:'/'
    },
    {
      icon: "",
      name: "My Subscription",
      navigateTo:'subscriptions'
    },
    {
      icon: "",
      name: "Payment History",
      navigateTo:'payment'
    },
    {
      icon: "",
      name: "Manage Team",
      navigateTo:'manage-team'
    },
    {
      icon: "",
      name: "Download",
      navigateTo:'downloads'
    },
    {
      icon: "",
      name: "Account Setting",
      navigateTo:'settings'
    },
  ];

  const returnTo = [
    {
      icon: "",
      name: "Main Dashboard",
    },
    {
      icon: "",
      name: "All Components",
    },
  ];

  const seeOthers = [
    {
      icon: "here",
      name: "Pre-Built Pages",
      navigateTo:'settings'
    },
    {
      name: "Pricing",
      navigateTo:'pricing'
    },
    {
      name: "Invoices",
      navigateTo:'invoices'
    },
    {
      name: "Tickets",
      navigateTo:'tickets'
    },
    {
      name: "Subscription Details",
      navigateTo:'subscriptions-detail'
    },
  ];

  const others = [
    {
      name: "Help Center",
    },
    {
      name: "FAQs",
    },
    {
      name: "Contact",
    },
    {
      name: "Support",
      
    },
  ];

  return (
    <Box color={"#8094AE"} mt={mt ? mt : 2} pl={{ base: 0, md: 8, xl: 28 }} >

      <Text fontSize={11} color="#B6C6E3" fontWeight={700}>
        MENU
      </Text>
      {menu.map((item, i) => {
        return (
          <Link key={i} to={item.navigateTo || '/'}>
          <Box
            key={i}
            sx={{ display: "flex", gap: 3, mt: 5, cursor: "pointer" }}
            _hover={{ color: "main" }}
          >
            <MdOutlineDashboard fontSize={25} />
            <Text
              fontSize={15}
              fontWeight={700}
              sx={{ textWrap: "nowrap", letterSpacing: ".01em" }}
              fontFamily={'heading'}
            >
              {item?.name}
            </Text>
          </Box>
          </Link>
        );
      })}
      <Text fontSize={11} color="#B6C6E3" fontWeight={700} mt={14} fontFamily={'heading'}>
        SEE OTHERS
      </Text>
      {seeOthers.map((item, i) => {
        return (
          <Link key={i} to={item.navigateTo || '/'}>
          <Box
            key={i}
            sx={{ display: "flex", gap: 3, mt: 5, cursor: "pointer" }}
            _hover={{ color: "main" }}
          >
            {item?.icon ? (
              <MdOutlineDashboard fontSize={25} />
            ) : (
              <Box height={25} width={25}></Box>
            )}
            <Text
              fontSize={!item?.icon ? 14 : 15}
              fontWeight={item?.icon ? 700 : 400}
              sx={{ textWrap: "nowrap" }}
              fontFamily={'heading'}
            >
              {item?.name}
            </Text>
          </Box>
          </Link>
        );
      })}
      <Text fontSize={11} color="#B6C6E3" fontWeight={700} mt={14} fontFamily={'heading'}>
        RETURN TO
      </Text>
      {returnTo.map((item, i) => {
        return (
          <Box
            key={i}
            sx={{ display: "flex", gap: 3, mt: 5, cursor: "pointer" }}
            _hover={{ color: "main" }}
          >
            <MdOutlineDashboard fontSize={25} />
            <Text fontSize={15} fontWeight={700} fontFamily={'heading'}>
              {item?.name}
            </Text>
          </Box>
        );
      })}
      <Box mt={20}>
        {others.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{ display: "flex", gap: 3, mt: 3, cursor: "pointer" }}
              _hover={{ color: "main" }}
            >
              <Text fontSize={13} fontWeight={700} fontFamily={'heading'}>
                {item?.name}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBarMenu;
