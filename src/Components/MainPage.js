import React, { useState, useContext } from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image,
  Modal, ModalOverlay, useDisclosure,
  ModalContent, ModalHeader, useMediaQuery,
  ModalFooter, ModalBody, ModalCloseButton,
  FormLabel, Input, FormControl, Alert, AlertIcon,
  Flex, Center
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import UserContext from "../Context/User/UserContext";
import LazyLoad from 'react-lazy-load';
import pic from '../Images/Mainpage.jpg'

const MainPage = ({ nextStep, setStep }) => {
  const [isSmallerThan760] = useMediaQuery("(max-width: 760px)")

  const userContext = useContext(UserContext);

  const { addRetentionUser } = userContext;


  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = () => {

    if (!email || !code) {
      setError(true)
    }
    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      setError('Invalid Email!')
    }

    if (code != "7866") {
      setError('Invalid Code!')
    }

    if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email) && code == "7866") {
      addRetentionUser({ email })
      setError(false)
      // setStep(33)
      nextStep(true)
    }
  }


  return (
    <>
      <Box height="100vh">

        <Flex style={{ paddingTop: "70px" }} wrap="inherit">
          <Container>
            <Box>
              <Text fontSize="4xl" color="white"><b>Can you catch the phish?</b></Text>
              <br />
              <Text fontSize="xl">Phishing is an attempt to manipulate users to give up their confidential/private information by gaining their trust by pretending to be someone they know. Phishing emails and messages may contain a malicious attachment or a link that may redirect the user to a malicious website.</Text>
              <br />
              <Text fontSize="xl" pt={6} pb={6}>Identifying phishing is harder than we think. Can you tell the difference? Check out the link URLS by hovering over them. Make sure to hover over the attachments to check out their redirection links too. Don’t worry, these links won’t work!</Text>
              <br />
              <div style={{ display: "flex" }}>
                <Link>
                  <Button className="b" colorScheme="gray" size="lg" mr={7} style={{ width: "200px", height: "50px" }}
                    onClick={() => nextStep()}>
                    Let's Start
                  </Button>
                </Link>
                <Link>
                  <Button className="b" colorScheme="gray" size="lg" mr={7} style={{ width: "370px", height: "50px" }}
                    onClick={() => onOpen()}>
                    Performance Retention Survey
                  </Button>
                </Link>
              </div>
            </Box>
          </Container>
          <Container>
            <Center>
              <LazyLoad>
              <Image
                  width="80%"
                  borderRadius="full"
                  objectFit="cover" src={pic} alt="Main Page" />
              </LazyLoad>
            </Center>
          </Container>
        </Flex>

      </Box >

      <div style={{ height: "25vh" }}></div>

      {/* MODAL FOR THE SURVEY 3 */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Performance Retention Survey</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder="Email"
                onChange={event => setEmail(event.currentTarget.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Code</FormLabel>
              <Input placeholder="Code"
                onChange={event => setCode(event.currentTarget.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter
            style={{ display: "flex", justifyContent: "end" }}>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



      {/*  ALERT BOX HERE */}
      {
        error == true && <div style={{ width: "400px", position: 'fixed', top: "0px", left: "40%", right: '-50%' }}>
          <Alert status="error">
            <AlertIcon />
     Fields Can't be Empty!
  </Alert></div>
      }


      {
        error == "Invalid Email!" && <div style={{ width: "400px", position: 'fixed', top: "0px", left: "40%", right: '-50%' }}>
          <Alert status="error">
            <AlertIcon />
    Invalid Email! Please Try Again
  </Alert></div>
      }

      {
        error == "Invalid Code!" && <div style={{ width: "400px", position: 'fixed', top: "0px", left: "40%", right: '-50%' }}>
          <Alert status="error">
            <AlertIcon />
    Invalid Code! Please Try Again
  </Alert></div>
      }
    </>
  )
}
export default MainPage