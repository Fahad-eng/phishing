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
import q14 from "../../../Images/Remote Work Graphics/q14.png"
import QuizContext from "../../../Context/Quiz/QuizContext";
import UserContext from "../../../Context/User/UserContext";

export default function Quiz_14({ nextStep, step, index }) {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  const { addSurvey1Data } = quizContext;
  const { user } = userContext;

  const [hover, setHover] = useState(false)
  const [correctAnswer] = useState("Missing encryption mechanism on internal data");
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
          <Box textAlign="center" height={userAns ? "230px" : "150px"}>
            <Flex direction="column" align="center" justify="center" pt={4}>

              {userAns ?
                (userAns === correctAnswer ?
                  <>
                    <Text fontSize="3xl" color="#66FF00" width="80vw" pt={2}>Correct! The correct answer is <strong>Missing encryption mechanism on internal data</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Data encryption provides data integrity and confidentiality. Therefore, the encryption mechanism should be applied to all forms of data, i.e., in data rest and in data transit. Any missing encryption standards can damage an organization’s data. There are mostly two encryption mechanisms that are symmetric and asymmetric encryption techniques. 
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}>Hopefully you will be aware next time whenever you face a situation like this</Text></>
                  : <>
                    <Text fontSize="3xl" color="red" width="80vw" pt={2}>The correct answer is <strong>Missing encryption mechanism on internal data</strong>.</Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={3}>
                    Data encryption provides data integrity and confidentiality. Therefore, the encryption mechanism should be applied to all forms of data, i.e., in data rest and in data transit. Any missing encryption standards can damage an organization’s data. There are mostly two encryption mechanisms that are symmetric and asymmetric encryption techniques. 
                    </Text>
                    <Text fontSize="xl" color="white" width="80vw" pt={6}><>Hopefully you will be aware next time whenever you face a situation like this</></Text>
                  </>)

                : <Text fontSize="4xl" color="white">Data encryption is used to maintain the privacy and integrity of the data. Even though an organization's traffic travels across an encrypted network, the attacker is still able to view the company's data remotely. What possibly causes an attacker to gain access to a company's internal network?</Text>
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
                    style={{ width: "3  50px", height: "50px", marginRight: '1.5%' }}
                    onClick={() => handleSubmit('Missing encryption mechanism on internal data')}
                  >
                   Missing encryption mechanism on internal data
                   </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "350px", height: "50px", marginRight: "1.5%" }}
                    onClick={() => handleSubmit('Lack of Antivirus software')}
                  >
                    Lack of Antivirus software
                  </Button>
                  <Button
                    colorScheme="gray" size="lg"
                    style={{ width: "350px", height: "50px" }}
                    onClick={() => handleSubmit('Absence of remote work policy')}
                  >
                    Absence of remote work policy
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
                width="50vw"
                objectFit="fill"
                src={q14}
                alt="Segun Adebayo"
              />
            </div>
          </Box>
        </Flex>
      </SimpleGrid >
    </>
  );
}
