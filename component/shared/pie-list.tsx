import { Box, Flex,Text } from '@mantine/core'
import React from 'react'
import { detailslist } from './aside-data'

const PieList = () => {
  return (
    <Flex direction='column' gap='16px'>
        {detailslist.map((item,idx)=>(
            <Flex key={idx} align='center' gap='8px'>
                <Box  bg={item.color} w={17} h={17} className='rounded-[3px]'></Box>
                <Text>{item.text}</Text>
            </Flex>
        ))}
    </Flex>
  )
}

export default PieList