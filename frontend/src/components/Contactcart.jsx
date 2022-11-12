import { Box, Button, Divider, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons"
import React from 'react'
import { useState } from 'react'

const Contactcart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [msg, setMsg] = useState({email:"guest@gmail.com", text:"Problem faced during making order"})

    const handleChange = (e) => {
       const value = e.target.value 
       const name = e.target.name 

       setMsg({...msg,
        [name]:value
    })

    }
   const handleSubmit = () => {
       if(!msg.email || !msg.text)
       {
          toast({
            title: 'Please fill all the fields',
            
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
        else
        {
            toast({
                title: `Message send to ${msg.email}`,
                
                status: 'success',
                duration: 3000,
                isClosable: true,
              }) 

              setMsg({email:"guest@gmail.com", text:"Problem faced during making order"})
              onClose()
        }
       

   }
    
  return (
    <>
    <Box w={"90%"} m="auto" mt={"20px"} >
    <Text color={"gray"} fontSize="14px" align={"center"}>You can also place your order via telephone.</Text>
     <Box h={["480px","300px","300px"]} w={["100%","80%","80%"]} m={"auto"} mt="20px" display={"flex"} gap="15px" mb={"30px"} flexDirection={["column","row","row"]} border={"0px"} >
        <Box border={"1px solid gray"} m={"auto"} w={["70%","50%","50%"]} h={"100%"} pt="20px" pb={"0px"}  >
          <VStack>
            <PhoneIcon/>
            <Text>CALL US</Text>

            <Box align="center" textDecoration={"underline"}>
            <Text fontSize={["13.5px","13px","16px"]} >+49 89 127695-101 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Argentina: 0800-666-0663 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Chile: 800-914-515 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Colombia: 01800-518-5268 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Mexico: 01-800-099-0703 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Peru: 0800-78259 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Puerto Rico: 1-787-303-4205 </Text>
            <Text fontSize={["13.5px","13px","16px"]} >Available 24/7 </Text>
            </Box>
          </VStack>

        </Box>
        <Box onClick={onOpen} align="center" border={"1px solid gray"} m={"auto"} w={["70%","50%","50%"]} h={["40%","100%","100%"]} pt="20px" pb={"0px"}   >
            <EmailIcon w={50} h={30} />
            <Text>MAIL US</Text>
            <Text fontSize={"14px"} textDecoration={"underline"}>customercare@mytheresa.com</Text>
        </Box>
     </Box>

     <Divider/>
     <Box mt={"20px"} mb="20px" fontSize={["10px","13px","13px"]} color="gray" display={"flex"} justifyContent="space-between">
     <Text>copyright © 2006-2022 mytheresa.com terms of use privacy policy imprint</Text>
     <Box display={"flex"} gap="15px">
        <Text>terms of use</Text>
        <Text>privacy policy</Text>
        <Text>impringt</Text>
     </Box>
     </Box>
    </Box>


   

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Contact Us</ModalHeader>
  <ModalCloseButton />
    <ModalBody>
        
      <Input value={msg.email} name="email" onChange={handleChange} mb={3} placeholder='enter your email'/>
      <Textarea value={msg.text} name="text" onChange={handleChange} mb={3} placeholder='write something'></Textarea>
      <Button onClick={handleSubmit}>Submit</Button>
    </ModalBody>

    
  </ModalContent>
</Modal>

    </>
  )
}

export default Contactcart