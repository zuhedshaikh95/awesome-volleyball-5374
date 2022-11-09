import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  TagLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const PostAdd = () => {
  const [photo, setPhoto] = useState([]);
  const [formData,setFormData] = useState({});

  const handlephoto = (e) => {
    setPhoto([...photo, URL.createObjectURL(e.target.files[0])]);
    setFormData({...formData,"photo":photo})
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value})
}
console.log(formData)

  return (
    <Box w={"70%"} m="auto">
      <form action="">
        <Heading>INCLUDE SOME DETAILS</Heading>
        <FormControl isRequired>
          <FormLabel>Brand</FormLabel>
          <Input placeholder="Brand" onChange={handleChange} name="brand" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Ad Title</FormLabel>
          <Input placeholder="Ad Title" onChange={handleChange} name="adtitle" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            type="text area"
            h={"200px"}
            name="description"
            onChange={handleChange}
          />
        </FormControl>
        <Heading>SET A PRICE</Heading>
        <FormControl isRequired>
          <FormLabel>Price</FormLabel>
          <Input placeholder="Price" type="number" name="price" onChange={handleChange}/>
        </FormControl>
        <Heading>UPLOAD UP TO 12 PHOTOS</Heading>
        <Input
          type="file"
          name="image"
          onChange={handlephoto}
          id="upload"
          w="100px"
          h="100px"
          hidden
        ></Input>
        <FormLabel
          htmlFor="upload"
          title="Click to choose a file"
          border={"2px"}
        >
          Hello
        </FormLabel>
        <Grid
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={6}
        >
          {photo?.map((el) => {
            return (
              <GridItem w="100%" h="10" bg="blue.500">
                <Image src={el}></Image>
              </GridItem>
            );
          })}
        </Grid>
        <Heading>Confirm Your Location</Heading>
        <select name="location" onChange={handleChange} >
            <option value="ghg">"n</option>
            <option value="sdljsd">ljksdlk</option>
            <option value="ljksl">ljksdlk</option>
        </select>
      </form>
    </Box>
  );
};

export default PostAdd;
