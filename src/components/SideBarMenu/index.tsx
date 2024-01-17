import { Box, Text } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import React from "react";

interface ISideBarMenu {
  mt?: number;
}

const SideBarMenu = ({ mt }: ISideBarMenu) => {
  const menu = [
    {
      icon: "",
      name: "Dashboard",
    },
    {
      icon: "",
      name: "My Subscription",
    },
    {
      icon: "",
      name: "Payment History",
    },
    {
      icon: "",
      name: "Manage Team",
    },
    {
      icon: "",
      name: "Download",
    },
    {
      icon: "",
      name: "Account Setting",
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
    },
    {
      name: "Pricing",
    },
    {
      name: "Invoices",
    },
    {
      name: "Tickets",
    },
    {
      name: "Subscription Details",
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
    <Box color={"#8094AE"} mt={mt ? mt : 2} pl={{ base: 0, md: 8, lg: 14 }}>
      <Text fontSize={11} color="#B6C6E3" fontWeight={900}>
        MENU
      </Text>
      {menu.map((item, i) => {
        return (
          <Box
            key={i}
            sx={{ display: "flex", gap: 3, mt: 5, cursor: "pointer" }}
            _hover={{ color: "main" }}
          >
            <MdOutlineDashboard fontSize={25} />
            <Text fontSize={15} fontWeight={900} sx={{ textWrap: "nowrap" }}>
              {item?.name}
            </Text>
          </Box>
        );
      })}
      <Text fontSize={11} color="#B6C6E3" fontWeight={900} mt={14}>
        SEE OTHERS
      </Text>
      {seeOthers.map((item, i) => {
        return (
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
              fontWeight={item?.icon ? 900 : 400}
              sx={{ textWrap: "nowrap" }}
            >
              {item?.name}
            </Text>
          </Box>
        );
      })}
      <Text fontSize={11} color="#B6C6E3" fontWeight={900} mt={14}>
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
            <Text fontSize={15} fontWeight={900}>
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
              <Text fontSize={13} fontWeight={900}>
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
