import React from 'react'
import {
  Box, SimpleGrid, Text, Button, Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs"
// import LazyLoad from 'react-lazy-load';
import LazyLoad from 'react-lazyload';



const PhishingWebsites = ({ nextStep }) => {
  return (
    <>
      <Box height="100vh">
        <SimpleGrid columns={1} style={{}}>

          <Box>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <Text fontSize="3xl" color="white" pb={2}>Tips to identify phishing websites</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '17px' }}>

              <LazyLoad
              >
                <Image
                  width={"1100px"}
                  height={"600px"}
                  src="https://i.ibb.co/mbC1mc4/Screenshot-34.png"
                  alt="Website_1"
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
                  src="https://i.ibb.co/TcHDz4V/Screenshot-35.png"
                  alt="Website_2"
                  style={{ cursor: "pointer" }}
                />
              </LazyLoad>
            </div>

            <br />

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
              <Link>
                <Button colorScheme="gray" size="lg" rightIcon={<BsArrowRight />} style={{ width: "50vw", height: "50px" }}
                  onClick={() => nextStep()}>
                  Identifying Phishing SMS!
                  </Button>
              </Link>
            </div>
          </Box>
        </SimpleGrid>
      </Box >
    </>
  )
}

export default PhishingWebsites;