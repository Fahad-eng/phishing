import React from 'react'
import {
  Box, SimpleGrid, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
// import LazyLoad from 'react-lazy-load';
import LazyLoad from 'react-lazyload';



const PhishingEmails = ({ nextStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={1} style={{}}>

          <Box>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <Text fontSize="3xl" color="white" pb={2}>Tips to identify phishing emails</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <LazyLoad
              >
                <Image
                  width={"1100px"}
                  height={"600px"}
                  src="https://i.ibb.co/9bV6my2/Screenshot-32.png"
                  alt="Email_1"
                  style={{ cursor: "pointer" }}
                />
              </LazyLoad>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <LazyLoad
                debounce={false}
                offsetVertical={500}
              >
                <Image
                  width={"1100px"}
                  height={"600px"}
                  src="https://i.ibb.co/qm49XPj/Screenshot-33.png"
                  alt="Email_2"
                  style={{ cursor: "pointer" }}
                />
              </LazyLoad>
            </div>

            <br />

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "300px", height: "50px", width: "50vw", height: "50px" }}
                  onClick={() => nextStep()}>
                  Identifying Phishing Websites!
                  </Button>
              </Link>
            </div>
          </Box>
        </SimpleGrid>
      </Box >
    </>
  )
}

export default PhishingEmails;