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
import q13 from "../../../Images/Remote Work Graphics/q13.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_13({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey2Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState("Fear");
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
          <Box textAlign="center" height={userAns ? "450px" : "180px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Fear</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Fear, a psychological element, plays an important role in this scenario.   
                    </Text>
                    <Text color="white">
                        The human mind is neither a machine nor a software where the changes that have been done could be reflected right away. To change human behavior, we need conditioning and modeling of behavior through an awareness program. The elements that could be incorporated in designing a remote work security awareness are as follows:
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem><strong>Consistency</strong>: Short and consistent training sessions are more productive than lengthy and boring material. It is important to design training content as well as the mode of communication and media so that it could benefit the target audience thus inculcating a behavioral change in them.</ListItem>
                            <ListItem><strong>Fear</strong>: Creating a remote work security awareness means creating a culture where one can interact with systems without any fear. That means if something unintended has happened then there should be no fear of reporting it immediately.</ListItem>
                            <ListItem><strong>Reward</strong>: Human behavior can be modeled by attaching a reward to certain actions or behavioral acts that are intended by an organization. A positive reward or a prize, negative reward or punishment can be attached to the actions as far as remote security guidelines are concerned.</ListItem>
                            <ListItem><strong>Perception and understanding of risks attached to a remote working environment</strong>: All sorts of possible risks, and their probability should be visualized, and their causes and aftermath should be communicated and taught to the potential remote workers.</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Fear</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Fear, a psychological element, plays an important role in this scenario.   
                    </Text>
                    <Text color="white">
                        The human mind is neither a machine nor a software where the changes that have been done could be reflected right away. To change human behavior, we need conditioning and modeling of behavior through an awareness program. The elements that could be incorporated in designing a remote work security awareness are as follows:
                    </Text>
                    <Text color="white">
                        <UnorderedList>
                            <ListItem><strong>Consistency</strong>: Short and consistent training sessions are more productive than lengthy and boring material. It is important to design training content as well as the mode of communication and media so that it could benefit the target audience thus inculcating a behavioral change in them.</ListItem>
                            <ListItem><strong>Fear</strong>: Creating a remote work security awareness means creating a culture where one can interact with systems without any fear. That means if something unintended has happened then there should be no fear of reporting it immediately.</ListItem>
                            <ListItem><strong>Reward</strong>: Human behavior can be modeled by attaching a reward to certain actions or behavioral acts that are intended by an organization. A positive reward or a prize, negative reward or punishment can be attached to the actions as far as remote security guidelines are concerned.</ListItem>
                            <ListItem><strong>Perception and understanding of risks attached to a remote working environment</strong>: All sorts of possible risks, and their probability should be visualized, and their causes and aftermath should be communicated and taught to the potential remote workers.</ListItem>
                        </UnorderedList>
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">Hannah, the HR manager of a multinational company, works proficiently. Due to the epidemic, the company moved to cloud computing technology. Hannah has problems dealing with cloud technology, but she does not share her concerns with higher authorities because she is not in a position to be convicted or to be looked foolish. Which psychological factor plays an important role in this matter?</Text>
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
                    style={{ width: "550px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Consistency')}
                  >
                   Consistency
                   </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "550px", height: "50px" }}
                    onClick={() => handleSubmit('Fear')}
                  >
                    Fear
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "550px", height: "50px", marginRight: '1.5%', marginTop: '0.8%' }}
                    onClick={() => handleSubmit('Reward')}
                  >
                    Reward
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "550px", height: "50px", marginTop: '0.8%' }}
                    onClick={() => handleSubmit('Perception and understanding of risks attached to a remote working environment')}
                  >
                    Perception and understanding of risks attached to a remote working environment
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
                src={q13}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
