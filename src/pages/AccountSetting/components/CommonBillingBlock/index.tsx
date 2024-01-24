import React, { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface ICommonBillingBlock {
  title: string;
  subTitle?: string;
  children?: ReactNode;
}

const CommonBillingBlock = ({
  title,
  subTitle,
  children,
}: ICommonBillingBlock) => {
  return (
    <Box mt={9} color={'title'}>
      <Heading as="h4" size="md" sx={{color:'title'}}>
     {title}
      </Heading>
      <Text
        color="#8094ae"
        fontSize={{ md: 14, lg: "16" }}
        fontWeight="400"
        pr={1}
        sx={{ textWrap: "no-wrap" }}
        mt={1}
      >
       { subTitle}
      </Text>
      <Box>{children}</Box>
    </Box>
  );
};

export default CommonBillingBlock;
