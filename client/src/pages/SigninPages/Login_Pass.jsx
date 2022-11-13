import { Box, Input, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const UserName = ({ input, setInput }) => {
  const [textAreaCount, settextAreaCount] = useState(0);

  const handleInputChange = (el) => {
    setInput(el.target.value);
    settextAreaCount(el.target.value.length);
  };
  let isError = false;
  if (textAreaCount > 0 && textAreaCount < 4) {
    isError = true;
  }
  return (
    <Box textAlign="center">
      <Box>
        <br />
        <Text as="b" fontSize="3xl">
          What's Your Name ?{" "}
        </Text>
        <br />
        <FormControl isInvalid={isError} mb="15px">
          <Input
            maxLength={30}
            fontSize="12px"
            h="32px"
            borderRadius="2px"
            type="text"
            colorScheme="blackAlpha"
            value={input}
            pr="55px"
            focusBorderColor="#00a49f"
            onChange={(el) => {
              handleInputChange(el);
            }}
          />

          <HStack justifyContent="space-between">
            {!isError ? (
              <FormHelperText fontSize="8px"></FormHelperText>
            ) : (
              <FormErrorMessage mt="5px" fontSize="8px">
                Username is required. Please edit the field.
              </FormErrorMessage>
            )}
            <FormLabel fontSize="10px">{textAreaCount}/30</FormLabel>
          </HStack>
        </FormControl>
      </Box>
    </Box>
  );
};
export default UserName;
