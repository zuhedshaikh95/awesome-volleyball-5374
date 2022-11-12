import { Badge, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const ProductCard = (props) => {
  const { item } = props;

  return (
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
        <Image height="160px" src={item.productImages[0]} alt="" />
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
          {item.productName}
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
          {item.model}
          <Box as="span" ml="2" fontSize="12px" color="222f34" opacity="64%">
            {item.postedOn}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;

/*{
    "_id": "636dec791686f855f80522f6",
    "productImages": [
        "https://apollo-singapore.akamaized.net/v1/files/qmn5w3pyl3u12-IN/image;s=780x0;q=60",
        "https://apollo-singapore.akamaized.net/v1/files/2qr8mtvfc6bb1-IN/image;s=780x0;q=60",
        "https://apollo-singapore.akamaized.net/v1/files/vv06fbgxd5gl1-IN/image;s=780x0;q=60",
        "https://apollo-singapore.akamaized.net/v1/files/2pev5bf6fdfu-IN/image;s=780x0;q=60"
    ],
    "productName": "Benalli TNT 25",
    "brandName": "Benalli",
    "yearOfPurchase": 2008,
    "model": "Benalli TNT 25 - well maintained and less used",
    "physicalCondition": "Working fine",
    "description": "Benalli TNT 25 - well maintained and less used. Stable and smooth to ride. Only super bike which can be used for short and long distance.",
    "price": 149000,
    "location": "Feroke, Kozhikode, Kerala",
    "postedOn": "10 weeks ago",
    "featured": true,
    "type": "bike"
}*/
