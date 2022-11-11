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
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";

let imgarray = []
const PostAdd = () => {
  const [photo, setPhoto] = useState([]);
  const [formData, setFormData] = useState({});

  const handlephoto = (e) => {
    let image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "olxuploadimg");
    data.append("cloud_name", "dcmmvm9mf");

    fetch("https://api.cloudinary.com/v1_1/dcmmvm9mf/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        let url = data.url
        setPhoto([...photo,url]);
        imgarray.push(url)
      }).catch((err)=>{
        console.log(err)
      })
    setFormData({ ...formData, image: imgarray });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  console.log(formData);
  const handleSubmit = async () => {
    let response = await axios.post("http://localhost:8080/bikes", formData);
    console.log(response.data);
  };

  return (
    <Box w={"70%"} m="auto">
      <form onSubmit={handleSubmit}>
        <Heading>INCLUDE SOME DETAILS</Heading>
        <FormControl isRequired>
          <FormLabel>Brand</FormLabel>
          <Input placeholder="Brand" onChange={handleChange} name="brand" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Ad Title</FormLabel>
          <Input
            placeholder="Ad Title"
            onChange={handleChange}
            name="adtitle"
          />
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
          <Input
            placeholder="Price"
            type="number"
            name="price"
            onChange={handleChange}
          />
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
            md: "repeat(3,1fr)",
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
        <select name="location" onChange={handleChange}>
          <option value="banglore">Banglore</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <Button type="submit"> Post</Button>
      </form>
    </Box>
  );
};

export default PostAdd;
