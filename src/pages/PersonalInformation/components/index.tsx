import React, { ReactNode } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface ICommonBillingBlock {
  title: string;
  subTitle?: string;
  children?: ReactNode;
  link?:string;
}

const WrapperBlock = ({ title, subTitle, children,link }: ICommonBillingBlock) => {
  return (
    <Box mt={5} color={"heading"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Heading as="h4" size="md" color='title'>
            {title}
          </Heading>
          <Text
            color="#8094ae"
            fontSize={14}
            fontWeight="400"
            pr={1}
            sx={{ textWrap: "no-wrap" }}
            mt={1}
          >
            {subTitle}
          </Text>
        </Box>
        {link ? <Box color="active">{link}</Box> : null}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default WrapperBlock;
