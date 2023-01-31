import { Box, Heading, HStack, Link as ChakraLink, ListItem, Spacer, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../constants'
import NextLink from 'next/link'
import { LinkIcon } from '@chakra-ui/icons'
import { projectProps } from '../types/project'
import { techMap } from '../types/tech'



const Project = (
  { timeRange, title, domain, tagline, descriptionHtml, technologies, images }: projectProps
) => {
  const { colorMode } = useColorMode()
  const link = `https://${domain}`

  return (
    <ListItem my={4} listStyleType="square">
      {/* Timeline date */}
      <Box>
        <time >{timeRange}</time>
      </Box>
      {/* Timeline content */}
      <VStack align="start" mt={1}>
        <HStack justify="space-between" w="100%">
          <Heading as="h3" fontSize="2xl" fontWeight="bold"
        /*  bgg={colorMode === "dark" ? colors.dark : colors.light} */ display="inline"
          >{title}</Heading>
          {/* External link */}
          {
            domain && <NextLink href={link} passHref target="_blank">
              <ChakraLink color={'blue.500'} isExternal>
                {domain}
              </ChakraLink>
              <LinkIcon mx={2} />
            </NextLink>
          }
        </HStack>
        <Heading as="h4" fontSize="xl" fontWeight="normal">{tagline}</Heading>

        <Box dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <HStack>
          {
            technologies?.length && technologies.map((technology, index) => (
              <NextLink target={"_blank"} href={techMap[technology].url} passHref>
                <ChakraLink as="span" fontSize="sm" fontWeight="bold"
                  bg={colorMode === "dark" ? colors.dark : colors.light} display="inline" px={2} py={1}
                >{techMap[technology].name}</ChakraLink>
              </NextLink>
            ))
          }
        </HStack>
      </VStack>
      <Spacer my={4} />
      <hr />


    </ListItem >
  )
}

export default Project