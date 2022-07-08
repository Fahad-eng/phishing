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
import q16 from "../../../Images/Remote Work Graphics/q16.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_16({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey2Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState("Maintain backup of data on another server or system");
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
    // step<1  step
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
          <Box textAlign="center" height={userAns ? "220px" : "150px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Maintain backup of data on another server or system</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The most suitable solution is that he should keep a data backup on another server. He might have access to his data if a server or system is breached.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Maintain backup of data on another server or system</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The most suitable solution is that he should keep a data backup on another server. He might have access to his data if a server or system is breached.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">John, a business management instructor, keeps all his student records online on a single server during remote work. The attacker gains access and corrupts all its data. How does he recover his data efficiently in case of data loss during remote work?</Text>
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
                    style={{ width: "400px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Ask students to resend all their assignments')}
                  >
                   Ask students to resend all their assignments
                   </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "400px", height: "50px", marginRight: "1.5%" }}
                    onClick={() => handleSubmit('Maintain backup of data on another server or system')}
                  >
                    Maintain backup of data on another server or system
                </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "400px", height: "50px" }}
                    onClick={() => handleSubmit("By installing antivirus software")}
                  >
                    By installing antivirus software
                  </Button>
                </>
              }
            </Box>
          </Box>
        </Box>

        {/* LOWER PART FOR THE EMAIL/PHONE/TEXT */}
        <Flex direction="column" align="center" justify="center">
          <Box
            style={{ height: "400px", marginTop: '45px' }}
            p={8}
            width="50vw"
            // maxWidth="700px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            bg="white"
          >
            <div>
              <Image
                style={{ height: "380px" }}
                p={8}
                width="49vw"
                objectFit="fill"
                src={q16}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
