import React from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

const PhishingMethod = ({ nextStep, setStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={2} spacing={10} minChildWidth="520px" style={{ paddingTop: "150px" }}>
          <Container>
            <Box >
              <Text fontSize="3xl" color="white" pb={8}>Common Phishing methods:</Text>
              <Text fontSize="lg" color="black">1.	Copying images</Text>
              <Text fontSize="lg" color="black">2.	Copying page designs</Text>
              <Text fontSize="lg" color="black">3.	Similar domain names – ex: google.com  =&gt; go0gle.com</Text>
              <Text fontSize="lg" color="black">4.	Deceptive hyperlinks – ex: https://www.google.com redirecting to www.go0gle.com</Text>
              <br />

              <Text pt={6} fontSize="3xl" color="white" pb={8}>Why do people fall for these scams?</Text>

              <Text fontSize="lg" color="black">1.	Visual deception and usability issues</Text>
              <Text fontSize="lg" color="black">2.	Familiarity and likability of the email or the sender</Text>
              <Text fontSize="lg" color="black">3.	Sense of fear </Text>
              <Text fontSize="lg" color="black">4.	Getting a reward</Text>
              <Text fontSize="lg" color="black">5.	Sense of urgency or scarcity</Text>
              <Text fontSize="lg" color="black">6.	The email/SMS coming from an authoritative source</Text>
              <Text fontSize="lg" color="black">7.	Creating an illusion that everyone else is complying</Text>
              <br />
              <br />
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "300px", height: "50px" }}
                  onClick={() => {
                    setStep(48)
                  }}>
                  Identifying Phishing Emails!
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

export default PhishingMethod;