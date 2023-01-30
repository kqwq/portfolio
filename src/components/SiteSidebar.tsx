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
  Heading,
  UnorderedList,
  HStack,
  MenuIcon,
  Menu,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { colors, identity, sidebarLinks, socialMediaLinks } from '../constants'
import { useRouter } from 'next/router'
import { AddIcon, ArrowForwardIcon, ChevronRightIcon, ExternalLinkIcon, HamburgerIcon, LinkIcon } from '@chakra-ui/icons'
import { DarkModeSwitch } from './DarkModeSwitch'

const SidebarLinks = ({ router }) => {
  return (
    <>
      {
        sidebarLinks.map(({ name, link, isExternal }, index) => (
          <NextLink key={index} href={link} passHref >
            <HStack>
              {
                router.pathname === link && (
                  <ChevronRightIcon color="white" />
                )
              }
              <Text color="white" fontSize="1xl" >
                {name.toLocaleUpperCase()}
              </Text >
              {
                isExternal && (
                  <ExternalLinkIcon color="white" />
                )

              }
            </HStack>
          </NextLink>
        ))
      }
    </>
  )

}

const SiteSidebar = ({ children }) => {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (

    <Flex direction={{
      base: 'column', lg: 'row'
    }} h="100vh" >
      <DarkModeSwitch />

      <Box w={{ base: '100%', lg: '300px' }} bg={colors.primary} >

        {/* Name and title */}
        <Center h="250px" >
          <VStack spacing={2} >
            <Text color="white" fontSize="3xl" fontWeight="bold" >
              {identity.name.toLocaleUpperCase()}
            </Text >
            <Text color="white" fontSize="1xl" textAlign="center" >
              FULL STACK<br />
              SOFTWARE ENGINEER
            </Text >

          </VStack>
        </Center >
        {
          <VStack
            display={{ base: 'none', lg: 'flex' }}
            spacing={5} align="flex-start" p={5} >
            <SidebarLinks router={router} />

          </VStack>
        }
        {
          // Mobile sidebar, hamburger menu

          <Box display={{ base: 'flex', lg: 'none' }} >

            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              bg="transparent"
              color="white"
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              _focus={{ bg: 'transparent' }}
              p={5}
              w="100%"
              h="50px"
              justifyContent="flex-start"

              leftIcon={<div>
                <HamburgerIcon color="white" />
              </div>}
            >
              Menu
            </Button>
          </Box>
        }
        {
          mobileMenuOpen && (
            <Box display={{ base: 'flex', lg: 'none' }} >
              <VStack
                spacing={5} align="flex-start" p={5} >
                <SidebarLinks router={router} />
              </VStack>
            </Box>
          )
        }




      </Box >

      <Box w={{ base: '100%', lg: 'calc(100% - 300px)' }} >
        {children}
      </Box>
    </Flex >

  )
}

export default SiteSidebar