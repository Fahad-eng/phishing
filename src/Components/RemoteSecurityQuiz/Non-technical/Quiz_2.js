import React, { useState, useContext } from 'react';
import Moment from 'react-moment';
import {
  Flex, Box, Button, Text, SimpleGrid,
  Breadcrumb, BreadcrumbItem,
  BreadcrumbLink, Tag, Avatar, TagLabel,
  TagRightIcon, Image, Popover, PopoverTrigger,
  PopoverContent,
  PopoverBody, PopoverCloseButton, UnorderedList, ListItem,
} from '@chakra-ui/react';
import { CgDanger, CgClose, CgPlayTrackNextO } from "react-icons/cg"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { MdLocalPrintshop, MdAttachment, MdStarBorder } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoMdShareAlt, IoMdArrowDropdown } from "react-icons/io"
import q2 from "../../../Images/Remote Work Graphics/q2.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_2({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey2Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['TeamViewer', 'AnyDesk', 'RemotePC', 'Zoho Assist', 'ConnectWise Control (logo)']);
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
          <Box textAlign="center" height={userAns ? "320px" : "110px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] || userAns === correctAnswer[2] || userAns === correctAnswer[3] || userAns === correctAnswer[4] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>All answers are correct.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        All these softwares are used to access desktops remotely. However, TeamViewer and AnyDesk are the most popular remote desktop tools because they have the following best features:
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem>User friendly</ListItem>
                            <ListItem>Platform Independent</ListItem>
                            <ListItem>Remote printing</ListItem>
                            <ListItem>VPN alternative</ListItem>
                            <ListItem>Group Policies</ListItem>
                            <ListItem>Privacy Mode</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                      {console.log("Wrong Answer")}
                    </>)

                : <Text fontSize="4xl" color="white">Remote desktop software is used to provide access to company systems for remote work. Below are some popular remote desktop tools, highlight the tools you are familiar with</Text>
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
                    onClick={() => handleSubmit('TeamViewer')}
                  >
                    TeamViewer
                  </Button>
                <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('AnyDesk')}
                  >
                    AnyDesk
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('RemotePC')}
                  >
                    RemotePC
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Zoho Assist')}
                  >
                    Zoho Assist
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "230px", height: "50px" }}
                    onClick={() => handleSubmit('ConnectWise Control (logo)')}
                  >
                    ConnectWise Control (logo)
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
