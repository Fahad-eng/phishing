import React from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"

const PhishingWebsiteText = ({ nextStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={2} spacing={10} minChildWidth="520px" style={{ paddingTop: "150px" }}>
          <Container>
            <Box >
              <Text fontSize="3xl" color="white" pb={8}>5 Tips to identify phishing websites:</Text>
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>1.	Check the URL</Text>
              <br />
              
              <Text fontSize="lg" color="black">Inspect the URLs too see if the domain names are legitimate. Ex. A website that ends with .com could be changed to .org or O with a 0 (www.yaho0.orginstead of www.yahoo.com)</Text>
              <br />
              
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>2.	Check for a valid certificate</Text>
              <br />
              
              <Text fontSize="lg" color="black">Check if there is a secure lock next to the URL or click on the URL to see if it is secure or not (https not http)</Text>
              <br />
            
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>3.	Assess the content on the website</Text>
              <br />
              
              <Text fontSize="lg" color="black">A legitimate website will have sharp graphic with correct spellings and grammar. On a phishing website, the branding would be the same but the whole experience will not be up to the mark. </Text>
              <br />
              
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>4.	Check who owns the website</Text>
              <br />
              
              <Text fontSize="lg" color="black">You might think that you are on the website of a leading brand, but the web address is registered to an individual in another country. If you feel that the website is suspicious, check them out on WHOIS to see who owns it.</Text>
              <br />
              
              <Text fontSize="xl" color="black" style={{fontWeight:'bolder'}}>5.	Read online reviews</Text>
              <br />
              
              <Text fontSize="lg" color="black">Do a little bit research about the unknown website you are going to visit. There is a good chance that victims will go online and post about the fraudulent websites and share their experience.</Text>
              <br />
              <br />
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "300px", height: "50px" }}
                  onClick={() => nextStep()}>
                  Identifying Phishing Websites!
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

export default PhishingWebsiteText;