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
import q6 from "../../../Images/Remote Work Graphics/q6.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_6({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey2Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState("Password Length [8-10]");
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
    console.log(step)
    data['Question' + step] = ans === correctAnswer ? 1 : 0
    addSurvey2Data(data)
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
              <BreadcrumbLink href="#"><Tag>8</Tag></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        </Box>
        <Box bg="#3c403d">
          <Box textAlign="center" height={userAns ? "230px" : "240px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Password Length [8-10] characters consisting of capital letters, small letters, numbers, and special characters</strong>.</Text>
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
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Password Length [8-10] characters consisting of capital letters, small letters, numbers, and special characters</strong>.</Text>
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

                : <Text fontSize="4xl" color="white">Sam is an employee of a multinational company and is responsible for password management. In your opinion, what kind of password should have the lowest likelihood of being exploited?</Text>
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
                    style={{ width: "750px", height: "50px" }}
                    onClick={() => handleSubmit('Password Length [10-12]')}
                  >
                    Password Length [10-12] characters consisting of capital letters, small letters, and numbers
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "750px", height: "50px", marginTop: '0.8%' }}
                    onClick={() => handleSubmit('Password Length [23-25]')}
                  >
                    Password Length [23-25] characters consisting of capital and small letters
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "750px", height: "50px", marginTop: '0.8%' }}
                    onClick={() => handleSubmit('Password Length [8-10]')}
                  >
                    Password Length [8-10] characters consisting of capital letters, small letters, numbers, and special characters
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
                src={q6}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
