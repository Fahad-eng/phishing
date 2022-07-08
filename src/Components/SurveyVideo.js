import React from "react"
import ReactPlayer from "react-player"
import { Box, Button } from "@chakra-ui/react"
import { CgPlayTrackNextO } from "react-icons/cg"

function SurveyyVideo({ nextStep }) {
  return (
    <>
      <Box pt={8} pl={8}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PiV2lldKADc&feature=youtu.be"
          controls="true"
          width="95vw"
          height="70vh"
        />
      </Box>

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
        <Button
          colorScheme="gray" size="lg" rightIcon={<CgPlayTrackNextO style={{ fontSize: '20px' }} />}
          style={{ width: "50vw", height: "50px" }}
          onClick={() => nextStep()}
        > Continue To Survey 2
              </Button>
      </div>
    </>
  )
}

export default SurveyyVideo