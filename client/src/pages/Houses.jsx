import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  Skeleton,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Houses = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("India");
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(200000);

  useEffect(() => {
    axios
      .get(`https://olx-data-server-hwrf.onrender.com/houses`)
      .then(({ data }) => {
        setData(data);
        setFilterData(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  useEffect(() => {
    setLoading(false);
    if (city) {
      setFilterData(data.filter((item) => item.address.includes(city)));
    } else if (city === "India") {
      setFilterData(data);
    }

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [city]);

  const handlePriceLimit = () => {
    setLoading(false);
    setFilterData(
      filterData.filter((item) => item.price >= minFilter && item.price <= maxFilter)
    );
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  return (
    <Container maxW="95%" p={0} textAlign="left">
      <Heading color="#002F34" fontSize="2xl">
        Used houses in {city}
      </Heading>
      <Flex w="100%" justifyContent="space-between">
        <Box
          w="25%"
          h="100vh"
          display={{ base: "none", md: "block" }}
        >
          <Box p={4}>
            <Text fontWeight="bold" my={4}>Location</Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      India
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pl={10}
                  pb={0}
                  cursor="pointer"
                  color="rgba(0,47,52,.64)"
                  fontSize="14px"
                  onClick={() => setCity("Kerala")}
                >
                  Kerala
                </AccordionPanel>
                <AccordionPanel
                  pl={10}
                  pb={0}
                  cursor="pointer"
                  color="rgba(0,47,52,.64)"
                  fontSize="14px"
                  onClick={() => setCity("Delhi")}
                >
                  Delhi
                </AccordionPanel>
                <AccordionPanel
                  pl={10}
                  pb={0}
                  cursor="pointer"
                  color="rgba(0,47,52,.64)"
                  fontSize="14px"
                  onClick={() => setCity("Mumbai")}
                >
                  Mumbai
                </AccordionPanel>
                <AccordionPanel
                  pl={10}
                  pb={0}
                  cursor="pointer"
                  color="rgba(0,47,52,.64)"
                  fontSize="14px"
                  onClick={() => setCity("Pune")}
                >
                  Pune
                </AccordionPanel>
                <AccordionPanel
                  pl={10}
                  pb={0}
                  cursor="pointer"
                  color="rgba(0,47,52,.64)"
                  fontSize="14px"
                  onClick={() => setCity("Bangalore")}
                >
                  Bangalore
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box p={4}>
            <Box borderBottom="1px solid #CFCDCD">
              <Text fontWeight="bold">Budget</Text>
              <HStack justifyContent="space-between">
                <Text>
                  {minFilter.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                    style: "currency",
                    currency: "INR",
                  })}
                </Text>
                <Text>
                  {maxFilter.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                    style: "currency",
                    currency: "INR",
                  })}
                </Text>
              </HStack>
              <RangeSlider
                colorScheme="teal"
                aria-label={["min", "max"]}
                max={200000}
                min={0}
                defaultValue={[0, 200000]}
                onChange={(val) => {
                  setMinFilter(val[0]);
                  setMaxFilter(val[1]);
                }}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Button onClick={() => handlePriceLimit()}>Apply</Button>
            </Box>
          </Box>
          <Button onClick={() => {
            window.location.reload();
          }}>Reset Filters</Button>
        </Box>
        <Box w={{ base: "100%", md: "74%" }}>
          <Flex justifyContent="space-between">
            <Text>
              {filterData.length} ads in{" "}
              <span style={{ color: "#002F34", fontWeight: "bold" }}>
                {city}
              </span>
            </Text>
            <HStack w="200px">
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize="14px"
                  variant="ghosted"
                  rightIcon={<ChevronDownIcon />}
                >
                  SORT BY:
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setLoading(false);
                      setFilterData(
                        filterData.sort((a, b) => a.price - b.price)
                      );
                      setTimeout(() => {
                        setLoading(true);
                      }, 1000);
                    }}
                  >
                    Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setLoading(false);
                      setFilterData(
                        filterData.sort((a, b) => b.price - a.price)
                      );
                      setTimeout(() => {
                        setLoading(true);
                      }, 1000);
                    }}
                  >
                    High to Low
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
          <Flex gap={5} flexWrap="wrap" justifyContent="flex-start" w="100%">
            {filterData.map((item) => (
              <Skeleton key={item._id} w="300px" h="auto" isLoaded={loading}>
                <Link to={`/houses/${item._id}`}>
                <Box
                  width="100%"
                  h="270px"
                  borderWidth="2px"
                  borderRadius="md"
                  border="1px solid rgba(0, 0, 0, 0.30)"
                  overflow="hidden"
                  cursor="pointer"
                  className="hover-location"
                >
                  <Flex
                    position="relative"
                    height="160px"
                    margin="8px"
                    justifyContent="center"
                    align="start"
                  >
                    <Image height="160px" src={item.image[0]} alt="" />
                  </Flex>

                  <Box h="72px" p="2" pl="4">
                    <Box
                      fontSize="20px"
                      color="002f34"
                      fontWeight="700"
                      lineHeight="23pxpx"
                    >
                      {item.price.toLocaleString("en-IN", {
                        maximumFractionDigits: 0,
                        style: "currency",
                        currency: "INR",
                      })}
                    </Box>

                    <Box
                      mt="1"
                      as="h4"
                      lineHeight="16px"
                      fontSize="16px"
                      fontWeight={500}
                      noOfLines={1}
                      color="black"
                      opacity="100%"
                    >
                      {item.address}
                    </Box>

                    <Box
                      display="flex"
                      mt="2"
                      fontSize="14px"
                      alignItems="center"
                      justifyContent="space-between"
                      color="002f34"
                      opacity="64%"
                    >
                      {item.furnished}
                      <Box
                        as="span"
                        ml="2"
                        fontSize="12px"
                        color="222f34"
                        opacity="64%"
                      >
                        {item.postDate}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                </Link>
              </Skeleton>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Houses;
