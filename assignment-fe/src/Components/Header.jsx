import { Flex, Box, Image, Text, Icon } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <Flex
        width={"100vw"}
        height="60px"
        justifyContent={"flex-end"}
        alignItems="center"
        gap="3"
        position="fixed"
        top="0"
        zIndex="999"
        right="0"
        boxShadow="0.2px 1px 3px rgba(0,0,0,.2)"
        bgColor='white'
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap="2"
          _hover={{ cursor: "pointer" }}
        >
          <Text fontSize={'xs'}>Free trial ends in 2days</Text>
          <Image src="/Assets/buyPremium.png" />
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="/Assets/gift.png" />
        </Box>
        <Box _hover={{ cursor: "pointer" }}>
          <Image src="/Assets/notification.png" />
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap="1"
          _hover={{ cursor: "pointer" }}
        >
          <Image src="/Assets/Avatar.png" _hover={{ cursor: "pointer" }} mr='6px'/>
          <Text fontSize={'sm'}>Mukund cake shop</Text>
          <Icon as={IoMdArrowDropdown} mt='1'/>
        </Box>
        <Box _hover={{ cursor: "pointer" }} mr='40px'>
          <Image src="/Assets/LangIcon.png" />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
