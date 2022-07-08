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
import q5 from "../../../Images/EPaymentSecurityQuiz/q5.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_5({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Always follow the appropriate procedure to log out of the system/website', 'Avoid suspicious customer orders']);
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
    console.log(correctAnswer)
    data['Question' + step] = userAns === correctAnswer ? 1 : 0
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
              <BreadcrumbLink href="#"><Tag>8</Tag></BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        </Box>
        <Box bg="#3c403d">
          <Box textAlign="center" height={userAns ? "260px" : "180px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>
              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The possible actions could be to <strong>Always follow the appropriate procedure to log out of the system/website</strong> or <strong>Avoid suspicious customer orders</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        Greatly spotted! However, other recommendations for E-payment security are as follows:
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Avoid sending financial information via email</ListItem>
                            <ListItem>Enable two- or multi-factor authentication</ListItem>
                            <ListItem>Make a secure connection by locking your browser</ListItem>
                            <ListItem>Never connect to public Wi-Fi for business purposes</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The possible actions could be to <strong>Always follow the appropriate procedure to log out of the system/website</strong> or <strong>Avoid suspicious customer orders</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        However, other recommendations for E-payment security are as follows: 
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>Avoid sending financial information via email</ListItem>
                            <ListItem>Enable two- or multi-factor authentication</ListItem>
                            <ListItem>Make a secure connection by locking your browser</ListItem>
                            <ListItem>Never connect to public Wi-Fi for business purposes</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                  </>)

                : <Text fontSize="4xl" color="white">Adam runs an online goods business, he has a small team to run his business. One of his employees was the victim of a cyber security attack during an online transaction, which was reported on his website and led to the closure of his business. Now he has decided to train his team on secure E-payment methods. What recommendations should Adam give on E-payment security awareness to his employees?</Text>
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
                    onClick={() => handleSubmit('Always follow the appropriate procedure to log out of the system/website')}
                  >
                    Always follow the appropriate procedure to log out of the system/website
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "480px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Always ask the IT team before making any transaction')}
                  >
                    Always ask the IT team before making any transaction
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "480px", height: "50px", marginTop: '0.5%' }}
                    onClick={() => handleSubmit('Avoid suspicious customer orders')}
                  >
                    Avoid suspicious customer orders
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
            bg="white"
          >
            <div>
              <Image
                style={{ height: "750px" }}
                p={8}
                width="89vw"
                objectFit="fill"
                src={q5}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
