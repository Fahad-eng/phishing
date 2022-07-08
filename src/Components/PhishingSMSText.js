import React from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"

const PhishingSMSText = ({ nextStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={2} spacing={10} minChildWidth="520px" style={{ paddingTop: "150px" }}>
          <Container>
            <Box >
              <Text fontSize="3xl" color="white" pb={8}>5 Tips to identify phishing SMS:</Text>
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>1.	Check if the message is from an unusual number</Text>
              <br />
              
              <Text fontSize="lg" color="black">Well known brands have their numbers registered. Make sure you check if you are getting a message from an unknown number to share your personal details with them.</Text>
              <br />
              
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>2.	Check if the message is creating a sense of emergency</Text>
              <br />
              
              <Text fontSize="lg" color="black">Do not rush into clicking any link. Make sure you carefully read the message and check if it is legitimate.</Text>
              

            
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>3.	Refund scams</Text>
              <br />
              
              <Text fontSize="lg" color="black">Messages claiming that your account has been charged for some amount might not be legitimate. Make sure you check the sender’s authenticity before proceeding to any shared links.</Text>
              <br />
              
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>4.	Reactivate scams</Text>
              <br />
              
              <Text fontSize="lg" color="black">SMS messages saying that your account has been blocked might not be legitimate. Do not text back any code to reactivate your account.</Text>
              <br />
              
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>5.	Reward scams</Text>
              <br />
              
              <Text fontSize="lg" color="black">Do not fall for messages with rewards, prizes, and lotteries. If you want to confirm whether you have won a prize, rather than clicking on the hyperlink, reach out to the brand on their verified website/social media pages and double check.</Text>
              <br />
              <br />
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "300px", height: "50px" }}
                  onClick={() => nextStep()}>
                  Identifying Phishing SMS!
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

export default PhishingSMSText;