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
import q10 from "../../../Images/EPaymentSecurityQuiz/q10.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_10({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey3Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState(['Choose a bank that complies with PCI DSS', 'Choose a bank that offers online transactions']);
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
          <Box textAlign="center" height={userAns ? "230px" : "170px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer[0] || userAns === correctAnswer[1] ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Choose a bank that complies with PCI DSS</strong> and <strong>Choose a bank that offers online transactions</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                      Greatly spotted! A well-known set of guidelines for improving the security of cardholders' personal information and the security of transactions involving credit, debit, and cash cards, is known as the Payment Card Industry Data Security Standard (PCI DSS). Generally speaking, credit card issuers demand PCI DSS compliance in order to secure online transactions and guard against identity theft. In addition, the bank also offers a secure online platform with two- or multi-factor authentication.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Choose a bank that complies with PCI DSS</strong> and <strong>Choose a bank that offers online transactions</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}><>A well-known set of guidelines for improving the security of cardholders' personal information and the security of transactions involving credit, debit, and cash cards, is known as the Payment Card Industry Data Security Standard (PCI DSS). Generally speaking, credit card issuers demand PCI DSS compliance in order to secure online transactions and guard against identity theft. In addition, the bank also offers a secure online platform with two- or multi-factor authentication.</></Text>

                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">An organization hired Emma as an account manager and asked her to open a new bank account as needed for the job. Apart from the financial packages, fees, and tax charges offered by the bank, what are the other features that help Emma choose a bank for secure and efficient transactions?</Text>
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
                    style={{ width: "350px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Choose a bank that complies with PCI DSS')}
                  >
                    Choose a bank that complies with PCI DSS
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "350px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Choose a reputable bank')}
                  >
                    Choose a reputable bank
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "350px", height: "50px" }}
                    onClick={() => handleSubmit('Choose non-interest banking')}
                  >
                    Choose non-interest banking
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "350px", height: "50px", marginTop: "0.5%" }}
                    onClick={() => handleSubmit('Choose a bank that offers online transactions')}
                  >
                    Choose a bank that offers online transactions
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
                src={q10}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
