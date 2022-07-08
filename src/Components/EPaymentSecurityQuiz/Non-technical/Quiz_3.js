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
import q3 from "../../../Images/EPaymentSecurityQuiz/q3.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_3({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState('Someone gets her credentials from an open browser');
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
          <Box textAlign="center" height={userAns ? "200px" : "140px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>
              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The most possible scenario is that someone got her credentials from an open browser.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        Greatly spotted! She likely didn't log out of her account, thus the subsequent user could simply access her account by looking through history.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw">
                        Another possibility is that she might have logged out, but neglected to clear her web cache. Therefore, the browser menu should be used to delete pages that the browser has saved for later use.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}><b>The most possible scenario is that someone got her credentials from an open browser.</b></Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                        She likely didn't log out of her account, thus the subsequent user could simply access her account by looking through history.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw">
                        Another possibility is that she might have logged out, but neglected to clear her web cache. Therefore, the browser menu should be used to delete pages that the browser has saved for later use.
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text>
                  </>)

                : <Text fontSize="4xl" color="white">Emma buys goods through an online shopping application and enters credit card information, in case of an emergency she forgets to close the browser before leaving. A few days later, she receives a message that you have ordered some items. She checks her bank balance to make sure the message is not spam. What is the possible circumstance of how transactions were made on her behalf?</Text>
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
                    onClick={() => handleSubmit('She has shared her bank credentials with someone else')}
                  >
                    She has shared her bank credentials with someone else
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "360px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Someone gets her credentials from an open browser')}
                  >
                    Someone gets her credentials from an open browser
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "360px", height: "50px" }}
                    onClick={() => handleSubmit('She forgot about the transaction')}
                  >
                    She forgot about the transaction
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
                src={q3}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
