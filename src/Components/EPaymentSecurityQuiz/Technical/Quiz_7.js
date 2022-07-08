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
import q7 from "../../../Images/EPaymentSecurityQuiz/q7.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_7({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Enable automatic lock on mobile devices', "Restrict the app's access to personal information"]);
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
              <BreadcrumbLink href="#"><Tag>8</Tag></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        </Box>
        <Box bg="#3c403d">
          <Box textAlign="center" height={userAns ? "280px" : "200px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>
              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The possible actions could be to <strong>Enable automatic lock on mobile devices</strong> or <strong>Restrict the app's access to personal information</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        Here are some other recommendations for securing mobile devices against 
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Never save your sensitive password on mobile devices</ListItem>
                            <ListItem>Prevent the use of auto save passwords</ListItem>
                            <ListItem>Never connect to public Wi-Fi for business purposes</ListItem>
                            <ListItem>Always follow the appropriate procedures to log out from the system/website</ListItem>
                            <ListItem>Enable log out from all devices for sensitive accounts</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The possible actions could be to <strong>Enable automatic lock on mobile devices</strong> or <strong>Restrict the app's access to personal information</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        Here are some other recommendations for securing mobile devices against 
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Never save your sensitive password on mobile devices</ListItem>
                            <ListItem>Prevent the use of auto save passwords</ListItem>
                            <ListItem>Never connect to public Wi-Fi for business purposes</ListItem>
                            <ListItem>Always follow the appropriate procedures to log out from the system/website</ListItem>
                            <ListItem>Enable log out from all devices for sensitive accounts</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                  </>)

                : <Text fontSize="4xl" color="white">
                    According to a survey report, 45% of users made sure to log out after finishing their activity on the banking website. However, most users were unaware of how to close the app on a mobile device and claimed that they did not. Which of the following factors play an important role in raising awareness?
                </Text>
              }
            </Flex>
            <Box pt={7}>
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
                    style={{ width: "380px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Enable automatic lock on mobile devices')}
                  >
                    Enable automatic lock on mobile devices
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "380px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit("Restrict the app's access to personal information")}
                  >
                    Restrict the app's access to personal information
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "380px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Install antivirus software')}
                  >
                    Install antivirus software
                  </Button>
                </>
              }
            </Box>
          </Box>
        </Box>

        {/* LOWER PART FOR THE EMAIL/PHONE/TEXT */}
        <Flex direction="column" align="center" justify="center">
          <Box
            style={{ height: "765px", marginTop: '45px' }}
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
                style={{ height: "750px" }}
                p={8}
                width="89vw"
                objectFit="fill"
                src={q7}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
