import React, { useState, useEffect, useContext } from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import QuizContext from "../Context/Quiz/QuizContext";
import UserContext from "../Context/User/UserContext";
// import { appendSpreadsheet } from '../Backend/GoogleSheet'
import moment from 'moment';


const ResultPage = ({ nextStep, setStep }) => {


  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);


  const { survey1 } = quizContext;
  const { user } = userContext;

  console.log(survey1)


  const [score, setScore] = useState(0)
  const [random, setRandom] = useState(null)


  useEffect(() => {
    setRandom(Math.round(Math.random() * 1))
  }, [])


  useEffect(() => {

    let modifySurvey = survey1.sort((a, b) => {
      let keyA = Number(Object.keys(a)[0].split('Question')[1]);
      let keyB = Number(Object.keys(b)[0].split('Question')[1]);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })

    setScore(modifySurvey.map((question, index) => question[`Question${index + 1}`]).reduce((a, b) => a + b, 0))
  }, [])



  useEffect(() => {
    let modifySurvey = survey1.sort((a, b) => {
      let keyA = Number(Object.keys(a)[0].split('Question')[1]);
      let keyB = Number(Object.keys(b)[0].split('Question')[1]);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })

    // appendSpreadsheet({
    //   Name: user[0].name, Email: user[0].email, Age: user[0].age, Gender: user[0].gender,
    //   City: user[0].city, Occupation: user[0].occupation, Field: user[0].field, Q1_E_A: modifySurvey[0].Question1,
    //   Q2_E_F: modifySurvey[1].Question2, Q3_W_RR: modifySurvey[2].Question3, Q4_W_SP: modifySurvey[3].Question4,
    //   Q5_M_L: modifySurvey[4].Question5, Q6_M_RR: modifySurvey[5].Question6, Q7_E_L: modifySurvey[6].Question7,
    //   Q8_E_US: modifySurvey[7].Question8, Q9_W_A: modifySurvey[8].Question9, Q10_W_F: modifySurvey[9].Question10,
    //   Q11_M_US: modifySurvey[10].Question11, Q12_M_SP: modifySurvey[11].Question12, Material: modifySurvey[11].Material,
    //   Score_1: modifySurvey.map((question, index) => question[`Question${index + 1}`]).reduce((a, b) => a + b, 0),
    //   Date: moment().format('DD-MM-YYYY')
    // }, 1)
  }, [])


  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={2} spacing={10} minChildWidth="520px" style={{ paddingTop: "150px" }}>
          <Container>
            <Box >
              <Text fontSize="3xl" color="white">Good attempt!</Text>
              <Text fontSize="3xl" color="white">You have identified {score}/8 answers correctly.</Text>
              <br />
              <Text fontSize="xl"><>It is extremely important that you understand how to identify phishing attempts through emails, websites, and text messages. Let us revise a few major pointers to help you in identification and prevention of these phishing scams in a few minutes!</></Text>
              <br />
              <Text fontSize="xl" pb={8}><>We will then test if we have improved our performance!</></Text>
              <br />
              <Link >
              <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "500px", height: "50px" }}
                  onClick={() => {
                    setStep(1)
                  }}>
                  Hopefully next time you will be aware of possible attacks
                  </Button>
              </Link>
            </Box>
          </Container>
          <Container>
            <Box style={{ paddingTop: "10%" }}>
              <Image
                borderRadius="full"
                objectFit="cover" src="https://i.ibb.co/qJvYrnR/results-survey1.png" alt="Main Page" />
            </Box>
          </Container>
        </SimpleGrid>
        <SimpleGrid>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#daded4" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,240C672,256,768,256,864,229.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </Box>
        </SimpleGrid>
      </Box >
    </>
  )
}

export default ResultPage;