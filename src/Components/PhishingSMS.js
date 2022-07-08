import React from 'react'
import {
  Box, SimpleGrid, Container, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
// import LazyLoad from 'react-lazy-load';
import LazyLoad from 'react-lazyload';


const PhishingSMS = ({ nextStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={1} style={{ paddingTop: "30px" }}>
          <Box>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <Text fontSize="3xl" color="white" pb={2}>Tips to identify phishing SMS</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <LazyLoad
              >
                <Image
                  width={"1000px"}
                  height={"550px"}
                  src="https://i.ibb.co/6Pq77jw/Screenshot-36.png"
                  alt="Website_1"
                  style={{ cursor: "pointer" }}
                />
              </LazyLoad>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "300px", height: "50px", width: "50vw", height: "50px" }}
                  onClick={() => nextStep()}>
                  Continue To Survey 2
                  </Button>
              </Link>
            </div>
          </Box>
        </SimpleGrid>
      </Box >
    </>
  )
}

export default PhishingSMS;