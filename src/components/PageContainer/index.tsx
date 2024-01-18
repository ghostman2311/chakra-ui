import { Icon } from "@chakra-ui/icon";
import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import OutlineButton from "../Button/Outlined";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
interface IPageContainer {
  header?: string;
  title: string;
  subTitle: string;
  buttonText?: string;
  icon?: boolean;
  children:ReactNode;
}

const PageContainer = ({
  header,
  title,
  subTitle,
  buttonText,
  icon,
  children
}: IPageContainer) => {
  return (
    <Box w="100%" bg="#101924" px={{ base: 4, md: 14 }} py={12} mt={50}>
      {header ? (
        <Text color="#8094ae" fontSize="1.4rem" fontWeight="400">
          {header}
        </Text>
      ) : null}
      <Grid
        templateColumns={{ base: "1fr", md: buttonText?"2fr 1fr":'1fr' }}
        gap={7}
        bg="#101924"
        color="#8094ae"
      >
        <GridItem>
          <Box>
            {title ? (
              <Text
                fontSize={{ base: "20", sm: "40" }}
                fontWeight="400"
                color={"white"}
              >
                {title}
              </Text>
            ) : null}
            {subTitle ? (
              <Text
                color="#8094ae"
                fontSize={{ md: 14, lg: "16" }}
                fontWeight="400"
                pr={1}
                sx={{ textWrap: "no-wrap" }}
              >
                {subTitle}

                {icon ? (
                  <Icon
                    as={InfoOutlineIcon}
                    boxSize={4}
                    mr={2}
                    color={"#798BFF"}
                  />
                ) : null}
              </Text>
            ) : null}
          </Box>
        </GridItem>
        {buttonText ? (
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            <Box>
              <OutlineButton title={buttonText} />
            </Box>
          </GridItem>
        ) : null}

      </Grid>
      {children}
    </Box>
  );
};

export default PageContainer;
