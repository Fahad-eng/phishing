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
import q10 from "../../../Images/Remote Work Graphics/q10.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_9({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey1Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['The company should work more on network security', 'Employees must be trained on best practices for remote work', 'Backup your data on a secure site/systems']);
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
              <BreadcrumbLink href="#"><Tag>{index===0 ? index+1 : index}</Tag></BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#"><Tag>8</Tag></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        </Box>
        <Box bg="#3c403d">
          <Box textAlign="center" height={userAns ? "260px" : "300px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] || userAns === correctAnswer[2] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answers are <strong>The company should work more on network security</strong>, <strong>Employees must be trained on best practices for remote work</strong> and <strong>Backup your data on a secure site/systems</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Other recommendations to prevent ransomware attacks:
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Install anti-malware software</ListItem>
                            <ListItem>Implement Intrusion Detection System (IIDS)</ListItem>
                            <ListItem>Enhance OS security</ListItem>
                            <ListItem>Protecting end point devices</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answers are <strong>The company should work more on network security</strong>, <strong>Employees must be trained on best practices for remote work</strong> and <strong>Backup your data on a secure site/systems</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Other recommendations to prevent ransomware attacks:
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Install anti-malware software</ListItem>
                            <ListItem>Implement Intrusion Detection System (IIDS)</ListItem>
                            <ListItem>Enhance OS security</ListItem>
                            <ListItem>Protecting end point devices</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">An employee working remotely receives an e-mail from a travel agency, that appears to be legitimate, to share an incoming flight schedule. He clicks on the link provided in the email to cancel incoming flights and inadvertently allows the attacker to enter the organization's network. The next day, he fails to log in to the system, assuming it's a network connection problem, and alerts the technical team about a specific issue. The hacker encrypted firm data after breaching the organization's network and demanded a ransom. What possible recommendations can be suggested to prevent such cases?</Text>
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
                    style={{ width: "580px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('An employee should not open unknown emails without the administrator’s permission')}
                  >
                   An employee should not open unknown emails without the administrator’s permission 
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "580px", height: "50px" }}
                    onClick={() => handleSubmit('The company should work more on network security')}
                  >
                    The company should work more on network security
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "580px", height: "50px", marginTop: '0.8%', marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Install antivirus software')}
                  >
                   Install antivirus software 
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "580px", height: "50px", marginTop: '0.8%' }}
                    onClick={() => handleSubmit('Employees must be trained on best practices for remote work')}
                  >
                    Employees must be trained on best practices for remote work
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "580px", height: "50px", marginTop:'0.8%'}}
                    onClick={() => handleSubmit('Backup your data on a secure site/systems')}
                  >
                    Backup your data on a secure site/systems 
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
                src={q10}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
