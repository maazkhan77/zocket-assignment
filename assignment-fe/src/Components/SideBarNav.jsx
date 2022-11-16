import { Box, Image, Flex } from "@chakra-ui/react";

const SideBarNav = () => {
  return (
    <Flex
      direction={"column"}
      wrap="no-wrap"
      justifyContent={"flex-start"}
      alignItems="center"
      height={"100vh"}
      width="82px"
      backgroundColor="#001738"
      gap={"63"}
      position={"fixed"}
      top="-5px"
      left="0"
      zIndex="9999"
    >
      <Box mt="50px" _hover={{ cursor: "pointer" }}>
        <Image src="/Assets/zocketLogo.png" />
      </Box>
      <Box display={'flex'} flexDirection='column' gap='22px' justifyContent={'center'} alignItems='center'>
        <Box _hover={{ cursor: "pointer" }}><Image src="/Assets/house.png" /></Box>
        <Box _hover={{ cursor: "pointer" }}><Image src="/Assets/sideCampaign.png" /></Box>
        <Box _hover={{ cursor: "pointer" }}><Image src="/Assets/sideCustomer.png" /></Box>
        <Box _hover={{ cursor: "pointer" }}><Image src="/Assets/sideProduct.png" /></Box>
      </Box>
    </Flex>
  );
};

export default SideBarNav;
