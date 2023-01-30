import { Box, Heading, HStack, ListItem, Spacer, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../constants'

// Define tpyes for project
type ProjectProps = {
  timeRange: string
  title?: string
  tagline?: string
  descriptionHtml: string
  technologies?: string[]
  images?: string[]
}

const Project = (
  { timeRange, title, tagline, descriptionHtml, technologies, images }: ProjectProps
) => {
  const { colorMode } = useColorMode()

  return (
    <ListItem my={4} listStyleType="square">
      {/* Timeline date */}
      <Box>
        <time >{timeRange}</time>
      </Box>
      {/* Timeline content */}
      <VStack align="start" spacing={2} mt={1}>
        <Text as="h3" fontSize="2xl" fontWeight="bold"
          bg={colorMode === "dark" ? colors.dark : colors.light} display="inline" px={2} py={1}
        >{title}</Text>
        <Heading as="h4" fontSize="xl" fontWeight="normal">{tagline}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        <HStack>
          {
            technologies.map((technology, index) => (
              <Text key={index} as="span" fontSize="sm" fontWeight="bold" color="white"
                bg={colorMode === "dark" ? colors.secondary : colors.tertiary} display="inline" px={2} py={1}
              >{technology}</Text>
            ))
          }
        </HStack>
      </VStack>
      <Spacer my={4} />
      <hr />


    </ListItem>
  )
}

export default Project