import {
  Link as ChakraLink,
  Text,
  Container,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import SiteSidebar from '../components/SiteSidebar'
import MainSite from '../components/MainSite'

const Index = () => (
  <>
    <Flex direction={{
      base: 'column', lg: 'row'
    }} bg="black" h="100vh" >
      <SiteSidebar />

      <Box w={{ base: '100%', lg: 'calc(100% - 300px)' }} bg="white" >
        <MainSite />
      </Box >
    </Flex >
  </>
)

export default Index
