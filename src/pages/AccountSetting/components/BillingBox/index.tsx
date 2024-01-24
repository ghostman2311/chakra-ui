import { Box, Text } from "@chakra-ui/react";

interface IBillingBox {
  heading: string;
  title1: string;
  subTitle1?: string;
  title2?: string;
  subTitle2?: string;
  linkText: string;
}

const BillingBox = ({
  heading,
  title1,
  title2,
  subTitle1,
  subTitle2,
  linkText,
}: IBillingBox) => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      p={7}
      mt={5}
      bgColor={"specificBackground"}
      borderRadius={10}
      sx={{ border: "1px solid #203247" }}
    >
      <Box>
        <Text fontSize="1rem" fontWeight="600" color={"title"}>
          <span style={{ color: "heading" }}>{heading}</span>
        </Text>
        <Box
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 1, md: 4 }}
          sx={{ display: "flex", mt: 2 }}
        >
          <Text fontSize={14} color={"title"}>
            {title1} :
            <span style={{ color: "#B6C6E3", fontWeight: 600 }}>
              {subTitle1}
            </span>
          </Text>
          {title2 ? (
            <Text fontSize={14} color={"title"}>
             {title2}: {subTitle2}
            </Text>
          ) : null}
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={{ base: "none", md: "center" }}
        my={{ base: 4, md: 0 }}
        alignContent={"center"}
      >
        <Text color="main" fontSize="14" fontWeight="600" mt={2}>
        {linkText}
        </Text>
      </Box>
    </Box>
  );
};

export default BillingBox;
