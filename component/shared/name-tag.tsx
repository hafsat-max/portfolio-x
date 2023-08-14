import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const NameTag = () => {
  return (
    <Flex justify='space-between' align='center' gap='12px'>
        <Box w='40px' h='40px'sx={{borderRadius: "100%", backgroundImage:`url('/img-head.svg')`}}/>
        <Text variant='base' fw={600}>Jameel Burton</Text>
    </Flex>
  )
}

export default NameTag