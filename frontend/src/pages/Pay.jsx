import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Image,
    Img,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
    Spinner,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Toast,
    useDisclosure,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
  const Pay = () => {
      const [info, setInfo] = useState({name:"",number:"",expiry:"",cvv:""})
      const [state, setState] = useState(null)
      const toast = useToast()
      const navigate = useNavigate()
      const { isOpen, onOpen, onClose } = useDisclosure()
      const handleSubmit = () => {
         if(!info.name ||!info.number || !info.expiry || !info.cvv){
            return toast({
               description:"please all the fields",
               status:"error",
               duration:3000,
               isClosable:"true",
             })
         }
           onOpen()
         setState(true)
  
         setTimeout(()=>setState(false),2000)
         setTimeout(()=>{
          setState(null)
          onClose()
          setInfo({name:"",number:"",expiry:"",cvv:""})
          navigate("/ordersummary")
         },3000)

         
         
         
      }
    return (
      <>
        <Image
          margin={"auto"}
          w={["200px", "300px", "350px"]}
          mt={"100px"}
          src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20221109T180626"
        />
        <Box w={"90%"} border={"0px"} m="auto" mt={"30px"} h={"auto"}>
          <VStack mb={"20px"} align={"left"}>
            <Text>PAYMENT METHOD</Text>
            <Text color={"gray.500"} fontSize="14px">
              Please select your preferred payent method for this order.
            </Text>
            <Divider />
          </VStack>
  
          <Tabs variant="soft-rounded" colorScheme="gray">
            <TabList>
              <Tab>Card</Tab>
             
            </TabList>
            <TabPanels>
              <TabPanel>
              <Box w={["100%","70%","50%"]} m="auto">
                  
                <VStack>
                  <FormControl isRequired>
                    <FormLabel>Name on card</FormLabel>
                    <Input value={info.name} onChange={(e)=>setInfo({...info,name:e.target.value})} type="text" />
                  </FormControl>
  
                  <FormControl isRequired>
                    <FormLabel>Credit card number</FormLabel>
                    <Input value={info.number} onChange={(e)=>setInfo({...info,number:e.target.value})} type="number" />
                    <FormHelperText>
                      We'll never share your card number
                    </FormHelperText>
                  </FormControl>
  
                  <FormControl isRequired>
                    <FormLabel>Expiration date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="month"
                      value={info.expiry}
                      onChange={(e)=>setInfo({...info,expiry:e.target.value})}
                    />
                  </FormControl>
  
                  <FormControl isRequired>
                    <FormLabel>CVC/CVV</FormLabel>
                    <Input value={info.cvv} onChange={(e)=>setInfo({...info,cvv:e.target.value})} type="number" />
                  </FormControl>
                </VStack>
                </Box>
              </TabPanel>
             
            </TabPanels>
          </Tabs>
        </Box>
  
  
        <Box h={"auto"} w="90%" m={"auto"} border={"1px solid white"} mt="40px" display="flex" justifyContent={"space-between"}>
        <Box
            boxSizing="border-box"
            border={"1px solid white"}
            display="flex"
            
            bg="gray.300"
            fontSize={["8px","10px","13px"]}
            alignItems={"center"}
            justifyContent={"center"}
            w={["120px","150px","190px"]}
            h="30px"
            cursor="pointer"
         
          >
            BACK TO SHOPPING BAG
          </Box>
         
  
  
  
        <Box>
        <Box
            boxSizing="border-box"
            border={"1px solid white"}
            display="flex"
            bg="gray.300"
            fontSize={["8px","10px","13px"]}
            alignItems={"center"}
            justifyContent={"center"}
            w={["120px","150px","190px"]}
            h="30px"
            mb={"20px"}
            onClick={handleSubmit}
            cursor="pointer"
          >
            Pay
          </Box>
  
        <Box
            boxSizing="border-box"
            border={"1px solid white"}
            display="flex"
            color={"white"}
            bg="black"
            fontSize={["8px","10px","13px"]}
            alignItems={"center"}
            justifyContent={"center"}
            w={["120px","150px","190px"]}
            h="30px"
            cursor="pointer"
         
          >
            Go to summary
          </Box>
          </Box>
  
        </Box>
  
  
      
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader align="center">{state?"Transaction in progress":"Transaction Successfull"}</ModalHeader>
  
      {state ?  <Spinner  thickness="3px" h={"100px"} w="100px" m={"auto"} />: <Img w="200px" m={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4XZv8cM9eLu0ATwZlepZOT8huCoBUgvhyQ&usqp=CAU"/> }
      <ModalBody>
      </ModalBody>
  
      
    </ModalContent>
  </Modal>
      </>
    );
  };
  
  export default Pay;
  