import {
  Flex,
  Box,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Icon,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCampaign } from "../actions/campaignActions";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { ChevronDownIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";

const CampaignListScreen = () => {
  const dispatch = useDispatch();
  const campaignList = useSelector((state) => state.campaignList);
  const { loading, error, campaigns } = campaignList;

  useEffect(() => {
    dispatch(listCampaign());
  }, []);
  return (
    <>
      <Flex
        height="100vh"
        width="1350px"
        ml="40px"
        direction="column"
        mt="40px"
      >
        <Box
          height="60px"
          width="auto"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box mt="0px">
            <Text as="h2" lineHeight="30px" fontSize={"2xl"} fontWeight="bold">
              Your Campaigns
            </Text>
            <Text lineHeight="15px">
              check the list of campaigns you created
            </Text>
          </Box>
          <Box height="50px" mb="10px">
            <Button
              leftIcon={<AiOutlinePlusCircle color="white" />}
              bgColor="#0F6EFF"
              padding="10px"
              paddingBottom={"25px"}
              pt="25px"
              borderRadius="9px"
              color="white"
              _hover={{ bgColor: "blue" }}
              fontSize="16px"
            >
              Create new campaign
            </Button>
          </Box>
        </Box>
        <Box
          height="100vh"
          width="full"
          border="0.5px solid rgba(0,0,0,.2)"
          boxShadow={" 1px 1px rgba(0,0,0,.2)"}
          borderRadius="10px"
          bgColor={"white"}
          padding="20px 32px"
        >
          <Box
            height="60px"
            width={"full"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Box>
              <InputGroup height={"50px"} width="315px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<RiSearch2Line color="gray" size="30px" />}
                  size="lg"
                />
                <Input
                  variant="outline"
                  size="lg"
                  placeholder={`search for the campaign`}
                  // paddingLeft="40px"
                  // paddingRight={"20px"}
                  fontSize={"15px"}
                  borderRadius="10px"
                  border="1.5px solid #E9E9E9"
                />
              </InputGroup>
            </Box>
            <Box display={"flex"} gap="4">
              <Box>
                <Menu>
                  {"platform:"}

                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    ml="2"
                    bgColor={"white"}
                    border="1px solid #E9E9E9"
                  >
                    All platform
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Facebook</MenuItem>
                    <MenuItem>Google</MenuItem>
                    <MenuItem>Youtube</MenuItem>
                    <MenuItem>Instagram</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  {"status: "}

                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bgColor={"white"}
                    border="1px solid #E9E9E9"
                    ml="2"
                  >
                    All status
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Live Now</MenuItem>
                    <MenuItem>Paused</MenuItem>
                    <MenuItem>Exhausted</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    ml="2"
                    bgColor={"white"}
                    border="1px solid #E9E9E9"
                  >
                    Last 30days
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Last 10days</MenuItem>
                    <MenuItem>Last 60days</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Box>
          <Box bgColor="white" rounded="lg" shadow="lg" px="5" py="5">
            <Table variant="simple" size="sm">
              <Thead>
                <Tr background="#F8F8F8">
                  <Th>
                    <Input type="checkbox" size="xs" />
                  </Th>
                  <Th>On/off</Th>
                  <Th>Campaign</Th>
                  <Th>Date range</Th>
                  <Th>Clicks</Th>
                  <Th>Budget</Th>
                  <Th>Location</Th>
                  <Th>Platform</Th>
                  <Th>status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr key={""}>
                  <Td>
                    <Input type="checkbox" size="xs" />
                  </Td>
                  <Td>
                    <Switch size="md" id="" />
                  </Td>
                  <Td>
                    <Flex alignItems={'center'} gap='2.5'>
                      <Image src="/Assets/campaign1.png" />
                      <Box >
                        <Text fontSize={'md'} >Blueberry cake campaign</Text>
                        <Text fontSize={'xs'} mt='1'>created on 14 july</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>25 jul 2020 - 01 Aug 2020</Td>
                  <Td>300</Td>
                  <Td>INR 3,400</Td>
                  <Td>Chennai</Td>
                  <Td><Flex justifyContent={'center'}><Image src='/Assets/fb.png' /></Flex></Td>
                  <Td><Image src='/Assets/liveNow.png' /></Td>
                  <Td>
                    <Flex alignItems="center" >
                      <Button  to={``} background={'transparent'}size='xs'>
                        <Image src='/Assets/edit-2.png' />
                      </Button>
                      <Button background={'transparent'}size='xs'>
                      <Image src='/Assets/trash.png' />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr key={""}>
                  <Td>
                    <Input type="checkbox" size="xs" />
                  </Td>
                  <Td>
                    <Switch size="md" id="" />
                  </Td>
                  <Td>
                    <Flex alignItems={'center'} gap='2.5'>
                      <Image src="/Assets/campaign2.png" />
                      <Box >
                        <Text fontSize={'md'} >Chocolate cake campaign</Text>
                        <Text fontSize={'xs'} mt='1'>created on 20 jan</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>25 jul 2020 - 01 Aug 2020</Td>
                  <Td>210</Td>
                  <Td>INR 3,400</Td>
                  <Td>Coimbatore</Td>
                  <Td><Flex justifyContent={'center'}><Image src='/Assets/fb.png' /></Flex></Td>
                  <Td><Image src='/Assets/paused.png' /></Td>
                  <Td>
                    <Flex alignItems="center" >
                      <Button  to={``} background={'transparent'} size='xs'>
                        <Image src='/Assets/edit-2.png' />
                      </Button>
                      <Button background={'transparent'} size='xs'> 
                      <Image src='/Assets/trash.png' />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr key={""}>
                  <Td>
                    <Input type="checkbox" size="xs" />
                  </Td>
                  <Td>
                    <Switch size="md" id="" />
                  </Td>
                  <Td>
                    <Flex alignItems={'center'} gap='2.5'>
                      <Image src="/Assets/campaign3.png" />
                      <Box >
                        <Text fontSize={'md'} >Browine cake campaign</Text>
                        <Text fontSize={'xs'} mt='1'>created on 12 july</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>25 jul 2020 - 01 Aug 2020</Td>
                  <Td>123</Td>
                  <Td>INR 3,400</Td>
                  <Td>Erode</Td>
                  <Td><Flex justifyContent={'center'}><Image src='/Assets/fb.png' /></Flex></Td>
                  <Td><Image src='/Assets/exhausted.png' /></Td>
                  <Td>
                    <Flex alignItems="center" >
                      <Button  to={``} background={'transparent'}size='xs'>
                        <Image src='/Assets/edit-2.png' />
                      </Button>
                      <Button background={'transparent'}size='xs'>
                      <Image src='/Assets/trash.png' />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr key={""}>
                  <Td>
                    <Input type="checkbox" size="xs" />
                  </Td>
                  <Td>
                    <Switch size="md" id="" />
                  </Td>
                  <Td>
                    <Flex alignItems={'center'} gap='2.5'>
                      <Image src="/Assets/campaign4.png" />
                      <Box >
                        <Text fontSize={'md'} >Pumpkin cake camapign</Text>
                        <Text fontSize={'xs'} mt='1'>created on 28 feb</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>25 jul 2020 - 01 Aug 2020</Td>
                  <Td>435</Td>
                  <Td>INR 3,400</Td>
                  <Td>Coimbatore</Td>
                  <Td><Flex justifyContent={'center'}><Image src='/Assets/youtube.png' /></Flex></Td>
                  <Td><Image src='/Assets/liveNow.png' /></Td>
                  <Td>
                    <Flex alignItems="center" >
                      <Button  to={``} background={'transparent'}size='xs'>
                        <Image src='/Assets/edit-2.png' />
                      </Button>
                      <Button background={'transparent'}size='xs'>
                      <Image src='/Assets/trash.png' />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr key={""}>
                  <Td>
                    <Input type="checkbox" size="xs"/>
                  </Td>
                  <Td>
                    <Switch size="md" id="" />
                  </Td>
                  <Td>
                    <Flex alignItems={'center'} gap='2.5'>
                      <Image src="/Assets/campaign1.png" />
                      <Box >
                        <Text fontSize={'md'} >Cup cakes campaign</Text>
                        <Text fontSize={'xs'} mt='1'>created on 10 july</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>25 jul 2020 - 01 Aug 2020</Td>
                  <Td>123</Td>
                  <Td>INR 3,400</Td>
                  <Td>Coimbatore</Td>
                  <Td><Flex justifyContent={'center'}><Image src='/Assets/google.png' /></Flex></Td>
                  <Td><Image src='/Assets/liveNow.png' /></Td>
                  <Td>
                    <Flex alignItems="center" >
                      <Button  to={``} background={'transparent'}size='xs'>
                        <Image src='/Assets/edit-2.png' />
                      </Button>
                      <Button background={'transparent'}size='xs'>
                      <Image src='/Assets/trash.png' />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default CampaignListScreen;
