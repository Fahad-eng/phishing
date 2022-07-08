import React, { useState, useContext } from 'react';
import Moment from 'react-moment';
import {
  Flex, Box, Button, Text, SimpleGrid,
  Breadcrumb, BreadcrumbItem,
  BreadcrumbLink, Tag, Avatar, TagLabel,
  TagRightIcon, Image, Popover, PopoverTrigger,
  PopoverContent,
  PopoverBody, PopoverCloseButton,
  List, ListItem, UnorderedList
} from '@chakra-ui/react';
import { CgDanger, CgClose, CgPlayTrackNextO } from "react-icons/cg"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { MdLocalPrintshop, MdAttachment, MdStarBorder } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoMdShareAlt, IoMdArrowDropdown } from "react-icons/io"
import q11 from "../../../Images/EPaymentSecurityQuiz/q11.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_11({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Paypal', 'Amazon Pay', 'Google Pay']);
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
    data['Question' + step] = ans === correctAnswer ? 1 : 0
    addSurvey3Data(data)
  }


  return (
    <>
      <SimpleGrid columns={1}>
        {/* UPPER PART */}
        <Box bg="grey">
          <Flex m="2"><Breadcrumb color="white">
            <BreadcrumbItem>
              <BreadcrumbLink href="#"><Tag>{index===0 ? index+1 : index}</Tag></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#"><Tag>7</Tag></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        </Box>
        <Box bg="#3c403d">
          <Box textAlign="center" height={userAns ? "530px" : "170px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] || userAns === correctAnswer[2] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Paypal</strong>, <strong>Amazon Pay</strong> and <strong>Google Pay</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The reason for the correct answers are:  
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>
                                <b>PayPal:</b>PayPal is the widely accepted and secure way to shop online because the seller never sees your credit card number. It maintains user privacy by providing the following features:
                                <UnorderedList>
                                    <ListItem>PayPal security key</ListItem>
                                    <ListItem>Data encryption</ListItem>
                                    <ListItem>Email confirmations</ListItem>
                                </UnorderedList>
                            </ListItem>
                            <ListItem>
                                <b>Amazon Pay:</b>Like PayPal, Amazon Pay is a digital payment processing service that enables users to make online purchases on other websites using their Amazon payment methods. In addition to the important functionality, the following are the salient features of Amazon Pay.
                                <UnorderedList>
                                    <ListItem>Use TLS/SSL with 128-bit encryption</ListItem>
                                    <ListItem>It’s optimized for both mobile and voice search</ListItem>
                                    <ListItem>With one account, customers can access thousands of sites</ListItem>
                                </UnorderedList>
                            </ListItem>
                            <ListItem>
                                <b>Google Pay:</b>The Google Company created a digital wallet app called Google Pay. It is used to pay for items in stores and restaurants, send money to other Google Pay users, and make in-app purchases. Trusted globally, Google Pay enables users to swiftly and easily complete their checkout on third-party websites by selecting from remembered payment options in their Google account. 
                                <UnorderedList>
                                    <ListItem>Google Pay Can Be deleted remotely</ListItem>
                                    <ListItem>Google Pay hides your payment details</ListItem>
                                    <ListItem>Google Pay doesn't broadcast your transactions</ListItem>
                                    <ListItem>Provide biometric authentication</ListItem>
                                </UnorderedList>
                            </ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Paypal</strong>, <strong>Amazon Pay</strong> and <strong>Google Pay</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The reason for the correct answers are:  
                    </Text>
                    <Text color="white" alignSelf="left">
                        <UnorderedList>
                            <ListItem>
                                <b>PayPal:</b>PayPal is the widely accepted and secure way to shop online because the seller never sees your credit card number. It maintains user privacy by providing the following features:
                                <UnorderedList>
                                    <ListItem>PayPal security key</ListItem>
                                    <ListItem>Data encryption</ListItem>
                                    <ListItem>Email confirmations</ListItem>
                                </UnorderedList>
                            </ListItem>
                            <ListItem>
                                <b>Amazon Pay:</b>Like PayPal, Amazon Pay is a digital payment processing service that enables users to make online purchases on other websites using their Amazon payment methods. In addition to the important functionality, the following are the salient features of Amazon Pay.
                                <UnorderedList>
                                    <ListItem>Use TLS/SSL with 128-bit encryption</ListItem>
                                    <ListItem>It’s optimized for both mobile and voice search</ListItem>
                                    <ListItem>With one account, customers can access thousands of sites</ListItem>
                                </UnorderedList>
                            </ListItem>
                            <ListItem>
                                <b>Google Pay:</b>The Google Company created a digital wallet app called Google Pay. It is used to pay for items in stores and restaurants, send money to other Google Pay users, and make in-app purchases. Trusted globally, Google Pay enables users to swiftly and easily complete their checkout on third-party websites by selecting from remembered payment options in their Google account. 
                                <UnorderedList>
                                    <ListItem>Google Pay Can Be deleted remotely</ListItem>
                                    <ListItem>Google Pay hides your payment details</ListItem>
                                    <ListItem>Google Pay doesn't broadcast your transactions</ListItem>
                                    <ListItem>Provide biometric authentication</ListItem>
                                </UnorderedList>
                            </ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">You can use a lot of services to accept online payments. E-commerce services that handle payment information for websites are known as online payment gateways. Below are some online payment methods, highlighting the most popular and secure methods you're familiar with:</Text>
              }
            </Flex>
            <Box pt={6}>
              {userAns ?
                <Button
                  colorScheme="gray" size="lg" rightIcon={<CgPlayTrackNextO style={{ fontSize: '20px' }} />}
                  style={{ width: "230px", height: "50px" }}
                  onClick={() => nextStep()}
                >
                  NEXT
                </Button>
                : <>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "150px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Paypal')}
                  >
                    Paypal
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "150px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Zelle')}
                  >
                    Zelle
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "150px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Amazon Pay')}
                  >
                    Amazon Pay
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "150px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Google Pay')}
                  >
                    Google Pay
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "150px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Stripe')}
                  >
                    Stripe
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "150px", height: "50px" }}
                    onClick={() => handleSubmit('WePay')}
                  >
                    WePay
                  </Button>
                </>
              }
            </Box>
          </Box>
        </Box>

        {/* LOWER PART FOR THE EMAIL/PHONE/TEXT */}
        <Flex direction="column" align="center" justify="center">
          <Box
            style={{ height: "400px", marginTop: '45px' }}
            p={8}
            width="50vw"
            // maxWidth="700px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            bg="grey"
          >
            <div>
              <Image
                style={{ height: "380px" }}
                p={8}
                width="49vw"
                objectFit="fill"
                src={q11}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
