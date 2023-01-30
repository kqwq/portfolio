import { Box, Container, Heading, OrderedList, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'
import Project from '../components/Project'
import SiteSidebar from '../components/SiteSidebar'
import { projects } from '../constants'

const PortfolioPage = () => {
  return (
    <SiteSidebar>

      <Container maxW={"container.xl"} py={12}>

        <Heading fontWeight={"normal"}>Portfolio</Heading>
        <Text>Here is a list of projects I have built using frontend and backend technologies.</Text>
        <UnorderedList>
          {
            projects.map((
              project, index) => {
              return (
                <Project key={index} {...project} />
              )
            })
          }
        </UnorderedList>

      </Container>

    </SiteSidebar>
  )
}

export default PortfolioPage