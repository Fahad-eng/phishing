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
import q4 from "../../../Images/EPaymentSecurityQuiz/q4.PNG"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_4({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Report to the Bank Customer Care Center', 'Avoid clicking on the link provided in the email']);
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
          <Box textAlign="center" height={userAns ? "220px" : "140px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>
              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The possible actions could be to <strong>Report to the Bank Customer Care Center</strong> or <strong>Avoid clicking on the link provided in the email</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        Greatly spotted! The user should delete the email and a better option is to report it as a spam or phishing email and then delete it.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw">
                    Even if it looks like it's from a company you know, any unsolicited email or phone contact that asks you to enter your account information, your password, CNIC, or other personal or private information is a suspect. To verify that the message is from the sender, always contact them through the channel you believe is trustworthy.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The possible actions could be to <strong>Report to the Bank Customer Care Center</strong> or <strong>Avoid clicking on the link provided in the email</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The user should delete the email and a better option is to report it as a spam or phishing email and then delete it. 
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw">
                        Even if it looks like it's from a company you know, any unsolicited email or phone contact that asks you to enter your account information, your password, CNIC, or other personal or private information is a suspect. To verify that the message is from the sender, always contact them through the channel you believe is trustworthy.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                  </>)

                : <Text fontSize="4xl" color="white">Your bank sends you an email informing you that there is a problem with your account. You can access your account and correct the problem by following the instructions and link provided in the email. What should you do to deal with this situation in a secure and efficient manner?</Text>
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
                    style={{ width: "360px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Report to the Bank Customer Care Center')}
                  >
                    Report to the Bank Customer Care Center
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "360px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Follow the instructions and click on the link provided')}
                  >
                    Follow the instructions and click on the link provided
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "360px", height: "50px" }}
                    onClick={() => handleSubmit('Avoid clicking on the link provided in the email')}
                  >
                    Avoid clicking on the link provided in the email
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
                src={q4}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
