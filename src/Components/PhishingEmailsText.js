import React from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"

const PhishingEmailText = ({ nextStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={2} spacing={10} minChildWidth="520px" style={{ paddingTop: "150px" }}>
          <Container>
            <Box >
              <Text fontSize="3xl" color="white" pb={8}>5 Tips to identify phishing emails:</Text>
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>1.	Check if the email is sent from a public domain </Text>
              <br/>
              <Text fontSize="lg" color="black">No legitimate organization will use @gmail.com as their domain. Ex. Legitimate emails from google will end at ‘@google.com’</Text>
              <br/>

              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>2.	Check if the domain name is misspelt</Text>
              <br/>

              <Text fontSize="lg" color="black">Scammers try to send emails with similar domain names. Ex. @app1e.com instead of apple.com</Text>
              <br/>
              
            
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>3.	Check if the email includes suspicious attachments or links</Text>
              <br/>

              <Text fontSize="lg" color="black">Hover over the attachments or links to see where it will be redirecting you. The links can be deceptive. Ex. Link in the email: “https://www.google.com/xyz@123” actually redirecting to: “http://www.go0gle.co/xyz@123”</Text>
              <br/>

              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>4.	Check if the email creates a sense of urgency</Text>
              <br/>

              <Text fontSize="lg" color="black">Be careful with emails that rush you to take some action. Read the email carefully before replying or clicking on the links. Look if the links are secure (https)</Text>
              <br/>

              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>5.	Check if the web and email addresses look genuine or not</Text>
              <br/>

              <Text fontSize="lg" color="black">Examine the email addresses carefully. They may look genuine but are actually not. Ex. @mail.airbnb.work instead of @airbnb.com</Text>
              <br />
              <br />
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "300px", height: "50px" }}
                  onClick={() => nextStep()}>
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

export default PhishingEmailText;