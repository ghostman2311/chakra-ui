import { Icon } from "@chakra-ui/icon";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import OutlineButton from "../Button/Outlined";
import { ArrowBackIcon, CloseIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import ContainedButton from "../Button/Contained";
import { Switch } from "@chakra-ui/switch";

interface IPageContainer {
  header?: string;
  title: string;
  subTitle: string;
  buttonText?: string;
  icon?: boolean;
  children: ReactNode;
  backIcon?: boolean;
  isSubscription?: boolean;
  buttonIcon?: ReactNode;
}

const PageContainer = ({
  header,
  title,
  subTitle,
  buttonText,
  icon,
  children,
  backIcon,
  isSubscription,
  buttonIcon,
}: IPageContainer) => {
  return (
    <Box w="100%" bg="background" px={{ base: 4,md:20, xl: 28 }} py={12} mt={85} >
      {header ? (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          {backIcon ? <ArrowBackIcon color="#8094ae" fontSize={20} /> : null}
          <span style={{fontSize:"16",color:"#8094ae", fontWeight:"400"}}>
            {header}
          </span>
        </Box>
      ) : null}
      <Grid
        templateColumns={{
          base: "1fr",
          md: buttonText || isSubscription ? "2fr 1fr" : "1fr",
        }}
        gap={7}
        bg="background"
        color="#8094ae"
      >
        <GridItem>
          <Box>
            {title ? (
               <Heading as='h2' 
                fontSize={{ base: "20", sm: "40" }}
                fontWeight="400"
                color={"title"}
                mb={2}
              >
                {title}
              </Heading>
            ) : null}
            {subTitle ? (
              <Text
                color="#8094ae"
                fontSize={'14'}
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
              <OutlineButton title={buttonText} icon={buttonIcon} fontSize={13} />
            </Box>
          </GridItem>
        ) : null}

        {isSubscription ? (
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent={{ base: "flex-start", md: "flex-end" }}
          >
            <Box display="flex" gap={6} alignItems={"center"}>
              <Box
                display={"flex"}
                justifyContent={{ base: "none", md: "center" }}
                my={{ base: 4, md: 0 }}
                alignItems={"center"}
                gap={2}
              >
                <Switch sx={{ color: "active" }} size="lg" isChecked={true} />
                <label color="#8094ae"  style={{fontSize:'14px'}}>
                  Auto renew
                </label>
              </Box>
              <ContainedButton
                title={"Cancel Subscrition"}
                bgColor="cancelButton"
                color="red"
                fontSize={13}
                icon={<CloseIcon fontSize={10} />}
              />
            </Box>
          </GridItem>
        ) : null}
      </Grid>
      <Grid
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem>{children}</GridItem>
      </Grid>
    </Box>
  );
};

export default PageContainer;
