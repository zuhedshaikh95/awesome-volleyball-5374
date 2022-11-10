import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const {id} = useParams()
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/all?id=${id}`).then((res)=>setData(res.data))
    },[])
    console.log(data)
  return (
   <>
       <h1>Products </h1>
    <Flex  width={"100%"} direction={["column","column","row","row"]} >
          <SimpleGrid border={"1px solid black"} columns={[2,2,1,1]}>
              <Box width={"100%"}>
              {
                data.map((i)=>(
                    <Image  width={"100%"} src={i.productImages}/>
                ))
              }
              </Box>
              <Box>
                  {
                    data.map((d)=>(
                        <Text>
                            {d.Discription}
                        </Text>
                    ))
                  }
              </Box>
         </SimpleGrid>


         <SimpleGrid  border={"1px solid black"} columns={[2,2,1,1]}>
            <Box>
                 <Flex>
                    {
                        data.map((p)=>(
                            <Box>
                                ₹{p.price}
                            </Box>
                        ))
                    }
                    <Box>
                        <Box>
                            {/* {logo} */}
                        </Box>
                        <Box>
                            {/* {logo} */}
                        </Box>
                    </Box>


                 </Flex>
                 <Box>
                    {
                         data.map((p)=>(
                            <Box>
                                {p.about}
                            </Box>
                        ))
                    }
                 </Box>
                 <Box>
                    {
                         data.map((p)=>(
                            <Box>
                                {p.address}
                            </Box>
                        ))
                    }
                 </Box>
            </Box>
         </SimpleGrid>
    </Flex>   
   </>
  )
}

export default SingleProduct