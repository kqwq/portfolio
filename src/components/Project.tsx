import { Box, Heading, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

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
  return (
    <ListItem my={8} listStyleType="square">
      {/* Timeline date */}
      <Box>
        <time >{timeRange}</time>
      </Box>
      {/* Timeline content */}
      <Box>
        <Text as="h3" fontSize="2xl" fontWeight="bold">{title}</Text>
        <Heading as="h4" fontSize="xl" fontWeight="normal">{tagline}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: descriptionHtml }} />

      </Box>
      <hr />


    </ListItem>
  )
}

export default Project