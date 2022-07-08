import React, { useState, useContext } from 'react';
import Moment from 'react-moment';
import {
  Flex, Box, Button, Text, SimpleGrid,
  Breadcrumb, BreadcrumbItem,
  BreadcrumbLink, Tag, Avatar, TagLabel,
  TagRightIcon, Image, Popover, PopoverTrigger,
  PopoverContent,
  PopoverBody, PopoverCloseButton, UnorderedList, ListItem,
} from '@chakra-ui/react';
import { CgDanger, CgClose, CgPlayTrackNextO } from "react-icons/cg"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { MdLocalPrintshop, MdAttachment, MdStarBorder } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoMdShareAlt, IoMdArrowDropdown } from "react-icons/io"
import q3 from "../../../Images/Remote Work Graphics/q3.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_3({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey2Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Use of Secure/Encrypted Network Connections', 'Use of Strong Passwords to Join Meeting']);
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
          <Box textAlign="center" height={userAns ? "320px" : "110px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>The correct answer is <strong>Use of Secure/Encrypted Network Connections</strong> and <strong>Use of Strong Passwords to Join Meeting</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        These preventive measures can help provide secure video conferencing.
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Strong passwords are difficult to compromise</ListItem>
                            <ListItem>All the information is traveling on a network, therefore, there is a need for secure network connections</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                        <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Use of Secure/Encrypted Network Connections</strong> and <strong>Use of Strong Passwords to Join Meeting</strong>.</Text>
                        <Text fontSize="xl" color="white" width="80vw" pt={3}>
                            These preventive measures can help provide secure video conferencing.
                        </Text>
                        <Text color="white">
                            <UnorderedList>
                                <ListItem>Strong passwords are difficult to compromise</ListItem>
                                <ListItem>All the information is traveling on a network, therefore, there is a need for secure network connections</ListItem>
                            </UnorderedList>
                        </Text>
                        <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                    </>)

                : <Text fontSize="4xl" color="white">Misuse of videos made during video conferencing is one of the threats to remote work. What are the possible prevention methods?</Text>
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
                    style={{ width: "300px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Use of Video Conferencing Tools/Software')}
                  >
                    Use of Video Conferencing Tools/Software
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "300px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Use of Secure/Encrypted Network Connections')}
                  >
                    Use of Secure/Encrypted Network Connections
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "300px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Use of Strong Passwords to Join Meeting')}
                  >
                    Use of Strong Passwords to Join Meeting
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "300px", height: "50px" }}
                    onClick={() => handleSubmit('None of these ')}
                  >
                    None of these 
                  </Button>
                </>
              }
            </Box>
          </Box>
        </Box>

        {/* LOWER PART FOR THE EMAIL/PHONE/TEXT */}
        <Flex direction="column" align="center" justify="center">
          <Box
            style={{ height: "630px", marginTop: '45px' }}
            p={8}
            width="90vw"
            // maxWidth="700px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            bg="grey"
          >
            <div>
              <Image
                style={{ height: "615px" }}
                p={8}
                width="89vw"
                objectFit="fill"
                src={q3}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
