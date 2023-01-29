import React from 'react'
import {
  Link as ChakraLink,
  Text,
  Container,
  Button,
  Flex,
  Box,
  Center,
  VStack,
} from '@chakra-ui/react'
import { colors, identity } from '../constants'

const SiteSidebar = () => {
  return (

    <Box w={{ base: '100%', lg: '300px' }} bg={colors.primary} >

      {/* Name and title */}
      <Center h="300px" >
        <VStack spacing={2} >
          <Text color="white" fontSize="3xl" fontWeight="bold" >
            {identity.name.toLocaleUpperCase()}
          </Text >
          <Text color="white" fontSize="1xl" >
            {identity.title.toLocaleUpperCase()}
          </Text >
        </VStack>
      </Center >

    </Box >
  )
}

export default SiteSidebar