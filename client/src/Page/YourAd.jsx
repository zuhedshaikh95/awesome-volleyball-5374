import React, { useEffect } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td, 
  TableContainer,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";



const YourAd = () => {

    const [data,setData] = useState([])
    const getdata = async() => {
        let response = await axios.get("http://localhost:8080/bikes");
        let data = response.data
        setData(data);
    }
    console.log(data)

    useEffect(() => {
      getdata()
    }, [])
    
  return (
    <div>
      <TableContainer w="70%" m="auto">
        <Table size="sm">
          <Tbody>
            {data?.map((el)=> { return (
                <Tr border="solid" marginBottom="100px">
                <Td w="20%" h="10em"><Image src={el.productImages[0]}></Image></Td>
                <Td>{el.productName}</Td>
                <Td>{el.price}</Td>
                <Td>Edit</Td>
                <Td>Remove</Td>
                </Tr>)
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default YourAd;
