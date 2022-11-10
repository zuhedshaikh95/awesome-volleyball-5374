import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import {Box, Button, Image, SimpleGrid, Skeleton, Stack, Text, Tooltip} from "@chakra-ui/react"
import { getData } from '../api/api'
import { Link } from 'react-router-dom'
import {FiHeart} from "react-icons/fi"
import {BsSuitHeartFill} from "react-icons/bs"
import Footer from '../components/Footer'


function HomePage() {
    const [products,setProducts] =useState([])
    const [limit,setLimit]=useState(15)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [heart,setHeart]=useState(false)
    
    useEffect(()=>{
        
        getData({
            limit:limit
        }).then((res)=>{
            setProducts(res.data)
            setIsLoaded(false)
            
        })
    },[limit])
    useEffect(()=>{
        setInterval(()=>{
            setIsLoaded(true)
        },2000)
    },[limit])
     const changeHeart=(e)=>{
       
        
     }
     console.log(heart)
  return (

      <>
    

                 
        <Box width={"90%"} margin="auto">
       <Box display={"flex"}>
       <Text fontSize={"32px"}>
        Fresh recommendations
        </Text>
       </Box>
       
        <SimpleGrid  columns={[1,2,3,4]} gap={"15px"} margin="auto" marginTop={"20px"}>
        <Box bg={"#6495ED"} borderRadius="10px">
            
        </Box>
        {
         products.map((item)=>(
         
            <>
           <Box key={item.id} margin={"auto"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              
           <Box onClick={changeHeart}>
               {/* <Tooltip label="I don't close on click" closeOnClick={false}> */}
               <FiHeart  size={25} style={{marginLeft:"10px",marginTop:"20px"} }/>
               {/* </Tooltip> */}
             
           </Box>
           <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
           <Link to={`/${item.id}`}>
           <Box margin={"auto"} width={"90%"}>
                
                <Image margin={"auto"}  width={"90%"} height={"220px"} src={item.productImages} />
            </Box>
            </Link>

           </Skeleton>
             
        
              <Box p='6'>
               
              <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
              <Link to={`/${item.id}`}>
              <Box
                  mt='1'
                 
                  
                  lineHeight='tight'
                  noOfLines={1}
                  display="flex"
                >
                  <Text fontSize={["22px","24px","26px","28px"]} as="b">
                  ₹ {item.price}
                  </Text>
                </Box>
                </Link>
              </Skeleton>
              <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
              <Link to={`/${item.id}`}>
                <Box
                  mt='1'
                  
                  lineHeight='tight'
                  noOfLines={1}
                  
                  
                >
                  <Text  fontSize={["13px","14px","15px","18px"]} color={"grey"}>
                  {item.description}
                  </Text>
                </Box>
                </Link>
                </Skeleton>
                 
                <Link to={`/${item.id}`}>
                <Box
                  mt='1'
                 
                  lineHeight='tight'
                  
                  
                  display={"flex"}
                  justifyContent="space-between"
                  color={"grey"}
                  marginTop="10px"
                  
                  width="100%"
               
                >
                      <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                   <Box>
                      <Text fontSize={["12px","12px","12px","15px"]}>
                        {item.location}
                      </Text>

                   </Box>
                   </Skeleton>
                    <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
                   <Box>
                      <Text fontSize={["12px","12px","12px","15px"]}>
                        {item.postedOn}
                      </Text>

                   </Box>
                   </Skeleton>
                </Box>
                </Link>
           
              </Box>
              
            </Box>
           
            </>
          ))
        } 
        
    </SimpleGrid>
  
      </Box>
      <Skeleton startColor='black' endColor='white' isLoaded={isLoaded}>
       <Box marginTop={"50px"}>
       <Button fontSize={"19px"} as="b" bg={"white"} border="3px solid" p={7} onClick={()=>setLimit(prev=>prev+limit)}>
         Load more
      </Button>
       </Box>
       </Skeleton>
       
            
        
           <Footer/>
    
            
  </>
  )
}

export default HomePage