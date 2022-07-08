import React, { useState, useContext } from 'react';
import Moment from 'react-moment';
import {
  Flex, Box, Button, Text, SimpleGrid,
  Breadcrumb, BreadcrumbItem,
  BreadcrumbLink, Tag, Avatar, TagLabel,
  TagRightIcon, Image, Popover, PopoverTrigger,
  PopoverContent,
  PopoverBody, PopoverCloseButton,
} from '@chakra-ui/react';
import { CgDanger, CgClose, CgPlayTrackNextO } from "react-icons/cg"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { MdLocalPrintshop, MdAttachment, MdStarBorder } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoMdShareAlt, IoMdArrowDropdown } from "react-icons/io"
import q1 from "../../../Images/EPaymentSecurityQuiz/q1.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_1({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState('Cybersecurity Self-awareness');
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
    data['Question' + step] = ans === correctAnswer ? 1 : 0
    console.log(data)
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
          <Box textAlign="center" height={userAns ? "230px" : "110px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The most appropriate answer is Cyber Self-awareness.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                      Greatly spotted! Limiting access to online activities is not possible in today’s scenario because nowadays most of the transactions are performed online. However, cybersecurity self-awareness is the most suitable measure because this includes all the precautions that a user must take to protect himself/herself from online banking attacks.  Furthermore, installing anti-malware can protect from online banking but only in some specific scenarios where the malicious file gets downloaded onto the victim's system and steals credentials or key logs.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}><b>The most appropriate answer is Cybersecurity Self-awareness.</b></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}><>Limiting access to online activities is not possible in today’s scenario because nowadays most of the transactions are performed online. However, cybersecurity self-awareness is the most suitable measure because this includes all the precautions that a user must take to protect himself/herself from online banking attacks. Furthermore, installing anti-malware can protect from online banking but only in some specific scenarios where the malicious file gets downloaded onto the victim's system and steals credentials or key logs.</></Text>

                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">What security measures can you take to protect yourself from various online banking attacks?</Text>
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
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Installing anti-malware software')}
                  >
                    Installing anti-malware software
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Cybersecurity Self-awareness')}
                  >
                    Cybersecurity Self-awareness
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px" }}
                    onClick={() => handleSubmit('Limiting access to online activities')}
                  >
                    Limiting access to online activities
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
            bg="white"
          >
            <div>
              <Image
                style={{ height: "615px" }}
                p={8}
                width="89vw"
                objectFit="fill"
                src={q1}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
