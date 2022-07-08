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
import q8 from "../../../Images/Remote Work Graphics/q8.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_1({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey1Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState('MFA with Single Sign-On');
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
          <Box textAlign="center" height={userAns ? "270px" : "150px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The best possible solution for remote work scenarios is <strong>MFA with Single Sign-On</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                      Greatly spotted! MFA with Single Sign-On (SSO). The employee may sign into several corporate sites with just one set of credentials with the help of the SSO feature. For this reason, the implementation of MFA in addition to SSO is very important. Your IT team can monitor and manage access control remotely by implementing SSO for cloud services and web apps. The IT team can modify this one password if an employee leaves the organization or is terminated to prevent access to former employees. However, with biometric authentication, the MFA has a problem with the availability of biometric machines or sensor devices at home. In addition, MFA with OTP requires repeated verification, and this method is a waste of time.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The best possible solution for remote work scenarios is <strong>MFA with Single Sign-On</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    MFA with Single Sign-On (SSO). The employee may sign into several corporate sites with just one set of credentials with the help of the SSO feature. For this reason, the implementation of MFA in addition to SSO is very important. Your IT team can monitor and manage access control remotely by implementing SSO for cloud services and web apps. The IT team can modify this one password if an employee leaves the organization or is terminated to prevent access to former employees. However, with biometric authentication, the MFA has a problem with the availability of biometric machines or sensor devices at home. In addition, MFA with OTP requires repeated verification, and this method is a waste of time.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">Most users' passwords are compromised when working remotely because of social engineering attacks. The XYZ organization authenticates its users with a user ID and password. Therefore, the system administrator requires a Multi-Factor Authentication (MFA) mechanism for remote access to the organization's network.  What do you recommend in this circumstance given the following list of popular MFA techniques?</Text>
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
                    style={{ width: "280px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('MFA with password and Biometric')}
                  >
                    MFA with password and Biometric 
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "280px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('MFA with Single Sign-On')}
                  >
                    MFA with Single Sign-On
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "280px", height: "50px"}}
                    onClick={() => handleSubmit('MFA with OTP')}
                  >
                    MFA with OTP
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
                src={q8}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
