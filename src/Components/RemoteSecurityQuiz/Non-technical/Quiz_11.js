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
import q11 from "../../../Images/Remote Work Graphics/q11.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_6({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey2Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState("Cloud Computing Technology");
  const [userAns, setUserAns] = useState('')

  //  ================ Submit Handler =====================//
  const handleSubmit = (ans) => {

    // === Setting the User Ans Here
    // === Either Phishing or Legitimate
    setUserAns(ans)

    // Adding Data to the State
    let data = {}
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
          <Box textAlign="center" height={userAns ? "230px" : "140px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Cloud Computing Technology</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Cloud Computing technology enables users to access storage, files, software, and servers through their Internet-connected devices such as computers, smartphones, tablets, and wearables. Data processing and storage are taken away from end-users by cloud computing companies. The most widely used cloud service providers are <strong>Amazon Web Services (AWS)</strong>, <strong>Microsoft Azure</strong>, and <strong>Google Cloud</strong>.  
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Cloud Computing Technology</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Cloud Computing technology enables users to access storage, files, software, and servers through their Internet-connected devices such as computers, smartphones, tablets, and wearables. Data processing and storage are taken away from end-users by cloud computing companies. The most widely used cloud service providers are <strong>Amazon Web Services (AWS)</strong>, <strong>Microsoft Azure</strong>, and <strong>Google Cloud</strong>.  
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">Identify the secure and effective communication method for the given remote work scenario. An organization wants to transfer its data to online services accessible to all employees.</Text>
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
                    style={{ width: "250px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Cloud Computing Technology')}
                  >
                   Cloud Computing Technology
                   </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "250px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Task Management Software')}
                  >
                    Task Management Software
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "250px", height: "50px" }}
                    onClick={() => handleSubmit('Remote Desktop Tools')}
                  >
                    Remote Desktop Tools
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
            bg="grey"
          >
            <div>
              <Image
                style={{ height: "380px" }}
                p={8}
                width="49vw"
                objectFit="fill"
                src={q11}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
