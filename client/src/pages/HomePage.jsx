import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { getData } from "../api/api";
import { Link, useSearchParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import Footer from "../components/Footer";
import NoData from "./NoData";
import { AppContext } from "../AuthContext/AppContextProvider";

const setIntoNum = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 2;
  }
  if (!value) {
    value = 2;
  }
  return value;
};

function HomePage() {
  const [products, setProducts] = useState([]);
  const toast = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialVal = setIntoNum(searchParams.get("limit"));
  const [limit, setLimit] = useState(initialVal * 2);
  const { addToFav, favItem } = useContext(AppContext);

  useEffect(() => {
    getData({
      limit: limit,
    }).then((res) => {
      setProducts(res.data);
      setIsLoaded(false);
      if (products.length === 0) {
        return <NoData />;
      }
    });
  }, [limit]);

  useEffect(() => {
    setSearchParams({ limit });
  }, [limit]);

  useEffect(() => {
    setInterval(() => {
      setIsLoaded(true);
    }, 2000);
  }, [!isLoaded]);

  const addFav = (item) => {
    addToFav(item);
    toast({
      title: "Added.",
      description: "Added to favorites.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box width={"90%"} margin="auto">
        <Box display={"flex"}>
          <Text fontSize={["22px", "24px", "26px", "32px"]}>
            Fresh recommendations
          </Text>
        </Box>

        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap={"20px"}
          margin="auto"
          marginTop={"20px"}
        >
          <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
            <Box
              p={4}
              bg={"#6495ED"}
              borderRadius="10px"
              height={"400px"}
              marginTop="20px"
              color="white"
            >
              <Box margin={"auto"}>
                <Text fontSize={"21px"} as="b">
                  Want to see your stuff here?
                </Text>
              </Box>
              <Box margin={"auto"} marginTop={"20px"}>
                <Text fontSize={"21px"}>
                  Make some extra cash by selling things in your community.Go on, it's quick and easy
                </Text>
              </Box>
              <Button
                border={"5px solid"}
                colorScheme="white"
                variant={"outline"}
                marginTop={"170px"}
                width="90%"
                fontSize={"20px"}
                p={6}
              >
                Start selling
              </Button>
            </Box>
          </Skeleton>
          {products.map((item) => (
              <Box
                key={item.id}
                margin={"auto"}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box
                  onClick={() => addFav(item)}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <FiHeart
                    size={25}
                    style={{ marginRight: "10px", marginTop: "20px" }}
                  />
                  {/* </Tooltip> */}
                </Box>
                {item.featured === true ? (
                  <Skeleton
                    startColor="black"
                    endColor="white"
                    isLoaded={isLoaded}
                  >
                    <Box
                      width="30%"
                      bg={"orange"}
                      p={1}
                      marginBottom="20px"
                      marginLeft={"10px"}
                    >
                      <Text>FEATURED</Text>
                    </Box>
                  </Skeleton>
                ) : null}
                <Skeleton
                  startColor="black"
                  endColor="white"
                  isLoaded={isLoaded}
                >
                  <Link to={`${item.type}/${item._id}`}>
                    <Box margin={"auto"} width={"90%"}>
                      <Image
                        margin={"auto"}
                        width={"90%"}
                        height={"220px"}
                        src={item.productImages}
                      />
                    </Box>
                  </Link>
                </Skeleton>

                <Box p="6">
                  <Skeleton
                    startColor="black"
                    endColor="white"
                    isLoaded={isLoaded}
                  >
                    <Link to={`${item.type}/${item._id}`}>
                      <Box
                        mt="1"
                        lineHeight="tight"
                        noOfLines={1}
                        display="flex"
                      >
                        <Text
                          fontSize={["22px", "24px", "26px", "28px"]}
                          as="b"
                        >
                          ₹ {item.price}
                        </Text>
                      </Box>
                    </Link>
                  </Skeleton>
                  <Skeleton
                    startColor="black"
                    endColor="white"
                    isLoaded={isLoaded}
                  >
                    <Link to={`${item.type}/${item._id}`}>
                      <Box mt="1" lineHeight="tight" noOfLines={1}>
                        <Text
                          fontSize={["13px", "14px", "15px", "18px"]}
                          color={"grey"}
                        >
                          {item.description}
                        </Text>
                      </Box>
                    </Link>
                  </Skeleton>

                  <Link to={`${item.type}/${item._id}`}>
                    <Box
                      mt="1"
                      lineHeight="tight"
                      display={"flex"}
                      justifyContent="space-between"
                      color={"grey"}
                      marginTop="10px"
                      width="100%"
                    >
                      <Skeleton
                        startColor="black"
                        endColor="white"
                        isLoaded={isLoaded}
                      >
                        <Box>
                          <Text fontSize={["12px", "12px", "12px", "15px"]}>
                            {item.location}
                          </Text>
                        </Box>
                      </Skeleton>
                      <Skeleton
                        startColor="black"
                        endColor="white"
                        isLoaded={isLoaded}
                      >
                        <Box>
                          <Text fontSize={["12px", "12px", "12px", "15px"]}>
                            {item.postedOn}
                          </Text>
                        </Box>
                      </Skeleton>
                    </Box>
                  </Link>
                </Box>
              </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Skeleton startColor="black" endColor="white" isLoaded={isLoaded}>
        <Box marginTop={"50px"}>
          <Button
            fontSize={"19px"}
            as="b"
            bg={"white"}
            border="3px solid"
            p={7}
            onClick={() => setLimit((limit + 1))}
          >
            Load more
          </Button>
        </Box>
      </Skeleton>
    </>
  );
}

export default HomePage;
