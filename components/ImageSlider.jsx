import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {IoIosArrowBack} from "react-icons/io"
import {MdArrowForwardIos} from "react-icons/md"
function ImageSlider({images}) {
    
    const [im,setIm]=useState([images])
    const [image,setImage]=useState("")
    
    
    //  const next = ()=>{
    //      setIm(prev=>prev+1)
    //  }
    //  useEffect(()=>{
    //     im.map((i)=>{
    //         setImage(i[0])
    //     })
    //  },[])
    //  console.log(image)
  return (
    <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    
    bgImage={`${images}`}
    bgPosition='center'
    bgRepeat='no-repeat'
    height="450px"
    
  >
    <Box  display="flex" width="100%" justifyContent={"space-between"} >
      <Button  borderRadius={"0"} >
        <IoIosArrowBack size={25}/>
      </Button>
      <Button borderRadius={"0"}>
        <MdArrowForwardIos size={25}/>
      </Button>
    </Box>
  </Box>
  )
}

export default ImageSlider

//<Image  width={"100%"} height="450px" margin={"auto"}  src={data.productImages}/>