import { Icon, Text, Link as ChakraLink, Container, Heading, Table, TableContainer, Td, Tr, HStack } from '@chakra-ui/react'
import React from 'react'
import SiteSidebar from '../components/SiteSidebar'
import { socialMediaLinks } from '../constants'
import NextLink from 'next/link'


const ContactPage = () => {
  return (
    <SiteSidebar>
      <Container maxW={"container.xl"} py={12}>
        <Heading as="h1" size="2xl" my={4}>Contact Me</Heading>

        <TableContainer>
          <Table variant="simple" my={4} maxW="lg">
            {
              socialMediaLinks.map(({ name, user, url, icon }, index) => (
                <Tr key={index}>
                  <Td>
                    <HStack>
                      <Icon as={icon} />
                      <Text>{name}</Text>

                    </HStack>
                  </Td>
                  <Td>
                    <NextLink href={url} passHref>
                      <ChakraLink >
                        {user}
                      </ChakraLink>
                    </NextLink>
                  </Td>

                </Tr>
              ))
            }
          </Table>
        </TableContainer>
      </Container>
    </SiteSidebar>
  )
}

export default ContactPage