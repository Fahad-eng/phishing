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
import q6 from "../../../Images/EPaymentSecurityQuiz/q6.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_6({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Fear of transferring funds to the wrong person/institution', 'Lack of awareness about online payment methods']);
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
          <Box textAlign="center" height={userAns ? "280px" : "200px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>
              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The possible answers are <strong>Fear of transferring funds to the wrong person/institution</strong> or <strong>Lack of awareness about online payment methods</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    It is because she has never used online payments, she is unaware of the widely accepted methods of online payment. She is also skeptical about the legal status of the person/entity to which she is transferring funds. In addition, she lacks the time to familiarize herself with secure e-payment methods.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The possible actions could be to <strong>Fear of transferring funds to the wrong person/institution</strong> or <strong>Lack of awareness about online payment methods</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    It is because she has never used online payments, she is unaware of the widely accepted methods of online payment. She is also skeptical about the legal status of the person/entity to which she is transferring funds. In addition, she lacks the time to familiarize herself with secure e-payment methods.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                  </>)

                : <Text fontSize="4xl" color="white">
                    Zeni is a graduate student, she must submit her semester fee within a short time. Due to the emergency, she was out of the station and unable to go to the bank to submit the fee. She requested an administrator to extend her fee invoice deadline, but the administrator told her it was against the university's fee policy and advised her to pay the fee online. Since she never used online payment methods, she decided to pay a fee with a penalty. What are the factors that might have prevented her from transacting online?
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
                    style={{ width: "480px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Fear of transferring funds to the wrong person/institution')}
                  >
                    Fear of transferring funds to the wrong person/institution
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "480px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Due to her busy schedule')}
                  >
                    Due to her busy schedule
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "480px", height: "50px", marginRight: '1.5%', marginTop: '0.5%' }}
                    onClick={() => handleSubmit('Lack of awareness about online payment methods')}
                  >
                    Lack of awareness about online payment methods
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "480px", height: "50px", marginRight: '1.5%', marginTop: '0.5%' }}
                    onClick={() => handleSubmit('The university will not accept online payment')}
                  >
                    The university will not accept online payment
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
