import { Icon, Text, Link as ChakraLink, Container, Heading, Table, TableContainer, Td, Tr, HStack, Tbody, Tooltip } from '@chakra-ui/react'
import React from 'react'
import SiteSidebar from '../components/SiteSidebar'
import { socialMediaLinks } from '../constants'
import NextLink from 'next/link'
import { CopyIcon, ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'


const ContactPage = () => {
  const [showCopiedTooltip, setShowCopiedTooltip] = React.useState(false)


  return (
    <SiteSidebar>
      <Container maxW={"container.sm"} py={12}>
        <Heading as="h1" size="lg" my={4}>Contact Me</Heading>

        <TableContainer>
          <Table variant="simple" my={4} maxW="lg">
            <Tbody>
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
                      <HStack>
                        <Tooltip hasArrow label="Copied!" isOpen={url === "" && showCopiedTooltip} placement="top">

                          <NextLink href={url} passHref onClick={
                            () => {
                              if (!showCopiedTooltip && url === "") {
                                navigator.clipboard.writeText(user)
                                setShowCopiedTooltip(true)
                                setTimeout(() => {
                                  setShowCopiedTooltip(false)
                                }, 1000)
                              }

                            }
                          }>
                            <ChakraLink as="span" color={url ?
                              "blue.500" : ""} >
                              {user}
                            </ChakraLink>
                          </NextLink>
                        </Tooltip>
                        {
                          name === "Email" ? (
                            <ExternalLinkIcon />) :
                            url ? (
                              <LinkIcon />
                            ) :
                              <CopyIcon />
                        }

                      </HStack>
                    </Td>

                  </Tr>
                ))
              }</Tbody>
          </Table>
        </TableContainer>
      </Container>
    </SiteSidebar >
  )
}

export default ContactPage