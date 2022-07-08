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
import q2 from "../../../Images/EPaymentSecurityQuiz/q2.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_2({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState('Yes');
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
          <Box textAlign="center" height={userAns ? "200px" : "140px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is Yes.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                      Greatly spotted! Sensitive data, such as account and deposit information, can be used for <strong>identity theft</strong>. Because email is not considered to be a secure method for sharing confidential information, therefore sending this or any other type of sensitive information via email is extremely risky. Alternatively, the two offices may have called each other or used the end-to-end encrypted network to convey information more securely.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}><b>The most appropriate answer is Cybersecurity Self-awareness.</b></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}><>Sensitive data, such as account and deposit information, can be used for <strong>identity theft</strong>. Because email is not considered to be a secure method for sharing confidential information, therefore sending this or any other type of sensitive information via email is extremely risky. Alternatively, the two offices may have called each other or used the end-to-end encrypted network to convey information more securely.</></Text>

                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">A student's bank account has been incorrectly credited by two offices on campus due to a direct deposit error. Office ‘A’ quickly resolves the issue by emailing Office ‘B’ the appropriate account and deposit information. The employee checks with the bank to make sure everything has been resolved. Do you think of any cybersecurity threat to confidential information?</Text>
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
                    style={{ width: "80px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Yes')}
                  >
                    Yes
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "80px", height: "50px" }}
                    onClick={() => handleSubmit('No')}
                  >
                    No
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
                src={q2}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
