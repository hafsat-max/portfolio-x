import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const NameTag = () => {
  return (
    <Flex justify='space-between' align='center' gap='12px'>
        <Box w='40px' h='40px'sx={{borderRadius: "100%", backgroundImage:`url('/img-head.svg')`}}/>
        <Text size='base' variant="steel" fw={600} className='max-[445px]:hidden'>Jameel Burton</Text>
    </Flex>
  )
}

export default NameTag