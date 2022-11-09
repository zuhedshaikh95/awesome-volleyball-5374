import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sellpage = () => {
  return (
    <>
    <Heading>Post Your Ad</Heading>
      <Box w={"50%"} m="auto" border={"1px solid"} borderColor="whitesmoke"  mt={"5%"}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Mobiles
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
              <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">Mobile Phones </Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">Accessories</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke"> Tablets</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Bikes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
            <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">Motorcylces</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">Scooters</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke"> Spare Parts</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke"> Bicycles</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Furniture
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
            <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">Sofa Dining</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">Beds & Wardrobes</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Kids Furniture</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Home Decor & Garden</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Fashion
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
            <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">Men</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">Women</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke"> Kids</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Properties
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
            <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">For Sale: Houses & Apartments</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">For Rent: Houses & Apartments</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">For Sale: Shops & Offices</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">For Rent: Shops & Offices</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">PG & Guest Houses</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Electronic and Appliances
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
            <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">TV, Video - Audio</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">Computer & Laptops</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Cameras & Lenses</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Games & Entertainment</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Fridges</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Computer Accessories</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke">Wasing Machine</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Bikes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={"100%"} padding="0px" fontSize={{sm:"20px" , md:"20px", lg:"22px"}} textAlign="initial" pl={"20px"} color="gray">
            <Link to="/">
                <Box borderBottom={"1px"} borderBottomColor="whitesmoke">Motorcylces</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"2px"} borderBottomColor="whitesmoke">Scooters</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke"> Spare Parts</Box>
              </Link>
              <Link to="/">
                <Box  borderBottom={"1px"} borderBottomColor="whitesmoke"> Bicycles</Box>
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default Sellpage;
