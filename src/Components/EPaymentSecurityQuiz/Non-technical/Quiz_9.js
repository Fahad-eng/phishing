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
import q9 from "../../../Images/EPaymentSecurityQuiz/q9.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_9({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState('John makes online transactions using the browser HTTP');
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
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>John makes online transactions using the browser HTTP</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        John has used an outdated HTTP protocol to transfer funds and is vulnerable to attacks. Therefore, someone has accessed his account and made changes to his order. So the best solution to this problem is always to use the HTTPS protocol for secure transactions.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>John makes online transactions using the browser HTTP</strong></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        John has used an outdated HTTP protocol to transfer funds and is vulnerable to attacks. Therefore, someone has accessed his account and made changes to his order. So the best solution to this problem is always to use the HTTPS protocol for secure transactions.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                  </>)

                : <Text fontSize="4xl" color="white">
                    John, a student of fine arts, needs some new modern tools for his project. Unfortunately, he cannot find these tools in the local market. Therefore, he has decided to order these tools online. He has made transactions on the online platform that is using the HTTP protocol. After some days he receives an email regarding his ordered items. He becomes surprised to know that on his behalf some other irrelevant items were also added to the list. What factors might have played a role in this issue?
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
                    onClick={() => handleSubmit('Lack of attention when choosing items')}
                  >
                    Lack of attention when choosing items
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "380px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit("He forgot about the items")}
                  >
                    He forgot about the items
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "380px", height: "50px" }}
                    onClick={() => handleSubmit("John makes online transactions using the browser HTTP")}
                  >
                    John makes online transactions using the browser HTTP
                  </Button>
                </>
              }
            </Box>
          </Box>
        </Box>

        {/* LOWER PART FOR THE EMAIL/PHONE/TEXT */}
        <Flex direction="column" align="center" justify="center">
          <Box
            style={{ height: "800px", marginTop: '45px' }}
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
                style={{ height: "780px" }}
                p={8}
                width="89vw"
                objectFit="fill"
                src={q9}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
