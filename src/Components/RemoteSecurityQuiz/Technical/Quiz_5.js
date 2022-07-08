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
import q5 from "../../../Images/Remote Work Graphics/q5.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_1({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey1Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState('Unauthorized Access');
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
          <Box textAlign="center" height={userAns ? "230px" : "110px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Unauthorized Access</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                      Greatly spotted! The risk of unauthorized access is best fitted in this scenario because each company employee has access to folders and files. Unauthorized access happens when the system owner unintentionally allows an entry to someone who is not allowed to use or connect to the system.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Unauthorized Access</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        The risk of unauthorized access is best fitted in this scenario because each company employee has access to folders and files. Unauthorized access happens when the system owner unintentionally allows an entry to someone who is not allowed to use or connect to the system.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">Because of the epidemic, an organization is moving towards remote work. The organization used cloud storage to store company data and files. Every employee of the company has access to folders and files. What type of threat is most likely to be materialized in this scenario?</Text>
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
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Account Hijacking')}
                  >
                    Account Hijacking
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Denial of Services')}
                  >
                    Denial of Services
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Unauthorized Access')}
                  >
                    Unauthorized Access
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px" }}
                    onClick={() => handleSubmit('Lack of Visibility')}
                  >
                    Lack of Visibility 
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
