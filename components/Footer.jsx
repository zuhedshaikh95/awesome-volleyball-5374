
import {
    Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import {CiFacebook,CiTwitter} from "react-icons/ci"
import {AiOutlineYoutube} from "react-icons/ai"
// import logo from "../vatar/logo.png"



function Footer () {
   return (
    <>
       <Box bg="	#D3D3D3" width={"100vw"}  marginTop={"70px"}  >
    <Stack
    
      spacing="10"
      direction={{ base: 'column', md: 'row' }}
       
      py={{ base: '10', md: '12' }}
      justifyContent="space-evenly"
      margin={"auto"}
    >
      
      
        <Stack direction={["column","column","column","row"]} spacing="8" >
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Popular Locations
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Kolkata</Button>
              <Button variant="link">Mumbai</Button>
              <Button variant="link">Chennai</Button>
              <Button variant="link">Pune</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Trending Locations
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Bhubaneshwar</Button>
              <Button variant="link">Hyderabad</Button>
              <Button variant="link">Chandigarh</Button>
              <Button variant="link">Nashik</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              About US
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">About Becho Group</Button>
              <Button variant="link">Careers</Button>
              <Button variant="link">Contact Us</Button>
              <Button variant="link">BECHOPeople</Button>
              <Button variant="link">Waah Jobs</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              BECHO
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Help</Button>
              <Button variant="link">SiteMap</Button>
              <Button variant="link">Legal & Privacy information</Button>
              <Button variant="link">Blog</Button>
              <Button variant="link">Becho Autos Sell Car</Button>
            </Stack>
          </Stack>
        </Stack>
        
        <Stack  >
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Follow US
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
          <ButtonGroup variant="ghost" margin={"auto"}>
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaInstagram fontSize="2.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<CiFacebook fontSize="2.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<CiTwitter fontSize="2.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<AiOutlineYoutube fontSize="2.25rem" />} />

      </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>
    {/* </Stack> */}
    <Divider />
    <Stack
      pt="3"
      pb="6"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      bg={"#002f34"}
      color="white"
    >
       <Box  marginLeft={"30px"} display={"flex"}  justifyContent={"space-between"} width="25%">
        <Text fontSize={["12px","12px","12px","15px"]} as={"b"}>
          Other Countries
        </Text>
       <Text fontSize={["12px","12px","12px","15px"]}>
        Pakistan - South Africa - Indonesia
       </Text>
       </Box>

        <Box paddingRight={"30px"}>
        <Text>
       All rights reserved © 2006-2022 OLX
       </Text>
        </Box>
    </Stack>
  </Box>
    </>
   )
}

export default Footer
  

