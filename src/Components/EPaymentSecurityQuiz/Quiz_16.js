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
// import q15 from "../../Images/EPaymentSecurityQuiz/q15.png"
import QuizContext from "../../Context/Quiz/QuizContext";
import UserContext from "../../Context/User/UserContext";

export default function Quiz_15({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey1Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState("Perceived payment security");
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
    data['Question' + step] = ans === correctAnswer ? 1 : 0
    addSurvey1Data(data)
  }


  return (
    <>
      <SimpleGrid columns={1}>
        {/* UPPER PART */}
        <Box bg="grey">
          <Flex m="2"><Breadcrumb color="white">
            <BreadcrumbItem>
              <BreadcrumbLink href="#"><Tag>{index}</Tag></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#"><Tag>12</Tag></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        </Box>
        <Box bg="#3c403d">
          <Box textAlign="center" height={userAns ? "230px" : "150px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Perceived payment security</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The reasons for correct answer is:  
                    </Text>
                    <Text color="white" alignSelf="left">
                        <UnorderedList>
                            <ListItem><b>Perceived payment security</b> is described as the level to which an online payment user believes a transaction on an online payment platform is secure in terms of both financial and personal information aspects.</ListItem>
                            <ListItem><b>Privacy concerns</b> in online payments are expressed in such a way that users' personal information is not disclosed to anyone or anywhere during online payments</ListItem>
                            <ListItem>An <b>online payment decision</b> is a term used to express users' concerns about whether they choose to pay online</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Perceived payment security</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The following criteria for a strong password shall be satisfied:  
                    </Text>
                    <Text color="white" alignSelf="left">
                        <UnorderedList>
                            <ListItem>Minimum length of 8 characters</ListItem>
                            <ListItem>Contains at least 3 of each of the following four-character types: letters in lower case, upper case, digits, and special characters</ListItem>
                            <ListItem>Not a single word has a numeral before or after it.</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">Katherine usually purchased goods through an e-commerce website. During an interview on “User’s Concerns About Online Shopping Security”, she said that I feel more secure when an e-commerce website asks me to input my credentials before completing the online payment. Which factor influences the user’s decision in this scenario?</Text>
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
                    style={{ width: "250px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Privacy concerns')}
                  >
                    Privacy concerns
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "250px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Online payment decision')}
                  >
                    Online payment decision
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "250px", height: "50px" }}
                    onClick={() => handleSubmit('Perceived payment security')}
                  >
                    Perceived payment security
                  </Button>
                </>
              }
            </Box>
          </Box>
        </Box>

        {/* LOWER PART FOR THE EMAIL/PHONE/TEXT */}
        {/* <Flex direction="column" align="center" justify="center">
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
                src={q15}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex> */}
      </SimpleGrid >
    </>
  );
}
